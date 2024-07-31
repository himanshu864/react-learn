import { useState, useEffect, useCallback } from "react";
import questions from "../questions";
import answerKey from "../answerKey";

const TIMER = 5000;
const PAUSE = 2000;

export default function Quiz({ qn, onSelect }) {
  const [timeLeft, setTimeLeft] = useState(TIMER);
  const [isPaused, setPause] = useState(false);
  const [selected, setSelected] = useState(-1);

  // when user select or skip
  const handleSelect = useCallback((i) => {
    setPause(true);
    setTimeLeft(PAUSE);
    setSelected(i);
  }, []);

  // time keeps on running
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((left) => left - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  // time up
  useEffect(() => {
    if (timeLeft === 0) {
      if (!isPaused) handleSelect(-1);
      else {
        setPause(false);
        setTimeLeft(TIMER);
        onSelect(selected);
      }
    }
  }, [timeLeft, handleSelect, onSelect, selected, isPaused]);

  const firstHalf = 2 * timeLeft > PAUSE;

  return (
    <div id="quiz">
      <div id="question">
        <progress
          className={isPaused && firstHalf ? "answered" : undefined}
          value={isPaused && firstHalf ? timeLeft - PAUSE / 2 : timeLeft}
          max={isPaused ? PAUSE / 2 : TIMER}
        />
        <h2>{questions[qn].text}</h2>
      </div>

      <div id="answers">
        {questions[qn].answers.map((ans, i) => {
          let classes = "";
          if (i === selected && isPaused) {
            if (firstHalf) classes = "selected";
            else classes = answerKey[qn] === i ? "correct" : "wrong";
          }

          return (
            <div className="answer" key={i}>
              <button
                onClick={() => handleSelect(i)}
                className={classes}
                disabled={isPaused}
              >
                {ans}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

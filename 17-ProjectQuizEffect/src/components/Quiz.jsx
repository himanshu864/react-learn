import { useState } from "react";

import ProgressBar from "./ProgressBar.jsx";
import QUESTIONS from "../questions.js";
import ANSWERS from "../answerKey.js";

const TIMER = 5000;
const PAUSE = 1000;

export default function Quiz({ qn, onSelect }) {
  const [answerState, setAnswerState] = useState("");
  const [selected, setSelected] = useState(-1);

  function handleSelect(i) {
    setSelected(i);
    setAnswerState("selected");

    setTimeout(() => {
      if (i == ANSWERS[qn]) setAnswerState("correct");
      else setAnswerState("wrong");

      setTimeout(() => {
        setAnswerState("");
        onSelect(i);
      }, PAUSE);
    }, PAUSE);
  }

  return (
    <div id="quiz">
      <div id="question">
        {/* V V V Important: Genius : key value on component, which helps unmounts and mounts */}
        <ProgressBar
          key={answerState}
          TIMER={answerState ? PAUSE : TIMER}
          onSkip={() => handleSelect(-1)}
          answerState={answerState}
        />

        <h2>{QUESTIONS[qn].text}</h2>
        <ul id="answers">
          {QUESTIONS[qn].answers.map((answer, i) => {
            return (
              <li key={i} className="answer">
                <button
                  className={i === selected ? answerState : undefined}
                  onClick={() => handleSelect(i)}
                  disabled={answerState}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

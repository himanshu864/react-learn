import { useState, useRef } from "react";

import ResultModal from "./resultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      setTimerStarted(false);
      dialog.current.showModal();
    }, 1000 * targetTime);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
  };

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer stopped"}
        </p>
      </section>
    </>
  );
}

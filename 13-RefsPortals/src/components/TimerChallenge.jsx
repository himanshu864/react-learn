import { useState, useRef } from "react";

import ResultModal from "./resultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeLeft, setTimeLeft] = useState(targetTime * 1000);
  const isTimerActive = timeLeft > 0 && timeLeft < targetTime * 1000;

  if (timeLeft <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  const handleStart = () => {
    timer.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  const handleReset = () => {
    setTimeLeft(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        timeLeft={timeLeft}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={isTimerActive ? "active" : undefined}>
          {isTimerActive ? "Timer is running..." : "Timer stopped"}
        </p>
      </section>
    </>
  );
}

import { useState, useEffect } from "react";

export default function ProgressBar({ TIMER, onSkip, answerState }) {
  const [timeLeft, setTimeLeft] = useState(TIMER);

  // timer for skipping question if no select
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!answerState) onSkip();
    }, TIMER);
    return () => clearTimeout(timeout);
  }, [TIMER, onSkip, answerState]);

  // very important to clean up intervals for strictMode and for next questions
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((left) => left - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress
      className={answerState === "selected" ? "answered" : undefined}
      value={timeLeft}
      max={TIMER}
    />
  );
}

import { useState, useEffect } from "react";

export default function ProgressBar({ timeout, onSkip }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  // timer for skipping question if no select
  useEffect(() => {
    const timer = setTimeout(() => onSkip(), timeout);
    return () => clearTimeout(timer);
  }, [timeout, onSkip]);

  // very important to clean up intervals for strictMode and for next questions
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((left) => left - 10);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return <progress className="question-time" value={timeLeft} max={timeout} />;
}

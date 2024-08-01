import { useState, useEffect } from "react";

const TIMER = 5000;

export default function Progress({ onSelect, trigger }) {
  const [timeLeft, setTimeLeft] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((left) => left - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft === 0) {
      onSelect(-1);
      setTimeLeft(TIMER);
    }
  }, [timeLeft, onSelect]);

  useEffect(() => setTimeLeft(TIMER), [trigger]);

  return <progress value={timeLeft} max={TIMER} />;
}

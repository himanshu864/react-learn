import { useEffect, useState } from "react";

export default function ProgressBar({ TIMER }) {
  const [timeLeft, setTimeLeft] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("-10");
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return <progress value={timeLeft} max={TIMER} />;
}

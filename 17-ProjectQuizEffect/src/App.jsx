import { useState, useCallback } from "react";

import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
import QUESTIONS from "./questions";

function App() {
  const [userAnswers, setUserAnswers] = useState([]);

  const handleClick = useCallback((i) => {
    setUserAnswers((prevAns) => [...prevAns, i]);
  }, []);

  const qn = userAnswers.length;

  return (
    <>
      <Header />
      {qn < QUESTIONS.length ? (
        <Quiz qn={qn} onSelect={handleClick} />
      ) : (
        <Summary userAns={userAnswers} />
      )}
    </>
  );
}

export default App;

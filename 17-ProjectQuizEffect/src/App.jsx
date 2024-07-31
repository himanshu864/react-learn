import { useCallback, useState } from "react";

import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";

const initialAnswers = new Array(7).fill(-1);

function App() {
  const [qNumber, setQNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState(initialAnswers);

  const handleClick = useCallback(
    (i) => {
      setUserAnswers((prevAns) => {
        const newAns = [...prevAns];
        newAns[qNumber] = i;
        return newAns;
      });
      setQNumber((prev) => prev + 1);
    },
    [qNumber]
  );

  return (
    <>
      <Header />
      {qNumber < 7 ? (
        <Quiz qn={qNumber} onSelect={handleClick} />
      ) : (
        <Summary userAns={userAnswers} />
      )}
    </>
  );
}

export default App;

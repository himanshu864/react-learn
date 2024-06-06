import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";

function App() {
  const [state, setState] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 1,
  });

  function handleChange(changes) {
    setState((prevState) => {
      return { ...prevState, ...changes };
    });
  }

  return (
    <>
      <Header />
      <UserInput onSelect={handleChange} />
      <Result inputData={state} />
    </>
  );
}

export default App;

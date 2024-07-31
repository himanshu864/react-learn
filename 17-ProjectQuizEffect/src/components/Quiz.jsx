import { useState } from "react";
import questions from "../questions";
import Progress from "./Progress";

export default function Quiz({ qn, onSelect }) {
  const [trigger, setTrigger] = useState(0);

  const handleSelect = (i) => {
    onSelect(i);
    setTrigger((prev) => prev + 1);
  };

  return (
    <div id="quiz">
      <div id="question">
        <Progress onSelect={onSelect} trigger={trigger} />
        <h2>{questions[qn].text}</h2>
      </div>

      <div id="answers">
        {questions[qn].answers.map((ans, i) => (
          <div className="answer" key={i}>
            <button onClick={() => handleSelect(i)}>{ans} </button>
          </div>
        ))}
      </div>
    </div>
  );
}

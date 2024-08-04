import QUESTIONS from "../questions.js";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 5000;

export default function Quiz({ qn, onSelect }) {
  function handleSelect(i) {
    onSelect(i);
  }

  return (
    <div id="quiz">
      <div id="question">
        {/* V V V Important: Genius : key value on component, which helps unmounts and mounts */}
        <ProgressBar key={qn} timeout={TIMER} onSkip={() => handleSelect(-1)} />
        <h2>{QUESTIONS[qn].text}</h2>
        <ul id="answers">
          {QUESTIONS[qn].answers.map((answer, i) => (
            <li key={i} className="answer">
              <button onClick={() => handleSelect(i)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

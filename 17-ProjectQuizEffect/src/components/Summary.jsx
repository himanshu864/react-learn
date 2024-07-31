import questions from "../questions";
import answerKey from "../answerKey";

export default function Summary({ userAns }) {
  let skippedPer = 0;
  let correctPer = 0;
  let incorrectPer = 0;

  for (let i = 0; i < userAns.length; i++) {
    if (userAns[i] === -1) skippedPer++;
    else if (userAns[i] === answerKey[i]) correctPer++;
    else incorrectPer++;
  }

  skippedPer = Math.round((skippedPer * 100) / 7);
  correctPer = Math.round((correctPer * 100) / 7);
  incorrectPer = Math.round((incorrectPer * 100) / 7);

  return (
    <div id="summary">
      <img src="/src/assets/quiz-complete.png" alt="trophy" />
      <h2>Yatta!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPer}%</span>
          <span className="text">Skipped.</span>
        </p>
        <p>
          <span className="number"> {correctPer}% </span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPer}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {questions.map((q, i) => {
          let classes = "user-answer ";
          if (userAns[i] == -1) classes += "skipped";
          else if (userAns[i] === answerKey[i]) classes += "correct";
          else classes += "wrong";

          return (
            <li key={i}>
              <h3>{i + 1}</h3>
              <div className="question">{q.text}</div>
              <div className={classes}>
                {userAns[i] !== -1
                  ? q.answers[userAns[i]]
                  : q.answers[answerKey[i]]}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

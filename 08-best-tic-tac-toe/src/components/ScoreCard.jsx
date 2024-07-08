import { useState } from "react";

export default function ScoreCard({ name, mark, score, onEdit }) {
  const [isEdit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEdit() {
    setEdit((edit) => !edit);

    if (mark == "X") onEdit(1, playerName);
    else onEdit(0, playerName);
  }

  function handleInput(event) {
    setPlayerName(event.target.value);
  }

  return (
    <div className="card">
      <div className="player-editer">
        {!isEdit ? (
          <span className="player player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            className="player p-input"
            value={playerName}
            onChange={handleInput}
          />
        )}

        <span className="edit" onClick={handleEdit}>
          {isEdit ? "Save" : "Edit"}
        </span>
      </div>

      <div className="score-container">
        <span>{mark}</span>
        <span>-</span>
        <span id="scoreP1">{score}</span>
      </div>
    </div>
  );
}

import { useState } from "react";

export default function Player({ initialName, symbol }) {
  // to toggle between edit and save state (input or span)
  const [isEditing, setIsEditing] = useState(false);
  // to dynamically change playerName when input change
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditing() {
    setIsEditing((isEditing) => !isEditing);
  }

  function handleInput(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleInput}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const [inputName, setInputName] = useState("");

  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input
          type="text"
          onChange={(e) => setInputName(e.target.value)}
          value={inputName}
        />
        <button onClick={() => setPlayerName(inputName)}>Set Name</button>
      </p>
    </section>
  );
}

import { useState } from "react";

import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

export default function App() {
  // Since both Player and Gameboard need ActivePlayer
  // Lift State Up to the Closed Ancestor Component
  const [activePlayer, setActivePlayer] = useState("X");

  function handleGameSelect() {
    setActivePlayer((activePlayer) => (activePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard
          onTileSelect={handleGameSelect}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

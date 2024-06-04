import { useState } from "react";

import ScoreCard from "./components/ScoreCard.jsx";
import PlayerMode from "./components/PlayerMode.jsx";
import DifficultMode from "./components/DifficultMode.jsx";
import StartButton from "./components/StartButton.jsx";
import GameGrid from "./components/GameGrid.jsx";

let areYouSingle = true;
let difficulty = 2;

export default function App() {
  const [isPlayersVisible, setPlayerVisibility] = useState(true);
  const [isDifficultyVisible, setDifficultyVisibility] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  function handleSpSelect() {
    setPlayerVisibility(false);
    setDifficultyVisibility(true);
    areYouSingle = true;
  }

  function handleMpSelect() {
    setPlayerVisibility(false);
    setGameOver(true);
    areYouSingle = false;
  }

  function handleDiffSelect() {
    setDifficultyVisibility(false);
    setGameOver(true);
  }

  return (
    <>
      <h1 className="heading">TIC TAC TOE</h1>

      <ScoreCard />

      {isPlayersVisible && (
        <PlayerMode onSpSelect={handleSpSelect} onMpSelect={handleMpSelect} />
      )}

      {isDifficultyVisible && <DifficultMode onDiffSelect={handleDiffSelect} />}

      {isGameOver && <StartButton />}

      <GameGrid />

      <div className="score hide"></div>
    </>
  );
}

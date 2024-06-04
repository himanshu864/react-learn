import { useState } from "react";

import ScoreCard from "./components/ScoreCard.jsx";
import PlayerMode from "./components/PlayerMode.jsx";
import DifficultMode from "./components/DifficultMode.jsx";
import StartButton from "./components/StartButton.jsx";
import GameGrid from "./components/GameGrid.jsx";

let areYouSingle = true;

export default function App() {
  const [isPlayersVisible, setPlayerVisibility] = useState(true);
  const [isDiffVisible, setDiffVisibility] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(2);

  function handleSpSelect() {
    setPlayerVisibility(false);
    setDiffVisibility(true);
    areYouSingle = true;
  }

  function handleMpSelect() {
    setPlayerVisibility(false);
    setGameOver(true);
    areYouSingle = false;
  }

  function handleDiffSelect(selectedDifficulty) {
    setDiffVisibility(false);
    setGameOver(true);
    setDifficulty(selectedDifficulty);
  }

  return (
    <>
      <h1 className="heading">TIC TAC TOE</h1>

      <ScoreCard />

      {isPlayersVisible && (
        <PlayerMode onSpSelect={handleSpSelect} onMpSelect={handleMpSelect} />
      )}

      {isDiffVisible && <DifficultMode onDiffSelect={handleDiffSelect} />}

      {isGameOver && <StartButton />}

      <GameGrid />

      <div className="score hide"></div>
    </>
  );
}

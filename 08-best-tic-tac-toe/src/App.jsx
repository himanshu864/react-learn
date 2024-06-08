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
  const [isGameOn, setGameOn] = useState(false);
  const [GameScore, setGameScore] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);

  function handleModeSelect(player) {
    setPlayerVisibility(false);
    areYouSingle = player == 1;

    if (areYouSingle) setDiffVisibility(true);
    else setGameOver(true);
  }

  function handleDiffSelect(selectedDifficulty) {
    setDiffVisibility(false);
    setGameOver(true);
    setDifficulty(selectedDifficulty);
  }

  function handleGameStart() {
    setGameOver(false);
    setGameOn(true);

    setGameScore("");
    setResetTrigger((prev) => prev + 1);
  }

  function handleGameOver(score) {
    if (score == 1) setGameScore("You Won!");
    else if (score == 0) setGameScore("You Lost!");
    else setGameScore("It's a Draw!");

    setGameOver(true);
  }

  return (
    <>
      <h1 className="heading">TIC TAC TOE</h1>

      {/* Handle Scoring System */}
      <ScoreCard />

      {isPlayersVisible && <PlayerMode onModeSelect={handleModeSelect} />}

      {isDiffVisible && <DifficultMode onDiffSelect={handleDiffSelect} />}

      {GameScore != "" && <div className="score">{GameScore}</div>}

      {/* Logic based on lonely and hard Blinking */}
      {isGameOn && (
        <GameGrid
          lonely={areYouSingle}
          difficulty={difficulty}
          trigger={resetTrigger}
          onGameOver={handleGameOver}
        />
      )}

      {isGameOver && <StartButton onGameStart={handleGameStart} />}
    </>
  );
}

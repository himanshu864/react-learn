import { useState } from "react";
import ScoreCard from "./components/ScoreCard.jsx";
import PlayerMode from "./components/PlayerMode.jsx";
import DifficultMode from "./components/DifficultMode.jsx";
import StartButton from "./components/StartButton.jsx";
import GameGrid from "./components/GameGrid.jsx";

export default function App() {
  const [isPlayersVisible, setPlayerVisibility] = useState(true);
  const [areYouSingle, setLoneliness] = useState(true);
  const [isDiffVisible, setDiffVisibility] = useState(false);
  const [isGameOver, setGameOver] = useState(false);
  const [difficulty, setDifficulty] = useState(2);
  const [isGameOn, setGameOn] = useState(false);
  const [GameScore, setGameScore] = useState("");
  const [resetTrigger, setResetTrigger] = useState(0);
  const [playerScore, setPlayerScore] = useState([0, 0]);
  const [playerNames, setPlayerNames] = useState(["Player Two", "Player One"]);

  function handleModeSelect(player) {
    setPlayerVisibility(false);
    setLoneliness(player == 1);

    if (player == 1) setDiffVisibility(true);
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
    if (score == 1) setGameScore(`You Won, ${playerNames[1]}!`);
    else if (score == 0) {
      if (areYouSingle) setGameScore(`You Lost, ${playerNames[1]}`);
      else setGameScore(`You Won, ${playerNames[0]}!`);
    } else setGameScore("It's a Draw!");

    if (score != 2) {
      setPlayerScore((prevScore) => {
        const newScore = [...prevScore];
        newScore[score]++;
        return newScore;
      });
    }
    setGameOver(true);
  }

  function handlePlayerNameEdit(playerIdx, playerName) {
    setPlayerNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[playerIdx] = playerName;
      return newNames;
    });
  }

  return (
    <>
      <h1 className="heading" onClick={() => window.location.reload()}>
        TIC TAC TOE
      </h1>

      <div className="cards">
        <ScoreCard
          name={playerNames[1]}
          mark={"X"}
          score={playerScore[1]}
          onEdit={handlePlayerNameEdit}
        />
        <ScoreCard
          name={playerNames[0]}
          mark={"O"}
          score={playerScore[0]}
          onEdit={handlePlayerNameEdit}
        />
      </div>

      {isPlayersVisible && <PlayerMode onModeSelect={handleModeSelect} />}

      {isDiffVisible && <DifficultMode onDiffSelect={handleDiffSelect} />}

      {GameScore != "" && <div className="score">{GameScore}</div>}

      {/* Style and Blinking */}
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

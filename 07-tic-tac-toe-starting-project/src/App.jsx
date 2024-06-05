import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Logs from "./components/Logs.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

function deriveActivePlayer(gameTurns) {
  return gameTurns.length % 2 ? "O" : "X";
}

function deriveGrid(gameTurns) {
  // need to create deep copy as Array of Objects
  let grid = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    grid[row][col] = player;
  }
  return grid;
}

// Check of winner
function deriveWinner(grid, playerNames) {
  let winner = null;

  for (const comb of WINNING_COMBINATIONS) {
    const first = grid[comb[0].row][comb[0].col];
    const second = grid[comb[1].row][comb[1].col];
    const third = grid[comb[2].row][comb[2].col];

    if (first && first == second && second == third)
      winner = playerNames[first];
  }
  return winner;
}

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const activePlayer = deriveActivePlayer(gameTurns);
  const grid = deriveGrid(gameTurns);
  const winner = deriveWinner(grid, playerNames);
  const isDraw = gameTurns.length == 9 && !winner;

  // Update Game Turns and re-render entire App components
  function handleGameSelect(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  // re-render game when player name changed
  function handlePlayerNameChange(symbol, newName) {
    setPlayerNames((prevNames) => {
      return { ...prevNames, [symbol]: newName };
    });
  }

  // Reset gameTurn and therefore re-render everything
  function handleRestart() {
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
            onSave={handlePlayerNameChange}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
            onSave={handlePlayerNameChange}
          />
        </ol>

        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}

        <GameBoard onTileSelect={handleGameSelect} gameBoard={grid} />
      </div>
      <Logs turns={gameTurns} names={playerNames} />
    </main>
  );
}

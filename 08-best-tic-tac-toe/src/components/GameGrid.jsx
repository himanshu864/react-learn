import { useState, useEffect } from "react";
import { initialGrid, availableMoves, winCheck } from "../utils/GameUtils";

let gameOver = false;

export default function GameGrid({ lonely, difficulty, trigger, onGameOver }) {
  const [grid, setGrid] = useState(initialGrid);

  // reset grid whenever restart
  useEffect(() => {
    setGrid(initialGrid);
    gameOver = false;
  }, [trigger]);

  function handleClick(row, col) {
    if (gameOver || grid[row][col] != -1) return;

    const playerOneTurn = availableMoves(grid) % 2;

    let newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col] = playerOneTurn ? 1 : 0;

    setGrid(newGrid);

    const score = winCheck(newGrid);

    if (score != 2) {
      gameOver = true;
      onGameOver(score);
    }
  }

  return (
    <div className="game-grid">
      {grid.map((line, row) =>
        line.map((x, col) => (
          <div
            key={3 * row + col}
            className="tile"
            onClick={() => handleClick(row, col)}
          >
            {x == 1 ? "X" : x == 0 ? "O" : ""}
          </div>
        ))
      )}
    </div>
  );
}

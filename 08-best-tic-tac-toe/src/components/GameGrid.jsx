import { useState, useEffect } from "react";
import { initialGrid, availableMoves, winCheck } from "../utils/GameUtils.js";
import randomAI from "../utils/randomAI.js";
import instantKill from "../utils/instantKill.js";
import impossibleAI from "../utils/impossibleAI.js";
let gameOver = false;

export default function GameGrid({ lonely, difficulty, trigger, onGameOver }) {
  const [grid, setGrid] = useState(initialGrid);

  useEffect(() => {
    setGrid(initialGrid);
    gameOver = false;
  }, [trigger]);

  function handleClick(row, col) {
    if (gameOver || grid[row][col] != -1) return;

    let newGrid = JSON.parse(JSON.stringify(grid));

    if (!lonely) {
      const playerOneTurn = availableMoves(grid).length % 2;
      newGrid[row][col] = playerOneTurn ? 1 : 0;
    } else newGrid[row][col] = 1;

    setGrid(newGrid);

    const score = winCheck(newGrid);
    if (score != 2) {
      gameOver = true;
      onGameOver(score);
      return;
    }

    // Single Player Logic
    if (lonely) {
      let x = randomAI(newGrid);

      if (difficulty > 1) {
        const instantWin = instantKill(newGrid, 0);
        const instantSave = instantKill(newGrid, 1);
        if (instantWin != -1) x = instantWin;
        else if (instantSave != -1) x = instantSave;
        else if (difficulty == 3) x = impossibleAI(newGrid);
      }

      newGrid[Math.floor(x / 3)][x % 3] = 0;
      setGrid(newGrid);

      const score = winCheck(newGrid);
      if (score != 2) {
        gameOver = true;
        onGameOver(score);
      }
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

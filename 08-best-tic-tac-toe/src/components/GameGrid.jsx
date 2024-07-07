import { useState, useEffect } from "react";
import { initialGrid, availableMoves, winCheck } from "../utils/GameUtils.js";
import randomAI from "../utils/randomAI.js";
import instantKill from "../utils/instantKill.js";
import impossibleAI from "../utils/impossibleAI.js";

let gameOver = false;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function GameGrid({ lonely, difficulty, trigger, onGameOver }) {
  const [grid, setGrid] = useState(initialGrid);

  // Resets Game when restart
  useEffect(() => {
    setGrid(initialGrid);
    gameOver = false;
  }, [trigger]);

  // Decides AI move based on difficulty
  function moveAI(grid) {
    let x = randomAI(grid);
    if (difficulty > 1) {
      const instantWin = instantKill(grid, 0);
      const instantSave = instantKill(grid, 1);
      if (instantWin != -1) x = instantWin;
      else if (instantSave != -1) x = instantSave;
      else if (difficulty == 3) x = impossibleAI(grid);
    }
    return x;
  }

  // Updates grid based on click and checks gameover
  function updateGrid(grid, row, col) {
    const newGrid = JSON.parse(JSON.stringify(grid)); // Deep copy to avoid mutation
    const playerOneTurn = availableMoves(newGrid).length % 2;
    newGrid[row][col] = playerOneTurn ? 1 : 0;
    setGrid(newGrid);

    const score = winCheck(newGrid);
    if (score != 2) {
      gameOver = true;
      onGameOver(score);
    }
    return newGrid;
  }

  // Main function
  async function handleClick(row, col) {
    if (gameOver || grid[row][col] != -1) return;

    // Player Moves
    let newGrid = updateGrid(grid, row, col);

    // Computer Moves
    if (lonely && !gameOver) {
      let x = moveAI(newGrid);

      // await delay(500);
      updateGrid(newGrid, Math.floor(x / 3), x % 3);
    }
  }

  return (
    <div className="game-grid">
      {grid.map((line, row) =>
        line.map((cell, col) => (
          <div
            key={3 * row + col}
            className="tile"
            onClick={() => handleClick(row, col)}
          >
            {cell == 1 ? "X" : cell == 0 ? "O" : ""}
          </div>
        ))
      )}
    </div>
  );
}

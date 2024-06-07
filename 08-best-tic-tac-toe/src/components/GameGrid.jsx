import { useState } from "react";

export default function GameGrid({ lonelyness, hardness, onGameOver }) {
  const [grid, setGrid] = useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  function handleClick(row, col) {
    if (grid[row][col] != -1) return;

    // Deriving which player from grid
    let moves = 0;
    for (let r = 0; r < 9; r++)
      if (grid[Math.floor(r / 3)][r % 3] != -1) moves++;
    const playerOneTurn = moves % 2 == 0;

    setGrid((prevGrid) => {
      let newGrid = JSON.parse(JSON.stringify(prevGrid));
      newGrid[row][col] = playerOneTurn ? 1 : 0;
      return newGrid;
    });

    onGameOver();
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
            {x == 1 && "X"}
            {x == 0 && "O"}
          </div>
        ))
      )}
    </div>
  );
}

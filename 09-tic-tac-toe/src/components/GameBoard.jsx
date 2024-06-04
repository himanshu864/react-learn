import { useState } from "react";

export default function GameBoard({ onTileSelect, activePlayerSymbol }) {
  const [grid, setGrid] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function handleTileSelect(rowIndex, colIndex) {
    // Create deep copy when state depends on array/object
    setGrid((grid) => {
      let newGrid = [...grid.map((row) => [...row])];
      newGrid[rowIndex][colIndex] = activePlayerSymbol;
      return newGrid;
    });
    onTileSelect();
  }

  return (
    <ol id="game-board">
      {grid.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => handleTileSelect(rowIndex, colIndex)}
                      disabled={playerSymbol !== null}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}

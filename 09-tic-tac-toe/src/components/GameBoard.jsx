import { useState } from "react";
import GameTile from "./GameTile";

export default function GameBoard() {
  const [grid, setGrid] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [playerTurn, setPlayerTurn] = useState(1);

  function handleTileSelect(rowIndex, colIndex) {
    // Create deep copy when state depends on array/object
    let newGrid = [...grid.map((row) => [...row])];
    newGrid[rowIndex][colIndex] = playerTurn === 1 ? "X" : "O";

    setPlayerTurn(playerTurn === 1 ? 0 : 1);
    setGrid(newGrid);
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
                    <GameTile
                      playerSymbol={playerSymbol}
                      onSelect={() => handleTileSelect(rowIndex, colIndex)}
                    />
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

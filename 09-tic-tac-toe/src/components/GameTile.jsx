export default function GameTile({ playerSymbol, onSelect }) {
  return (
    <button onClick={onSelect} disabled={playerSymbol !== null}>
      {playerSymbol}
    </button>
  );
}

export default function PlayerMode({ onModeSelect }) {
  return (
    <div className="control-mode">
      <button id="sp" onClick={() => onModeSelect(1)}>
        Single Player
      </button>
      <button id="mp" onClick={() => onModeSelect(2)}>
        Two Players
      </button>
    </div>
  );
}

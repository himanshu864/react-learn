export default function PlayerMode({ onSpSelect, onMpSelect }) {
  return (
    <div className="control-mode">
      <button id="sp" onClick={onSpSelect}>
        Single Player
      </button>
      <button id="mp" onClick={onMpSelect}>
        Two Players
      </button>
    </div>
  );
}

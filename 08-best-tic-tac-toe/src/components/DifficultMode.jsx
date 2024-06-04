export default function DifficultMode({ onDiffSelect }) {
  return (
    <div className="control-mode diff">
      <button id="easy" onClick={() => onDiffSelect(1)}>
        Easy
      </button>
      <button id="mid" onClick={() => onDiffSelect(2)}>
        Medium
      </button>
      <button id="imp" onClick={() => onDiffSelect(3)}>
        Impossible
      </button>
    </div>
  );
}

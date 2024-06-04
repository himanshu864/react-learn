export default function DifficultMode({ onDiffSelect }) {
  return (
    <div className="control-mode diff">
      <button id="easy" onClick={onDiffSelect}>
        Easy
      </button>
      <button id="mid" onClick={onDiffSelect}>
        Medium
      </button>
      <button id="imp" onClick={onDiffSelect}>
        Impossible
      </button>
    </div>
  );
}

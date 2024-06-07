let isReplay = false;

export default function StartButton({ onGameStart }) {
  function handleClick() {
    onGameStart();
    isReplay = true;
  }

  return (
    <div>
      <button id="control-button" onClick={handleClick}>
        {isReplay ? "Play Again" : "Start New Game"}
      </button>
    </div>
  );
}

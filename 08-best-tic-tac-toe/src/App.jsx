export default function App() {
  return (
    <section className="everything">
      <h1 className="heading">TIC TAC TOE</h1>

      <div className="cards">
        <div className="card">
          P1 :&nbsp;<span id="scoreP1">0</span>
        </div>
        <div className="card">
          P2 :&nbsp;<span id="scoreP2">0</span>
        </div>
      </div>

      <div
        className="control-mode"
        onClick={() => {
          console.log("Hello");
        }}
      >
        <button id="sp">Single Player</button>
        <button id="mp">Two Players</button>
      </div>

      <div className="control-mode diff hide">
        <button id="easy">Easy</button>
        <button id="mid">Medium</button>
        <button id="imp">Impossible</button>
      </div>

      <div>
        <button id="control-button" className="hide">
          Start New Game
        </button>
      </div>

      <div className="game-grid hide">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </div>

      <div className="score hide"></div>
    </section>
  );
}

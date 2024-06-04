import ScoreCard from "./components/ScoreCard.jsx";
import PlayerMode from "./components/PlayerMode.jsx";
import DifficultMode from "./components/DifficultMode.jsx";
import StartButton from "./components/StartButton.jsx";
import GameGrid from "./components/GameGrid.jsx";

let areYouSingle = true;

export default function App() {
  return (
    <>
      <h1 className="heading">TIC TAC TOE</h1>

      <ScoreCard />
      <PlayerMode />
      <DifficultMode />
      <StartButton />
      <GameGrid />

      <div className="score hide"></div>
    </>
  );
}

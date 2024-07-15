import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"Kids"} targetTime={1}></TimerChallenge>
        <TimerChallenge title={"Adults"} targetTime={5}></TimerChallenge>
        <TimerChallenge title={"Veterans"} targetTime={10}></TimerChallenge>
        <TimerChallenge title={"Dark souls"} targetTime={15}></TimerChallenge>
      </div>
    </>
  );
}

export default App;

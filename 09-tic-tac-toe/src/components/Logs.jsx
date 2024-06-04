export default function Logs({ turns, names }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        return (
          <li key={index} className={index == 0 ? "highlighted" : ""}>
            {names[turn.player]} selected row-{turn.square.row} col-
            {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}

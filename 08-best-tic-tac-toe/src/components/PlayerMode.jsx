import DifficultMode from "./DifficultMode";

const player_control = document.querySelector(".control-mode");
const difficulty_slider = document.querySelector(".diff");

export default function PlayerMode() {
  return (
    <div className="control-mode">
      <button
        id="sp"
        onClick={() => {
          player_control.classList.add("hide");
          difficulty_slider.classList.remove("hide");
        }}
      >
        Single Player
      </button>
      <button
        id="mp"
        onClick={() => {
          player_control.classList.add("hide");
          difficulty_slider.classList.remove("hide");
        }}
      >
        Two Players
      </button>
    </div>
  );
}

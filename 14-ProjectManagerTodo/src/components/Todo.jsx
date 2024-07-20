import { useRef } from "react";
import { SubmitButton } from "./Buttons";
import InputBar from "./InputBar";

export default function Todo({ data, onDataUpdate, active }) {
  const inputRef = useRef();

  const todos = data[active].todos;
  // need to separate function to reference
  const resetInput = () => (inputRef.current.value = "");

  const handleAddTask = (e) => {
    e.preventDefault(); // to prevent page from reloading
    const inputValue = inputRef.current.value;
    if (!inputValue) return;

    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData[active].todos.push({ task: inputValue });
    onDataUpdate(updatedData);
    resetInput();
  };

  const handleDeleteTask = (index) => {
    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData[active].todos = todos.filter((_, i) => i != index);
    onDataUpdate(updatedData);
  };

  return (
    <>
      <form
        className="my-4 border-b-2 border-stone-300 p-4"
        onSubmit={handleAddTask}
      >
        <InputBar heading={"Enter Task: "} type={"text"} ref={inputRef} />
        <SubmitButton>Add</SubmitButton>
      </form>
      <ul className="m-8 flex list-disc flex-col gap-4">
        {todos.length ? (
          todos.map((todo, index) => (
            <div className="flex justify-between" key={index}>
              <li>{todo.task}</li>
              <button
                className="text-red-600 hover:text-red-700"
                onClick={() => handleDeleteTask(index)}
              >
                clear
              </button>
            </div>
          ))
        ) : (
          <p className="m-auto text-stone-500">No tasks yet</p>
        )}
      </ul>
    </>
  );
}

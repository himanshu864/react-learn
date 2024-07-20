import { useRef } from "react";

export default function Main({ data, onDataUpdate, active, handleActive }) {
  const inputRef = useRef();

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
    const newTasks = data[active].todos.filter((_, i) => i != index);
    const updatedData = JSON.parse(JSON.stringify(data));
    updatedData[active].todos = newTasks;
    onDataUpdate(updatedData);
  };

  const handleDeleteProject = () => {
    onDataUpdate(data.filter((_, i) => i != active));
    handleActive(-1);
  };

  return (
    <div className="container">
      <h1 className="mb-8 text-5xl font-bold">{data[active].title}</h1>
      <h3>{data[active].body}</h3>
      <p>{data[active].date}</p>
      <div className="flex justify-end py-4">
        <button
          className="w-16 rounded bg-amber-700 p-1 text-white hover:bg-amber-600"
          onClick={handleDeleteProject}
        >
          Delete
        </button>
      </div>
      <form className="rounded bg-white p-4" onSubmit={handleAddTask}>
        <div className="mb-2 block font-semibold">Enter task:</div>
        <div className="flex">
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-2"
            ref={inputRef}
          />
          <button
            className="ml-4 w-28 rounded bg-amber-500 hover:bg-amber-400"
            type="submit"
          >
            Add task
          </button>
        </div>
      </form>
      <ul className="m-8 flex list-disc flex-col gap-4">
        {data[active].todos.length ? (
          data[active].todos.map((todo, index) => (
            <div className="flex justify-between" key={index}>
              <li>{todo.task}</li>
              <button
                className="text-red-600"
                onClick={() => handleDeleteTask(index)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <p className="m-auto">No tasks yet</p>
        )}
      </ul>
    </div>
  );
}

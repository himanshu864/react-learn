import { useEffect, useRef, useState } from "react";

export default function Todo({ data, active }) {
  const [tasks, setTasks] = useState(data[active].todos);
  const inputRef = useRef();
  useEffect(() => setTasks(data[active].todos), [active]);

  const resetInput = () => (inputRef.current.value = "");

  const handleAddTask = (e) => {
    e.preventDefault(); // to prevent page from reloading
    const inputValue = inputRef.current.value;
    if (inputValue === "") return;

    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.push({ task: inputValue });
      return newTasks;
    });
    resetInput();
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i != index));
  };

  return (
    <div className="container">
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
        {tasks.length ? (
          tasks.map((todo, index) => (
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

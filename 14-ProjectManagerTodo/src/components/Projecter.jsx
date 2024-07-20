import { useRef } from "react";
import InputBar from "./InputBar";

export default function Projecter({ data, onDataUpdate }) {
  const nameRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();
  const dateRef = useRef();

  const clearInputs = () => {
    nameRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
    dateRef.current.value = "";
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newName = nameRef.current.value;
    const newTitle = titleRef.current.value;
    const newBody = bodyRef.current.value;
    const newDate = dateRef.current.value;
    if (!newName || !newTitle || !newBody || !newDate) return;

    const newProject = {
      name: newName,
      title: newTitle,
      body: newBody,
      date: newDate,
      todos: [{ task: "Well done!" }],
    };
    onDataUpdate([...data, newProject]);
    clearInputs();
  };

  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">Project Manager</h1>
      <div className="flex justify-end py-4">
        <button
          className="w-16 rounded bg-amber-700 p-1 text-white hover:bg-amber-600"
          onClick={clearInputs}
        >
          Cancel
        </button>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleCreateProject}>
        <InputBar heading={"Project Name: "} type={"text"} ref={nameRef} />
        <InputBar heading={"Title: "} type={"text"} ref={titleRef} />
        <InputBar heading={"Body: "} type={"text"} ref={bodyRef} />
        <InputBar heading={"Due Date: "} type={"date"} ref={dateRef} />
        <button
          className="w-16 rounded bg-amber-500 p-1 hover:bg-amber-400"
          type="submit"
        >
          Create
        </button>
      </form>
    </div>
  );
}

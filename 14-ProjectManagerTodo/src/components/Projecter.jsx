import { useRef } from "react";

export default function Projecter({ data, onDataUpdate }) {
  const nameRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();

  const clearInputs = () => {
    nameRef.current.value = "";
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newName = nameRef.current.value;
    const newTitle = titleRef.current.value;
    const newBody = bodyRef.current.value;
    if (newName == "" || newTitle == "" || newBody == "") return;

    const newProject = {
      name: newName,
      title: newTitle,
      body: newBody,
      todos: [{ task: "Well done!" }],
    };
    onDataUpdate([...data, newProject]);
    clearInputs();
  };

  return (
    <div>
      <div className="flex justify-end py-4">
        <button
          className="w-16 rounded bg-amber-700 p-1 text-white hover:bg-amber-600"
          onClick={clearInputs}
        >
          Cancel
        </button>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleCreateProject}>
        <div className="flex gap-4">
          <h2 className="w-36">Project Name: </h2>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-1"
            ref={nameRef}
          />
        </div>
        <div className="flex gap-4">
          <h2 className="w-36">Title: </h2>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-1"
            ref={titleRef}
          />
        </div>
        <div className="flex gap-4">
          <h2 className="w-36">Body: </h2>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-1"
            ref={bodyRef}
          />
        </div>
        <div>
          <button
            className="w-16 rounded bg-amber-500 p-1 hover:bg-amber-400"
            type="submit"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

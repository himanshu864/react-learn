import { useRef } from "react";

export default function Projecter({ data, onDataChange }) {
  const titleRef = useRef();
  const bodyRef = useRef();

  const clearInputs = () => {
    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newTitle = titleRef.current.value;
    const newBody = bodyRef.current.value;
    if (newTitle == "" || newBody == "") return;

    const newProject = {
      name: `Project ${data.length + 1}`,
      title: newTitle,
      body: newBody,
      todos: [{ task: "Well done!" }],
    };
    onDataChange([...data, newProject]);
    clearInputs();
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleCreateProject}>
        <h3>Title</h3>
        <input type="text" ref={titleRef} />
        <h3>Body</h3>
        <input type="text" ref={bodyRef} />
        <div>
          <button type="submit" className="rounded bg-yellow-500 p-2">
            Sorry not sorry
          </button>
        </div>
      </form>
    </div>
  );
}

import { useRef } from "react";
import InputBar from "./InputBar";
import { SubmitButton, DeleteButton } from "./Buttons";

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
      <div className="my-12 flex items-end justify-between">
        <h1 className="text-5xl font-bold uppercase">Project Manager</h1>
        <DeleteButton onClick={clearInputs}>Cancel</DeleteButton>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleCreateProject}>
        <InputBar heading={"Project Name: "} type={"text"} ref={nameRef} />
        <InputBar heading={"Title: "} type={"text"} ref={titleRef} />
        <InputBar heading={"Body: "} type={"text"} ref={bodyRef} />
        <InputBar heading={"Due Date: "} type={"date"} ref={dateRef} />
        <SubmitButton>Save</SubmitButton>
      </form>
    </div>
  );
}

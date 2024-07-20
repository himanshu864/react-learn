import { DeleteButton } from "./Buttons";
import Todo from "./Todo";

export default function Main({ data, onDataUpdate, active, handleActive }) {
  const handleDeleteProject = () => {
    onDataUpdate(data.filter((_, i) => i != active));
    handleActive(-1);
  };

  const formatDate = new Date(data[active].date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container">
      <div className="mt-12 flex items-end justify-between">
        <h1 className="text-5xl font-bold uppercase">{data[active].title}</h1>
        <DeleteButton onClick={handleDeleteProject}>Delete</DeleteButton>
      </div>
      <div className="border-b-2 border-stone-300 p-2 pb-4">
        <div className="mb-4 text-stone-500">{formatDate}</div>
        <div>{data[active].body}</div>
      </div>
      <Todo data={data} active={active} onDataUpdate={onDataUpdate} />
    </div>
  );
}

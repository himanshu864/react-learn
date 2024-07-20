export default function Sidebar({ data, active, onSelect }) {
  return (
    <aside className="my-8 flex w-1/4 flex-col gap-5 rounded-r-xl bg-stone-900 p-4 pt-20 text-stone-50">
      <h2 className="mb-8 font-bold uppercase text-stone-200 md:text-2xl">
        Your Projects
      </h2>
      <button
        className="mb-4 w-full rounded bg-stone-700 p-2 text-stone-300 hover:bg-stone-600 hover:text-stone-50"
        onClick={() => onSelect(-1)}
      >
        + Add Project
      </button>
      <ul>
        {data.map((project, index) => {
          let classes = "mb-2 p-1 pl-2 cursor-pointer hover:text-amber-300 ";
          if (active === index) classes += "bg-stone-700 rounded";

          return (
            <li className={classes} key={index} onClick={() => onSelect(index)}>
              {project.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default function Sidebar({ data, active, onSelect }) {
  return (
    <aside className="my-8 flex w-64 flex-col gap-5 bg-amber-900 p-4 pt-20 text-white">
      <h3 className="mb-4 text-lg font-semibold">Your Projects</h3>
      <button
        className="mb-4 w-full rounded bg-amber-700 p-2 hover:bg-amber-600"
        onClick={() => onSelect(-1)}
      >
        Add Project
      </button>
      <ul>
        {data.map((d, i) => {
          let classes = "mb-2 p-1 pl-2 cursor-pointer hover:text-amber-300 ";
          if (active == i) classes += "bg-amber-700 rounded";

          return (
            <li className={classes} key={i} onClick={() => onSelect(i)}>
              {d.name}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

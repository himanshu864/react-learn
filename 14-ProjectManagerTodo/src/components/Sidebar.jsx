export default function Sidebar() {
  return (
    <aside className="my-8 flex w-64 flex-col gap-5 bg-amber-900 p-4 pt-20 text-white">
      <h3 className="mb-4 text-lg font-semibold">Your Projects</h3>
      <button className="mb-4 w-full rounded bg-amber-700 p-2 hover:bg-amber-600">
        Add Project
      </button>
      <ul>
        <li className="mb-2 cursor-pointer hover:text-amber-300">Project 1</li>
        <li className="mb-2 cursor-pointer hover:text-amber-300">Project 2</li>
        <li className="mb-2 cursor-pointer hover:text-amber-300">Project 3</li>
      </ul>
    </aside>
  );
}

export default function Button({ children, ...props }) {
  return (
    <button
      className="rounded bg-amber-400 px-4 py-2 font-semibold uppercase text-stone-900 hover:bg-amber-500"
      {...props}
    >
      {children}
    </button>
  );
}

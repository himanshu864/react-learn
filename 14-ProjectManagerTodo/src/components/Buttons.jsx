const SubmitButton = ({ children, ...props }) => {
  return (
    <button
      className="mt-4 w-20 rounded-md bg-stone-800 p-2 text-stone-50 hover:bg-stone-950"
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
};

const DeleteButton = ({ children, ...props }) => {
  return (
    <button
      className="w-16 rounded p-1 text-stone-700 hover:text-stone-950"
      {...props}
    >
      {children}
    </button>
  );
};

export { SubmitButton, DeleteButton };

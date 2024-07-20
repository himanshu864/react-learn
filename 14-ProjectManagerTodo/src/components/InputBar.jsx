import { forwardRef } from "react";

const InputBar = forwardRef(({ heading }, ref) => {
  return (
    <div className="flex gap-4">
      <h2 className="w-36">{heading}</h2>
      <input
        type="text"
        className="w-full rounded border border-gray-300 p-1"
        ref={ref}
        required
      />
    </div>
  );
});

export default InputBar;

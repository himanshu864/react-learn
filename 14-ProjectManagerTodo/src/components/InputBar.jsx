import { forwardRef } from "react";

const InputBar = forwardRef(function InputBar({ heading, ...props }, ref) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-sm font-bold uppercase text-stone-500">{heading}</h2>
      <input
        {...props}
        className="w-full rounded-md border border-b-2 border-stone-300 bg-stone-200 p-1 text-stone-600 focus:border-stone-600 focus:outline-none"
        ref={ref}
        required
      />
    </div>
  );
});

export default InputBar;

import { twMerge } from "tailwind-merge";

export default function Button({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "bg-Blue text-white py-3 flex items-center justify-center px-16 rounded-[40px] cursor-pointer text-[2rem]",
        className
      )}
      style={{
        boxShadow: " inset 0 1px 0 6px #3C74FF, inset 0 -2px 0 3px #140E66",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

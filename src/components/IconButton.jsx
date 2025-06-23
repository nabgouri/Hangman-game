import { twMerge } from "tailwind-merge";

export default function IconButton({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        "flex items-center justify-center py-8 px-7 cursor-pointer  rounded-full bg-linear-to-b from-[#FE71FE] to-[#7199FF] border-solid border-black inset-shadow-[0_-6px_0_7px_rgba(157,45,245,0.25)]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

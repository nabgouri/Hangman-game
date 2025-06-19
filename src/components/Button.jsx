export default function Button({ children, ...rest }) {
  return (
    <button
      className="bg-[#2463FF] text-white py-3 flex items-center justify-center px-16 rounded-[40px] cursor-pointer"
      style={{
        boxShadow: " inset 0 1px 0 6px #3C74FF, inset 0 -2px 0 3px #140E66",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

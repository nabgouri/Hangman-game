export default function CatagoryOption({ category }) {
  return (
    <li>
      <button className="bg-Blue text-white text-5xl py-[4.125rem] px-[8.5rem] ">
        {category}
      </button>
    </li>
  );
}

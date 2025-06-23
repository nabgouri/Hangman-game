import Button from "../components/Button";

export default function CatagoryOption({ category, setCategory }) {
  return (
    <li>
      <Button
        onClick={() => setCategory(category)}
        className=" text-5xl py-[4.125rem] px-[8.5rem] "
      >
        {category}
      </Button>
    </li>
  );
}

import Button from "../components/Button";

export default function CatagoryOption({ category }) {
  return (
    <li>
      <Button className=" text-5xl py-[4.125rem] px-[8.5rem] ">
        {category}
      </Button>
    </li>
  );
}

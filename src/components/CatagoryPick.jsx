import Generalheader from "./Generalheader";
import { categories } from "../assets/data.json";
import CatagoryOption from "./CategoryOption";
export default function CategoryPick({ returnHandler }) {
  const categoriesKeys = Object.keys(categories);

  return (
    <section>
      <Generalheader
        returnHandler={returnHandler}
        pageTitile="Pick a  Category"
      />
      <ul className="grid grid-cols-3 grid-rows-2 gap-y-[3.125rem] gap-x-8 rounded-[2.5rem] place-items-center mt-[9.75rem]">
        {categoriesKeys.map((category) => (
          <CatagoryOption category={category} />
        ))}
      </ul>
    </section>
  );
}

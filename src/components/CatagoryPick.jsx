import Generalheader from "./Generalheader";
import { categories } from "../assets/data.json";
import CatagoryOption from "./CategoryOption";
import PlayBoard from "./PlayBoard";
import React from "react";
export default function CategoryPick({ returnHandler }) {
  const categoriesKeys = Object.keys(categories);
  const [chooseCatogery, setchooseCategory] = React.useState(null);

  return (
    <section>
      <Generalheader
        returnHandler={returnHandler}
        pageTitile="Pick a  Category"
      />
      <ul className="grid grid-cols-3 grid-rows-2 gap-y-[3.125rem] gap-x-8 rounded-[2.5rem] place-items-center mt-[9.75rem]">
        {categoriesKeys.map((category) => (
          <CatagoryOption category={category} setCategory={setchooseCategory} />
        ))}
      </ul>
      {/* {<PlayBoard />} */}
    </section>
  );
}

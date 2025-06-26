import Generalheader from "./Generalheader";
import { categories } from "../assets/data.json";
import CatagoryOption from "./CategoryOption";
import PlayBoard from "./PlayBoard";
import React from "react";
export default function CategoryPick({ returnHandler }) {
  const categoriesKeys = Object.keys(categories);
  const [chooseCategory, setChooseCategory] = React.useState(null);

  return (
    <>
      {chooseCategory ? (
        <PlayBoard
          categorySelection={categories[chooseCategory]}
          category={chooseCategory}
        />
      ) : (
        <section>
          <Generalheader
            returnHandler={returnHandler}
            pageTitle="Pick a Category"
          />
          <ul className="grid grid-cols-3 grid-rows-2 gap-y-[3.125rem] gap-x-8 rounded-[2.5rem] place-items-center mt-[9.75rem]">
            {categoriesKeys.map((category) => (
              <CatagoryOption
                key={category}
                category={category}
                setCategory={setChooseCategory}
              />
            ))}
          </ul>
        </section>
      )}
    </>
  );
}

import humbergeriCON from "../assets/img/humbergur-icon.svg";
import IconButton from "./IconButton";
export default function BoardHeader({ category }) {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex gap-14 ">
        <IconButton>
          {" "}
          <img src={humbergeriCON} alt=" humberger Icon" />
        </IconButton>
        <h4 className="text-white text-[5.5rem]">{category}</h4>
      </div>
      <div className="flex gap-10 items-center ">
        <div className="w-60 h-8 rounded-[92px] bg-white"></div>
        <IconButton className=" w-12 h-12 heart relative inline-block -rotate-45 top-0 rounded-none p-0 bg-inherit" />
      </div>
    </header>
  );
}

import humbergeriCON from "../assets/img/humbergur-icon.svg";
import IconButton from "./IconButton";
export default function BoardHeader() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex gap-14 ">
        <IconButton>
          {" "}
          <img src={humbergeriCON} alt=" humberger Icon" />
        </IconButton>
        <h4 className="text-white text-[5.5rem]">Countries</h4>
      </div>
    </header>
  );
}

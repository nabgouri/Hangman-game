import backIcon from "../assets/img/back-icon.svg";
import IconButton from "./IconButton";

export default function Generalheader({ pageTitle, returnHandler }) {
  return (
    <header className="grid grid-cols-3">
      <IconButton onClick={() => returnHandler("initial")}>
        <img src={backIcon} alt="return button" />
      </IconButton>
      <h1 className="text-[8.5rem] col-span-2 pl- bg-linear-to-b from-[#67B6FF] to-[#FFFFFF] inline-block text-transparent bg-clip-text place-self-center ">
        {pageTitle}
      </h1>
    </header>
  );
}

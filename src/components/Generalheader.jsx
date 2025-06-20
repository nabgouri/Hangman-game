import backButton from "../assets/img/back-button.png";

export default function Generalheader({ pageTitile, returnHandler }) {
  return (
    <header className="grid grid-cols-3">
      <button
        className="cursor-pointer"
        onClick={() => returnHandler("initial")}
      >
        <img src={backButton} alt="return button" />
      </button>
      <h1 className="text-[8.5rem] col-span-2 pl- bg-linear-to-b from-[#67B6FF] to-[#FFFFFF] inline-block text-transparent bg-clip-text place-self-center ">
        {pageTitile}
      </h1>
    </header>
  );
}

import gameLogo from "../assets/img/game-logo.svg";
import playIcon from "../assets/img/play-icon.svg";
import Button from "./Button";
import IconButton from "./IconButton";
export default function MainMenu({ setGameStatus }) {
  return (
    <section className="  bg-linear-to-b from-[#344ABA] px-[111px] to-[#001479D4] rounded-[72px] flex items-center justify-center  flex-col pb-[3.25rem] inset-shadow-[0_6px_0_8px_#2463FF] ">
      <img src={gameLogo} alt="game logo" className="-mt-22 mb-13 " />
      <IconButton className="mb-13" onClick={() => setGameStatus("start")}>
        <img src={playIcon} alt="play button icon" />
      </IconButton>
      <Button onClick={() => setGameStatus("instructions")}>HOW TO PLAY</Button>
    </section>
  );
}

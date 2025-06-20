import gameLogo from "../assets/img/game-logo.svg";
import playButton from "../assets/img/play-button.png";
import Button from "./Button";
export default function MainMenu({ setGameStatus }) {
  return (
    <section className="  bg-linear-to-b from-[#344ABA] px-[111px] to-[#001479D4] rounded-[72px] flex items-center justify-center  flex-col pb-[3.25rem] shadow-[inset_0_6px_0_8px_#2463FF] ">
      <img src={gameLogo} alt="game logo" className="-mt-22 mb-13 " />
      <button className="cursor-pointer" onClick={() => setGameStatus("start")}>
        <img src={playButton} alt="plat logo" className="mb-13" />
      </button>
      <Button onClick={() => setGameStatus("instructions")}>HOW TO PLAY</Button>
    </section>
  );
}

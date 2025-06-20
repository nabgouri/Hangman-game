import React from "react";
import MainMenu from "./components/MainMenu";
import HowToPlay from "./components/HowtoPlay";
import CategoryPick from "./components/CatagoryPick";

function App() {
  const [gameStatus, setGameStatus] = React.useState("initial");

  return (
    <article className="w-full h-screen bg-[url('assets/img/main-bg.png')] bg-cover grid place-items-center font-Mouse px-[112px]">
      {gameStatus === "initial" && <MainMenu setGameStatus={setGameStatus} />}
      {gameStatus === "instructions" && (
        <HowToPlay returnHandler={setGameStatus} />
      )}
      {gameStatus === "start" && <CategoryPick />}
    </article>
  );
}

export default App;

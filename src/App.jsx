import React from "react";
import MainMenu from "./components/MainMenu";
import HowToPlay from "./components/HowtoPlay";

function App() {
  const [howToPlay, setHowToPlay] = React.useState(false);
  return (
    <article className="w-full h-screen bg-[url('assets/img/main-bg.png')] grid place-items-center font-Mouse ">
      {!howToPlay && <MainMenu setHowToPlay={setHowToPlay} />}
      {howToPlay && <HowToPlay />}
    </article>
  );
}

export default App;

import backButton from "../assets/img/back-button.png";

export default function Generalheader({ pageTitile }) {
  return (
    <header className="flex ">
      <button>
        <img src={backButton} alt="return button" />
      </button>
      <h1>{pageTitile}</h1>
    </header>
  );
}

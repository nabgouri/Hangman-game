import Generalheader from "./Generalheader";
import InstructionCard from "./InstructionCard";
const instructions = [
  {
    title: "Choose a category",
    description:
      "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
  },
  {
    title: "Guess letters",
    description:
      "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
  },
  {
    title: "Win or lose",
    description:
      "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
  },
];
export default function howToPlay({ returnHandler }) {
  return (
    <section>
      <Generalheader returnHandler={returnHandler} pageTitle="How To Play" />
      <ul className="mt-16 flex gap-x-8 ">
        {instructions.map(({ title, description }, index) => (
          <InstructionCard
            title={title}
            description={description}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}

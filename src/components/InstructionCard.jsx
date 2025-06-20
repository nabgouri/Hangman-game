export default function InstructionCard({ title, description, index }) {
  return (
    <li className="bg-white py-[3.75rem] px-11 flex flex-col items-center justify-center gap-10 rounded-[2.5rem]">
      <span className="text-[5.5rem] text-Blue">{`0${index}`}</span>
      <h2 className="text-[#261676] text-5xl">{title}</h2>
      <p className="text-[1.75rem] text-[#887DC0]">{description}</p>
    </li>
  );
}

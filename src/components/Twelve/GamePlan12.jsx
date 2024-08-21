import NextLevel from "./NextLevel";
import HigherThinking from "./HigherThinking";

export default function GamePlan12() {
  const toDo = [
    { task: "JavaScript Problem Solving", id: 0 },
    { task: "React Concepts, How it works", id: 1 },
    { task: "React Hooks", id: 2 },
    { task: "Bigger Picture", id: 3 },
    { task: "More Javascript, / Typescript", id: 4 },
  ];

  return (
    <>
      <section className="flex-time text-white gap-4">
        <h2 className="text-pink-500 font-bold text-3xl">Game Plan 12</h2>

        <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          Keep Going. You know what to do.
        </p>
        {toDo.map((doNow) => (
          <li
            key={doNow.id}
            className="text-xl list-none font-bold text-pink-300"
          >
            {doNow.task}
          </li>
        ))}
        <NextLevel />
        <HigherThinking />
      </section>
    </>
  );
}

export default function HigherThinking() {
  const higherLevelThinking = [
    { task: "Designing application architecture", id: 0 },
    { task: "Designing Database Schema", id: 1 },
    { task: "System Design", id: 2 },
    { task: "Logging and handling errors", id: 3 },
    { task: "Clean Code", id: 4 },
    { task: "Object Oriented Programming (OOP)", id: 5 },
  ];

  return (
    <>
      <section className="flex-time gap-4">
        <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          Higher Level Thinking
        </p>
        {higherLevelThinking.map((nextLevel) => (
          <li
            key={nextLevel.id}
            className="text-xl list-none font-bold text-pink-300"
          >
            {nextLevel.task}
          </li>
        ))}
      </section>
    </>
  );
}

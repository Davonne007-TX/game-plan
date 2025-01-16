export default function HigherThinking() {
  const higherLevelThinking = [
    { task: "Designing application architecture", id: 1 },
    { task: "Designing Database Schema", id: 2 },
    { task: "Authentication", id: 3 },
    { task: "System Design", id: 4 },
    { task: "Logging and handling errors", id: 5 },
    { task: "Clean", id: 6 },
    { task: "Object Oriented Programming (OOP)", id: 7 },
  ];

  return (
    <>
      <section className="flex-time gap-4 mb-10">
        <p className="text-2xl lg:text-3xl l font-lobster mt-10 md:mt-20 lg:mt-10">
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

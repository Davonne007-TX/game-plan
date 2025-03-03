export default function HigherThinking() {
  const higherLevelThinking = [
    { task: "Designing application architecture", id: 1 },
    { task: "Designing Database Schema", id: 2 },
    { task: "System Design", id: 3 },
    { task: "Logging and handling errors", id: 4 },
    { task: "Clean Code", id: 5 },
    { task: "Object Oriented Programming (OOP)", id: 6 },
  ];

  return (
    <>
      <section className="flex-time gap-4 mb-10">
        <ul className="text-2xl lg:text-3xl font-lobster  text-center mt-10 md:mt-20 lg:mt-10">
          Higher Level Thinking
          {higherLevelThinking.map((nextLevel) => (
            <li
              key={nextLevel.id}
              className="text-xl list-none font-sans p-2 font-bold text-pink-300"
            >
              {nextLevel.task}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

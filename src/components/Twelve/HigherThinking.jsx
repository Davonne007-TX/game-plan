export default function HigherThinking() {
  const higherLevelThinking = [
    { task: "Designing application architecture" },
    { task: "Designing Database Schema" },
    { task: "System Design" },
    { task: "Logging and handling errors" },
    { task: "Clean Code" },
    { task: "Object Oriented Programming (OOP)" },
  ];

  return (
    <>
      <section className="flex-time gap-4">
        <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          Higher Level Thinking
        </p>
        {higherLevelThinking.map((nextLevel, id) => (
          <li key={id} className="text-xl list-none font-bold text-pink-300">
            {nextLevel.task}
          </li>
        ))}
      </section>
    </>
  );
}

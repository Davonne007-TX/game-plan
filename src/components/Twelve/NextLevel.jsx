export default function NextLevel() {
  const whatYouNeedToDo = [
    { task: "Express.js, SQL, PostreSQL" },
    { task: "What is Next.js?" },
    { task: "Quality Fullstack Project" },
    { task: "What is Java?" },
    { task: "What is GraphQL?" },
  ];

  return (
    <>
      <section className="flex-time gap-4">
        <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          What to do next.
        </p>
        {whatYouNeedToDo.map((doNext, id) => (
          <li key={id} className="text-xl list-none font-bold text-pink-300">
            {doNext.task}
          </li>
        ))}
      </section>
    </>
  );
}

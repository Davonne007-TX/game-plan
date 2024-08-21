export default function NextLevel() {
  const whatYouNeedToDo = [
    { task: "Express.js, SQL, PostreSQL", id: 0 },
    { task: "What is Next.js?", id: 1 },
    { task: "Quality Fullstack Project", id: 2 },
    { task: "What is Java?", id: 3 },
    { task: "What is GraphQL?", id: 4 },
  ];

  return (
    <>
      <section className="flex-time gap-4">
        <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          What to do next.
        </p>
        {whatYouNeedToDo.map((doNext) => (
          <li
            key={doNext.id}
            className="text-xl list-none font-bold text-pink-300"
          >
            {doNext.task}
          </li>
        ))}
      </section>
    </>
  );
}

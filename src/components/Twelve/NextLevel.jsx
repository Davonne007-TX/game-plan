export default function NextLevel() {
  const whatYouNeedToDo = [
    { task: "Node.js, Express.js, SQL, PostreSQL, Rest API", id: 1 },
    { task: "Integrate front end components with API's", id: 2 },
    { task: "What is Next.js?, Redux, Authentication", id: 3 },
    {
      task: "Quality Fullstack Project, I'm seeing Fullstack vibes",
      id: 4,
    },
    { task: "What is Java?", id: 5 },
    { task: "What is Angular? AWS", id: 6 },
    { task: "Unit Testing", id: 7 },
  ];

  return (
    <>
      <section className="flex-time gap-4 text-center">
        <p className="text-2xl lg:text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">
          What to do next. What do you see in market?
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

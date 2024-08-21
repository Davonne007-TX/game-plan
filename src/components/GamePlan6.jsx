export default function GamePlan6() {
  const finishedTask = [
    { completed: "Feature Capstone on LinkedIn" },
    { completed: "Updated Capstone Project on LinkedIn" },
    { completed: "Made UI projects on another repository" },
    { completed: "Seen what tech is in my area" },
  ];

  const whatsNext = [
    { toDo: "Problem Solve" },
    { toDo: "JavaScript coding questions" },
    { toDo: "React Rules and Concepts" },
  ];

  return (
    <>
      <main className="flex-time font-pizza m-auto max-w-xs md:max-w-3xl lg:max-w-7xl p-8 rounded-2xl bg-neutral-100 ">
        <h1 className="text-blue-500 text-3xl md:text-3xl lg:text-4xl mb-8">
          Game Plan #6
        </h1>
        <iframe
          src="https://giphy.com/embed/cuXiQJBhJeH5u"
          width="280"
          height="332"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/disney-film-cuXiQJBhJeH5u">
            via GIPHY
          </a>
        </p>

        <section className="mr-auto text-xl">
          <h2 className="text-black text-2xl p-2">So what did you do?</h2>
          {finishedTask.map((task, index) => (
            <li className="text-lg" key={index}>
              {task.completed}
            </li>
          ))}
        </section>

        <section className="mr-auto mt-10 text-lg">
          <h3 className="text-2xl p-2">What are you going to do now?</h3>
          {whatsNext.map((next, index) => (
            <li className="text-lg" key={index}>
              {next.toDo}
            </li>
          ))}
        </section>
      </main>
    </>
  );
}

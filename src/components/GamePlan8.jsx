export default function () {
  //an array of objects
  const toDoList = [
    { toDo: "UI React Projects" },
    { toDo: "JavaScript Fundamentals" },
    { toDo: "React, Component life cycle" },
    { toDo: "Read documentation" },
    { toDo: "JavaScript Logic" },
    { toDo: "UI concepts/ fundemenals" },
  ];

  const longTermGoals = [
    { goal: "Node.js" },
    { goal: "Express.js" },
    { goal: "SQL" },
    { goal: "PostgreSQL" },
  ];

  return (
    <>
      <main className=" text-white">
        <h1 className="font-pizza text-3xl text-center">Game Plan #8</h1>
        <section className="flex flex-col items-center justify-center m-auto mt-10 rounded-3xl p-10 bg-pink-400 md:max-w-3xl lg:max-w-5xl">
          <iframe
            src="https://giphy.com/embed/SvFocn0wNMx0iv2rYz"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/code-developer-javascript-SvFocn0wNMx0iv2rYz">
              via GIPHY
            </a>
          </p>

          <article className="flex flex-col mr-auto">
            <section>
              <h2 className="text-3xl font-bold">Short Term Goals:</h2>
              {toDoList.map((list, index) => (
                <li key={index} className="text-2xl">
                  {list.toDo}{" "}
                </li>
              ))}
            </section>

            <section className="mt-10">
              <h3 className="text-4xl font-bold">Long Term Goals:</h3>
              {longTermGoals.map((longTerm, index) => (
                <li key={index} className="text-2xl">
                  {longTerm.goal}
                </li>
              ))}
            </section>
          </article>
        </section>
      </main>
    </>
  );
}

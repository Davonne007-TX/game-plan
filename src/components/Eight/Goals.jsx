export default function Goals() {
  //an array of objects
  const toDoList = [
    { toDo: "UI React Projects" },
    { toDo: "JavaScript Fundamentals" },
    { toDo: "JavaScript Questions" },
    { toDo: "React Docs" },
    { toDo: "The Bigger Picture" },
    { toDo: "React Hooks" },
    { toDo: "Component life cycle" },
    { toDo: "State Management" },
    { toDo: "UI concepts/ fundamentals" },
  ];

  const longTermGoals = [
    { goal: "Node.js" },
    { goal: "Express.js" },
    { goal: "SQL" },
    { goal: "PostgreSQL" },
  ];
  return (
    <article className="flex flex-col mr-auto mt-10">
      <section>
        <h2 className="text-2xl md:text-3xl font-bold">Short Term Goals:</h2>
        {toDoList.map((list, index) => (
          <li key={index} className="text-lg md:text-2xl">
            {list.toDo}{" "}
          </li>
        ))}
      </section>

      <section className="mt-10">
        <h3 className="text-2xl md:text-3xl font-bold">Long Term Goals:</h3>
        {longTermGoals.map((longTerm, index) => (
          <li key={index} className="text-lg md:text-2xl">
            {longTerm.goal}
          </li>
        ))}
      </section>
    </article>
  );
}

export default function After() {
  const afterToDo = [
    { after: "Research the way your supposed to use React", id: 0 },
    { after: "Corner Store Project", id: 1 },
    { after: "SQL Postgres Udemy Course", id: 2 },
    { after: "Backend Development Express.js", id: 3 },
    { after: "More JavaScript", id: 4 },
  ];

  return (
    <>
      <section className="mt-10 flex flex-col gap-4">
        <ul className="font-bold">
          Things need to do after things I need to do:
        </ul>
        {afterToDo.map((youCanDoIt, id) => (
          <li key={id}>{youCanDoIt.after}</li>
        ))}
      </section>
    </>
  );
}

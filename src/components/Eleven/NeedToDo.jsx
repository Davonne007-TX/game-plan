export default function NeedToDo() {
  const needToDo = [
    { toDo: "Github Home Page", id: 0 },
    { toDo: "Finish and Deploy Portfolio", id: 1 },
    { toDo: "Update UI Projects To Solve Problems", id: 2 },
    { toDo: "Update Resume", id: 3 },
    { toDo: "Harder Questions on JavaScript" },
  ];

  return (
    <>
      <section className="mt-10 flex flex-col gap-4">
        <ul className="font-bold">Things I need To Do:</ul>
        {needToDo.map((now, id) => (
          <li key={id}>{now.toDo}</li>
        ))}
      </section>
    </>
  );
}

export default function InProgress() {
  const rightNow = [
    { inProgress: "Javascript Problem Solving", id: 1 },
    { inProgress: "Building Frontend Projects in React", id: 2 },
    { inProgress: "Typescript, Testing", id: 3 },
    { inProgress: "React bigger Picture, fundamentals", id: 4 },
  ];
  return (
    <section className="mt-10">
      <p className="font-bold">In Progress</p>
      {rightNow.map((now) => (
        <li key={now.id}>{now.inProgress}</li>
      ))}
    </section>
  );
}

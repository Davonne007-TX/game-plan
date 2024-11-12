export default function InProgress() {
  const rightNow = [
    { inProgress: "Javascript Problem Solving", id: 0 },
    { inProgress: "Building Frontend Projects in React", id: 1 },
    { inProgress: "Typescript", id: 2 },
    { inProgress: "What is Java?", id: 3 },
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

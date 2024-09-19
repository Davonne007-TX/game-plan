export default function InProgress() {
  const rightNow = [
    { inProgress: "Javascript Problem Solving", id: 0 },
    { inProgress: "Building Frontend Projects", id: 1 },
    { inProgress: "Learning TypeScript", id: 2 },
    { inProgress: "React Documentation", id: 3 },
  ];
  return (
    <section className="mt-20">
      <p className="font-bold">In Progress</p>
      {rightNow.map((now) => (
        <li key={now.id}>{now.inProgress}</li>
      ))}
    </section>
  );
}

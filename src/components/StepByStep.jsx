export default function StepByStep() {
  const stepByStep = [
    { inTheMaking: "UI Projects", id: 0 },
    { inTheMaking: "JavaScript Problem Solving", id: 1 },
    { inTheMaking: "Typescript", id: 2 },
    { inTheMaking: "Express.js", id: 3 },
    { inTheMaking: "SQL, PostgreSQL Scrimba Course", id: 4 },
    { inTheMaking: "Java", id: 5 },
  ];

  return (
    <>
      <section className="flex flex-col gap-4 p-4">
        <p className="text-yellow-200 font-bold text-3xl">Step By Step</p>
        {stepByStep.map((oneStep) => (
          <li key={oneStep.id}>{oneStep.inTheMaking}</li>
        ))}
      </section>
    </>
  );
}

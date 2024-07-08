import NeedToDo from "./NeedToDo";
import After from "./After";

export default function GamePlan11() {
  const thingsIveDone = [
    { task: "UI projects", id: 0 },
    { task: "Responsive Design", id: 1 },
    { task: "JavaScript Review", id: 2 },
    { task: "JavaScript Problems", id: 3 },
  ];

  return (
    <>
      <main className="flex-time bg-fuchsia-50 p-4">
        <section className="flex flex-col gap-4 text-2xl">
          <h1 className="text-black font-bold text-3xl mt-10 text-center">
            Game Plan #11
          </h1>
          <p>So I have all these game plans but what have you actually done?</p>
          <ul className="font-bold">Things I done so far:</ul>
          {thingsIveDone.map((done, id) => (
            <li key={id}>{done.task}</li>
          ))}

          <NeedToDo />
          <After />
        </section>
      </main>
    </>
  );
}

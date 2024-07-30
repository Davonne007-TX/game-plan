export default function GamePlan12() {
    const toDo = [
        {task: "JavaScript Problem Solving"}, 
        {task: "React Concepts, How it works"},
        {task: "React Hooks"},
        {task: "Bigger Picture"},
        {task: "More Javascript, / Typescript"},
        {task: "Express.js, SQL, PostreSQL"},
        { task: "What is Java"},
    ]

  return (
    <>
   <section className="flex-time text-white gap-2">
         <h2 className="text-pink-500 font-bold text-3xl">Game Plan 12</h2>
       
       <p className="text-3xl font-lobster mt-10 md:mt-20 lg:mt-10">Keep Going. You know what to do.</p>
        {toDo.map((doNow, id) => (
            <li key={id} className="text-xl list-none font-bold text-pink-300">{doNow.task}</li>
        ))}
   </section>
   </>
  )
}

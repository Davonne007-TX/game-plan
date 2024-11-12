import InProgress from "./InProgress";

export default function GamePlan13() {
  const reactImg = "../images/reactLogo.jpg";

  return (
    <>
      <main className="max-w-xs md:max-w-2xl ml-auto mr-auto text-white text-lg md:text-2xl">
        <section className="flex flex-col gap-2 font-serif">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4x mb-10 font-mono">
            Game Plan #13
          </h2>
          <p>
            Working on the same things from Game Plan 12 in regards to the first
            section.
          </p>
          <p>With the emphasis on Typescript, JavaScript and React.</p>

          <InProgress />
        </section>

        <img
          src={reactImg}
          className="mt-10 border-2 rounded-xl mb-10"
          alt="React Logo by Grok2"
        />
      </main>
    </>
  );
}

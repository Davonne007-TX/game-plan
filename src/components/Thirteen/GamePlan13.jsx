import InProgress from "./InProgress";

export default function GamePlan13() {
  const reactImg = "../images/reactLogo.jpg";

  return (
    <>
      <main className="max-w-xs md:max-w-6xl ml-auto mr-auto text-white text-lg md:text-2xl">
        <section className="flex flex-col lg:flex-row gap-2 mt-20 font-serif">
          <section className="flex flex-col">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-10 font-mono">
              Game Plan #13
            </h2>
            <p>
              Working on the same things from Game Plan 12 in regards to the
              first section.
            </p>{" "}
            <br />
            <p>With the emphasis on Typescript, JavaScript and React.js</p>
            <InProgress />
          </section>

          <img
            src={reactImg}
            className="mt-10 border-2 rounded-xl mb-10 max-w-sm ml-auto"
            alt="React Logo by Grok2"
          />
        </section>
      </main>
    </>
  );
}

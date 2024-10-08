import InProgress from "./InProgress";

export default function GamePlan13() {
  const laptop = "../images/laptop.jpg";

  return (
    <>
      <main className="max-w-sm md:max-w-2xl ml-auto mr-auto text-white text-lg md:text-2xl">
        <section className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4x mb-10">
            Game Plan #13
          </h2>
          <p>
            Working on the same things from Game Plan 12 in regards to the first
            section.
          </p>
          <p>With the emphasis on Typescript, JavaScript and React.</p>

          <InProgress />
          <img
            src={laptop}
            className="max-w-sm md:max-w-xl lg:max-w-2xl mt-10"
          />
        </section>
      </main>
    </>
  );
}

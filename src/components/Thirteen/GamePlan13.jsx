export default function GamePlan13() {
  const laptop = "../images/laptop.jpg";

  return (
    <>
      <section className="flex-time text-white text-lg md:text-2xl">
        <section>
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4x mb-10">
            Game Plan #13
          </h2>
          <p className=" font-lobster">
            Working on the same things from Game Plan 12 in regards to the first
            section.
            <br />
            With the emphasis on Typescript, JavaScript and React.
          </p>
          <img
            src={laptop}
            className="max-w-sm md:max-w-xl lg:max-w-2xl mt-10"
          />
        </section>
      </section>
    </>
  );
}

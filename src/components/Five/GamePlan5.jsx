import YourMarket from "./YourMarket";

export default function GamePlan5() {
  return (
    <>
      <main className="flex-time">
        <h1 className="text-pink-400 text-xl md:text-3xl lg:text-4xl mb-10">
          Game Plan #5
        </h1>
        <section className="max-w-xs md:max-w-5xl lg:max-w-7xl">
          <article className="flex flex-col max-w-sm lg:max-w-5xl gap-10 text-white mr-auto ml-10 text-xl font-mono">
            <p>Well heres the story.</p>
            <p>
              The advice I see is find your niche, do what you love. And then I
              see find what is in your market, see what the companies around you
              are hiring you for. To me, I think both advice are great and I am
              going to combine the two and see how it goes.
            </p>
            <p>
              I need to work on challenging myself to harder things, or the next
              thing I need to learn or work on. This also includes problem
              solving, knowing what the code is doing and how you solve
              problems. What is your thought process and how did you get there.
              My game plan at the moment would be on Javascript problem solving
              and moving onto Typescript, and sprinkle some Next.js in there. So
              thats it, you got this, keep going, you got this far already.
            </p>
            <YourMarket />
          </article>
        </section>
      </main>
    </>
  );
}

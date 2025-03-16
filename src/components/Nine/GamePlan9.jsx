import StepByStep from "./StepByStep";

export default function GamePlan9() {
  const gamePlan9 = [
    ` The font of this Game Plan #9, is the same font as the name of this
      project because its the big one. Whats the update on my progress? My
      UI Projects are going well. I have been learning React along the
      way. I feel like I still have a long way to go. I also have been
      working on my JavaScript fundamentals, re-learning the basics. I am
      going forward getting decent with JavaScript to where I can
      understand React better and move onto TypeScript. It comes to a
      point where you say "Theres no more playing around", this has to
      work.`,
  ];

  const jobMarket = [
    `So what is in your job market? Java, .Net, C#, SQL. What is
     Jira? TypeScript, as mentioned. I really don't know about these these languages/tech so I definitely
     need to do some more research. `,
  ];

  return (
    <>
      <h1 className="text-pink-400 text-2xl md:text-3xl lg:text-4xl flex-time font-sixty">
        Game Plan #9
      </h1>
      <section className="flex flex-col justify-center items-center text-white mt-20  m-0 ">
        <section className="max-w-xs md:max-w-xl lg:max-w-xl flex flex-col gap-4 text-xl">
          <p>{gamePlan9}</p>
          <p>{jobMarket}</p>

          <section className="ml-auto mr-auto lg:mt-10">
            <iframe
              src="https://giphy.com/embed/uim459G9DiGQXDv8zt"
              width="480"
              height="272"
              frameBorder="0"
              className="giphy-embed max-w-xs md:max-w-lg lg:max-w-xl"
              allowFullScreen
            ></iframe>
            <p className="text-center">
              <a href="https://giphy.com/gifs/pokemon-anime-uim459G9DiGQXDv8zt">
                via GIPHY
              </a>
            </p>
          </section>

          <StepByStep />
        </section>
      </section>
    </>
  );
}

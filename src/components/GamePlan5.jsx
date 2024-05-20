export default function GamePlan5() {
  const commonTech = [
    { skill: "Next.js" },
    { skill: "Typescript" },
    { skill: "Java" },
    { skill: "GraphQL" },
    { skill: "Javascript" },
    { skill: "Redux" },
    { skill: "Angular" },
  ];

  return (
    <>
      <main className="flex-time ml-auto mr-auto max-w-3xl lg:max-w-5xl">
        <h1 className="text-pink-400 text-5xl mb-10">Game Plan #5</h1>
        <article className="flex flex-col gap-10 text-white mr-auto ml-10 text-xl font-mono">
          <p>Well heres the story.</p>
          <p>
            I am having trouble with my coding journey. I am having trouble
            putting my words together when it comes to explaining what my code
            does, explaining what skill I am using. I think I know the issue and
            thats why I am trying this new game plan method. With the hopes of
            writing down my thoughts and feelings, maybe this can help get my
            thoughts across. Also I am not sure what path to take. The advice I
            see is find your niche, do what you love. And then I see find what
            is in your market, see what the companies around you are hiring you
            for. To me, I think both advice are great and I am going to combine
            the two and see how it goes.
          </p>
          <p>
            The other advice I see is post on LinkedIn. Well the truth is, I am
            not at a good point in my journey to post anything that is linkedIn
            worthy. Yeah I do projects but they are not quality projects. I do
            say I am doing things I already know how to do, or something I know
            I can do.
          </p>
          <p>
            I need to work on challenging myself to harder things, or the next
            thing I need to learn or work on. This also includes problem
            solving, knowing what the code is doing and how you solve problems.
            What is your thought process and how did you get there. My game plan
            at the moment would be on Javascript problem solving and moving onto
            Typescript, and sprinkle some Next.js in there. So thats it, you got
            this, keep going, you got this far already.
          </p>

          <section className="flex flex-row">
            <iframe
              src="https://giphy.com/embed/26tk0twwe5dWifoHe"
              width="480"
              height="362"
              alt="via GIPHY"
              frameBorder="0"
              className="giphy-embed mt-8"
              allowFullScreen
            ></iframe>
            <p>
              <a
                href="https://giphy.com/gifs/season-17-the-simpsons-17x13-26tk0twwe5dWifoHe"
                className="text-transparent"
              >
                via GIPHY
              </a>
            </p>

            <section className="mt-20 mb-20 lg:mt-10 maw-w-4xl text-md">
              <h2>What do you see in your market?</h2>
              {commonTech.map((tech, index) => (
                <li key={index} className="mt-4">
                  {tech.skill}
                </li>
              ))}
            </section>
          </section>
        </article>
      </main>
    </>
  );
}
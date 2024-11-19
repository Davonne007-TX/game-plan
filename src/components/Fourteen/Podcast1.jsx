export default function Podcast1() {
  const keyPoints = [
    { point: "Make tutorials your own!!!", id: 1 },
    { point: "What is your local market?", id: 2 },
    { point: "Soft skills can also get you the first job", id: 3 },
    { point: "Play the game, The game exist", id: 4 },
    { point: "Stand out in the market", id: 5 },
    {
      point: "Build Your Network",
      id: 6,
    },
    {
      point: "Local community to lean on, on job search",
      id: 7,
    },
    { point: "Network, network, network", id: 8 },
    { point: "Invest in Your Growth", id: 9 },
    { point: "Learn How To Play The Game", id: 10 },
    { point: "Setup LinkedIn, Know your story", id: 11 },
    {
      point: "Solve Problems, Deliver Solutions, Talk About the Solution",
      id: 12,
    },
    { point: "Break through the barriers", id: 13 },
    { point: "Build projects worth talking about", id: 14 },
    { point: "Make projects your own", id: 15 },
    { point: "Projects from within, Solve your own problems", id: 16 },
    { point: "Know your audience for your projects", id: 17 },
    { point: "Freelance Projects, Passion Projects", id: 18 },
    {
      point: "Be more detailed on Experience Section, What did you do?",
      id: 19,
    },
    {
      point:
        "Make first and second point on Resume a home run so recruiters keep reading, Peak their curiosity, Expand Your Value ",
      id: 20,
    },
  ];
  return (
    <>
      <section className="text-white flex flex-col justify-center items-center m-0 mb-20">
        <h2 className="font-bold text-lg md:text-3xl font-mono">
          The Programming Podcast Key Takeaways
        </h2>

        <ul className="mt-4 text-lg md:text-2xl ml-10">
          {keyPoints.map((points) => (
            <li key={points.id}>🔥 {points.point}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

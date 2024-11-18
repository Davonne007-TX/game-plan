export default function Podcast1() {
  const keyPoints = [
    { point: "Make tutorials your own", id: 1 },
    { point: "What is your local market?", id: 2 },
    { point: "Soft skills can also get you the first job", id: 3 },
    { point: "Play the Game, The game exist", id: 4 },
    { point: "Stand out in the market", id: 5 },
    {
      point: "Build Your Network,",
      id: 6,
    },
    {
      point: "Local community to lean on, on job search",
      id: 7,
    },
    { point: "Network, network, network", id: 8 },
    { point: "Invest in Your Growth", id: 9 },
    { point: "Learn How To Play The Game", id: 10 },
    { point: "Setup LinkedIn, Know your story" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
  ];
  return (
    <>
      <section className="text-white flex flex-col justify-center items-center m-0">
        <h2 className="font-bold text-3xl font-mono">
          The Programming Podcast Key Takeaways
        </h2>

        <ul className="mt-8 text-2xl">
          {keyPoints.map((points) => (
            <li key={points.id}>{points.point}</li>
          ))}
        </ul>
      </section>
    </>
  );
}

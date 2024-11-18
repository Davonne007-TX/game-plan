export default function Podcast1() {
  const keyPoints = [
    { point: "Make tutorials your own", id: 1 },
    { point: "What is your local market?", id: 2 },
    { point: "Soft skills can also get you the first job", id: 3 },
    { point: "Play The Game" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
    { point: "" },
  ];
  return (
    <>
      <section className="text-white ml-20">
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

export default function YourMarket() {
  const commonTech = [
    { skill: "Next.js", id: 0 },
    { skill: "Typescript", id: 1 },
    { skill: "Java", id: 2 },
    { skill: "GraphQL", id: 3 },
    { skill: "Javascript", id: 4 },
    { skill: "SQL", id: 5 },
    { skill: "Redux", id: 6 },
    { skill: "Angular", id: 7 },
  ];

  return (
    <section className="flex flex-col md:flex-col lg:flex-row">
      <iframe
        src="https://giphy.com/embed/26tk0twwe5dWifoHe"
        width="300"
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

      <section className=" mb-20 lg:mt-10 maw-w-4xl text-md">
        <h2>What do you see in your market?</h2>
        {commonTech.map((tech) => (
          <li key={tech.id} className="mt-4">
            {tech.skill}
          </li>
        ))}
      </section>
    </section>
  );
}

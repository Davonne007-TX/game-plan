import taskListData from "../data/hereWeGoAgain.js";

export default function GamePlan4() {
  return (
    <main className="flex-time">
      <h1 className="text-purple-700 text-2xl md:text-3xl lg:text-4xl font-gloria">
        Game Plan #4
      </h1>
      <section className="mt-10 text-xl mb-20 flex flex-col justify-center items-center gap-5 font-sans bg-purple-500 p-10 rounded-2xl max-w-xs md:max-w-2xl lg:max-w-6xl">
        <ul className="flex flex-col gap-10">
          {taskListData.map((task, index) => (
            <li key={index} className="text-white">
              🌟{task.urgent}
            </li>
          ))}
        </ul>

        <iframe
          src="https://giphy.com/embed/TWHt6q05tXqglijRRM"
          width="280"
          height="239"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a
            href="https://giphy.com/gifs/ixdalaplata-ila-ixda-ila23-TWHt6q05tXqglijRRM"
            className="text-white"
          >
            via GIPHY
          </a>
        </p>
      </section>
    </main>
  );
}

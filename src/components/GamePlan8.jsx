import Goals from "./Goals";

export default function GamePlan8() {
  return (
    <>
      <main className=" text-white">
        <h1 className="font-pizza text-3xl md:text-3xl lg:text-4xl text-center">
          Game Plan #8
        </h1>
        <section className="flex-time m-auto mt-10 mb-10 rounded-3xl p-8 bg-green-600 max-w-xs md:max-w-3xl lg:max-w-5xl">
          <iframe
            src="https://giphy.com/embed/SvFocn0wNMx0iv2rYz"
            width="480"
            height="480"
            frameBorder="0"
            className="giphy-embed max-w-xs md:max-w-lg"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/code-developer-javascript-SvFocn0wNMx0iv2rYz">
              via GIPHY
            </a>
          </p>

          <Goals />
        </section>
      </main>
    </>
  );
}

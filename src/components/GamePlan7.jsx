export default function GamePlan7() {
  const focus = [
    `      The focus is on the fundamental, and I know JavaScript is a
              powerful language and I want to get better at it. I want to be
              able to say thank you Javascript. I want to stick to what I am
              good at. And I excel in Frontend Development. I want to be really
              good at what I do. So the goal is Javascript, React.js, of course
              HTML, CSS. Yes I know we need to be fullstack but for now I am
              enjoying the ride.`,
  ];
  return (
    <>
      <main className="flex flex-col justify-center items-center text-white">
        <h1 className="text-orange-200 text-3xl md:text-3xl lg:text-4xl font-serif">
          Game Plan #7
        </h1>
        <section className="flex flex-col justify-center items-center md:max-w-3xl lg:max-w-5xl mt-10 font-bold">
          <h2 className="text-2xl lg:text-3xl mb-10">
            {" "}
            Javascript Javascript Javascript
          </h2>
          <iframe
            src="https://giphy.com/embed/ZpdxXk2KXQn40VWqke"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed w-90 max-w-xs md:max-w-lg lg:max-w-xl"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/getmanfred-software-developer-javascript-ZpdxXk2KXQn40VWqke">
              via GIPHY
            </a>
          </p>

          <section className="flex flex-col gap-8 max-w-xs md:max-w-3xl lg:max-w-4xl text-xl lg:text-2xl font-thin mt-10 mb-10 ">
            <p>{focus}</p>
          </section>
        </section>
      </main>
    </>
  );
}

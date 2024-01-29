import { Link } from "react-router-dom";

export default function Home() {
  //   const navigate = useNavigate();

  //   //start hooks
  //   const startHooks = () => {
  //     navigate("/hook1");
  //   };
  return (
    <>
      <h1 className="text-center mt-10 text-4xl font-lobster">Game Plan</h1>
      <section className="flex justify-center items-center mt-20 font-serif">
        <ol className="text-xl list-decimal font-mono">
          <div className="flex flex-col gap-5">
            <li>React common Hooks 🫨 - - ✔ in progress</li>
            <p className="ml-5">- with examples</p>
            <li>Coding questions 😵</li>
            <p>- on letCode and codewars</p>
            <li>
              Look at other code, see how they do it --- ✔ looking at other
              repos
            </li>
            <p>- see if you can understand</p>
            <li>Corner Store Project</li>
            <li>Finish Pokemon ✔ almost done</li>
          </div>

          <p className="mt-20 text-center">By February 16th</p>
        </ol>
      </section>

      <div className="flex flex-col justify-center items-center mt-10">
        <iframe
          src="https://giphy.com/embed/yoJC2K6rCzwNY2EngA"
          width="480"
          height="300"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/go-team-you-can-do-it-yoJC2K6rCzwNY2EngA"></a>
        </p>

        <Link
          to="/hookOne"
          className="mt-20 mb-20 text-5xl bg-black font-lobster text-white p-4 rounded-full hover:text-pink-800"
        >
          Start Hooks
        </Link>

        {/** other examples */}
        <section className="flex flex-col font-lobster mb-20">
          <h2 className="text-3xl">Other examples</h2>
          <ol className="list-disc text-2xl">
            <li className="hover:text-underline">
              <Link to="/lists" className="hover:underline">
                Lists
              </Link>
            </li>
          </ol>
        </section>
      </div>
    </>
  );
}

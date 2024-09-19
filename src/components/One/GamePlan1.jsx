import { Link } from "react-router-dom";
import Gif from "./Gif";
import MoreExamples from "./MoreExamples";

export default function Home() {
  return (
    <main className="text-white">
      <h1 className="text-center mt-10 text-3xl md:text-3xl lg:text-4xl font-lobster">
        Game Plan#1
      </h1>
      <section className="flex-time mt-20 font-serif">
        <section className="max-w-xs md:max-w-lg">
          <ol className="text-xl list-decimal font-serif">
            <section className="flex flex-col gap-5">
              <li>React common Hooks 🫨 - - ✔ in progress</li>
              <p className="ml-5">- with examples</p>
              <li>Coding questions 😵 -- haven't started</li>
              <p>- on letCode and codewars</p>
              <li>
                Look at other code, see how they do it --- ✔ looking at other
                repos
              </li>
              <li>LinkedIn</li> ✔ done but always change as you change
              <li>Star Wars API Project ✔ done can make changes </li>
              <li>Finish Pokemon ✔ done can make changes</li>
            </section>

            <section className="mt-20">
              <p>Whats left Davonne?</p>
              <ol>
                <li> - Finish Portfolio - almost done</li>
                <li>- Post Pokemon ✔ done</li>
                <li>
                  {" "}
                  - Errors on Capstone for Portfolio ✔ done but now need
                  responsive styles on payment
                </li>
                <li> - See what projects to put on Portfolio --in progress</li>
                <li> - Look at Strangers things, can you fix anything</li>
                <li>**** Leetcode, codewars, practice problems...!</li>
              </ol>
            </section>
          </ol>
        </section>
      </section>
      <Gif />
      <MoreExamples />
      <hr />
      <footer className="my-12 text-center text-4xl font-mono mt-20">
        <Link to="/gamePlan2" className="hover:text-pink-400">
          Next Game Plan
        </Link>
      </footer>
    </main>
  );
}

import { Link } from "react-router-dom";
import Gif from "./Gif";
import MoreExamples from "./MoreExamples";

export default function Home() {
  return (
    <div>
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
            <li>LinkedIn</li> ✔ done
            <li>Corner Store Project</li>
            <li>Star Wars API Project ✔ done can make changes </li>
            <li>Finish Pokemon ✔ done can make changes</li>
          </div>

          <section className="mt-20">
            <p>Whats left Davonne?</p>
            <ol>
              <li> - Finish Portfolio</li>
              <li> - Errors on Capstone for Portfolio</li>
              <li> - See what projects to put on Portfolio</li>
              <li> - Look at Strangers things, can you fix anything</li>
              <li>**** Leetcode...! You need to start like yesterday</li>
              <li> - Restart Corner Store</li>
            </ol>
          </section>

          <p className="mt-20 text-center">By February 12th</p>
        </ol>
      </section>

      <Gif />
      <MoreExamples />
    </div>
  );
}

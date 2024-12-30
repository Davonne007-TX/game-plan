import { Link } from "react-router-dom";
import Gif from "./Gif";
import MoreExamples from "./MoreExamples";

const gamePlan1 = [
  { task: "Review what is React ✔ ", id: 1 },
  { task: "Javascript Review ✔, id: 2 " },
  { task: "Review other peoples code ✔ ", id: 3 },
  { task: "The Bigger Picture ✔ ", id: 4 },
  { task: "LinkedIn update ✔ ", id: 5 },
  { task: "Star Wars API ✔ ", id: 6 },
  { task: "Finish Pokemon Project ✔ ", id: 7 },
];

const whatsLeft = [
  { pendingTask: "Post Pokemon, feature on LinkedIn", id: 1 },
  { pendingTask: "Errors on Capstone and Responsiveness at checkout", id: 2 },
  { pendingTask: "See what projects to put on Profile", id: 3 },
  { pendingTask: "LeetCode? Codewars? Javascript of course", id: 4 },
];

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
              {gamePlan1.map((plan) => (
                <li key={plan.id}>{plan.task}</li>
              ))}
            </section>

            <section className="mt-20 flex flex-col gap-4">
              <h2 className="text-pink-400 text-3xl">Whats left Davonne?</h2>
              {whatsLeft.map((left) => (
                <li key={left.id}>{left.pendingTask}</li>
              ))}
            </section>
          </ol>
        </section>
      </section>
      <Gif />
      <footer className="my-12 text-center text-4xl font-mono mt-20">
        <Link to="/gamePlan2" className="hover:text-pink-400">
          Continue ...
        </Link>
      </footer>
    </main>
  );
}

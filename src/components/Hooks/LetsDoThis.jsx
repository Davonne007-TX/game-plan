import { reactHooks } from "../../data/reactHooks";
import { Link } from "react-router-dom";
import Image from "../Image";

export default function LetsDoThis() {
  return (
    <section className="flex flex-col justify-center items-center mt-20 gap-4 font-mono text-2xl text-white">
      {reactHooks.map((hook) => (
        <Link to={hook.link} key={hook.id} className="hover:text-pink-400">
          {hook.hook}
        </Link>
      ))}

      <Image src="/images/pinkReact.jpg" alt="React Logo by Grok 2" />
    </section>
  );
}

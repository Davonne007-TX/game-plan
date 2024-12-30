import { Link } from "react-router-dom";
import Image from "../Image";

export default function Hooks() {
  const reactHooks = [
    { hook: "useState()", link: "/hookUseState", id: 1 },
    { hook: "useCallBack()", link: "/hookUseCallBack", id: 2 },
  ];

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-20 gap-4 font-sans text-2xl text-white">
        {reactHooks.map((rh) => (
          <Link to={rh.link} key={rh.id} className="hover:text-pink-400">
            {rh.hook}
          </Link>
        ))}

        <Image src="/images/pinkReact.jpg" alt="React Logo by Grok 2" />
      </section>
    </>
  );
}

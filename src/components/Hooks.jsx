import Header from "./Header";
import { Link } from "react-router-dom";
import Image from "./Image";

export default function Hooks({ backToHooks }) {
  return (
    <>
      <Header children={"Hooks"} />
      <section className="flex flex-col justify-center items-center mt-20 gap-10 font-sans text-2xl">
        <li className="text-white hover:text-blue-300">
          <Link to="/hookUseState">useState</Link>
        </li>
        <li className="text-white hover:text-blue-300">
          <Link to="/hookUseCallBack">useCallBack</Link>
        </li>

        <Image src="/images/react.jpg" alt="React Logo" />
      </section>
    </>
  );
}

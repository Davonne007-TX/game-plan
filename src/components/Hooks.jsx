import Header from "./Header";
import { Link } from "react-router-dom";
import Image from "./Image";

export default function Hooks({ backToHooks }) {
  return (
    <>
      <Header children={"Hooks"} />
      <section className="flex flex-col justify-center items-center mt-20 gap-10 font-sans text-2xl">
        <li className="hover:text-white">
          <Link to="/hookOne">useState</Link>
        </li>
        <li className="hover:text-white">
          <Link to="/hookTwo">useCallBack</Link>
        </li>

        <Image src="/images/react.jpg" alt="React Logo" />
      </section>
    </>
  );
}

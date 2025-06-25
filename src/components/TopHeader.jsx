import { gamePlan } from "../data/gamePlan";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  const toggleNavBar = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="flex flex-col lg:flex-row m-8 md:justify-between lg:justify-between items-center lg:gap-20 font-sixty text-white">
      <section className="flex gap-20 md:gap-96 lg:gap-96">
        <h1 className="text-md md:text-lg lg:text-xl pink-hover" onClick={home}>
          Ds Game Plan
        </h1>
        <button
          className="lg:hidden text-xl hover:text-pink-400"
          onClick={toggleNavBar}
        >
          ☰
        </button>
      </section>

      <nav
        className={`flex flex-col font-bold md:flex-col lg:flex-row bg-pink-200 p-2 rounded-3xl gap-8 text-sm mt-10 md:mt-10 ${
          isMobileNavOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        {gamePlan.map((plan, id) => (
          <li
            className="list-none hover:text-pink-400 text-black mt-2"
            key={id}
            onClick={toggleNavBar}
          >
            <Link to={plan.link}>{plan.text}</Link>
          </li>
        ))}
      </nav>
    </header>
  );
}

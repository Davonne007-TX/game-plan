import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const gamePlan = [
    { id: 1, text: "#1", link: "/gamePlan1" },
    { id: 2, text: "#2", link: "/gamePlan2" },
    { id: 3, text: "#3", link: "/gamePlan3" },
    { id: 4, text: "#4", link: "/gamePlan4" },
    { id: 5, text: "#5", link: "/gamePlan5" },
    { id: 6, text: "#6", link: "/gamePlan6" },
    { id: 7, text: "#7", link: "/gamePlan7" },
    { id: 8, text: "#8", link: "/gamePlan8" },
    { id: 9, text: "#9", link: "/gamePlan9" },
    { id: 10, text: "#10", link: "/gamePlan10" },
    { id: 11, text: "#11", link: "/gamePlan11" },
    { id: 12, text: "#12", link: "/gamePlan12" },
    { id: 13, text: "#13", link: "/gamePlan13" },
    { id: 14, text: "#14", link: "/gamePlan14" },
    { id: 15, text: "Side Projects", link: "/sideProjects" },
    { id: 16, text: "React Hooks", link: "/letsLearnHooks" },
  ];

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
        <h1 className="text-sm md:text-lg lg:text-xl pink-hover" onClick={home}>
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

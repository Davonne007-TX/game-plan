import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
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
  ];

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col lg:flex-row m-10 justify-between items-center gap-20 font-sixty text-white">
      <h1 className="text-xl pink-hover" onClick={home}>
        You Got This D..!
      </h1>

      <nav className="flex flex-col md:flex-row lg:flex-row gap-10 text-sm">
        <p className="text-pink-400">Game Plans:</p>
        {gamePlan.map((plan, id) => (
          <li className="list-none hover:text-pink-400" key={id}>
            <Link to={plan.link}>{plan.text}</Link>
          </li>
        ))}
      </nav>
    </section>
  );
}

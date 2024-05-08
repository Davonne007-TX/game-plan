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
  ];

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  return (
    <section className="flex flex-col lg:flex-row m-10 justify-between items-center gap-20 font-sixty text-white">
      <h1 className="text-xl pink-hover" onClick={home}>
        You Got This...!
      </h1>

      <nav className="flex flex-col md:flex-row lg:flex-row gap-10 text-sm">
        {gamePlan.map((plan, id) => (
          <li key={id} className="list-none">
            <Link to={plan.link}>{plan.text}</Link>
          </li>
        ))}
      </nav>
    </section>
  );
}

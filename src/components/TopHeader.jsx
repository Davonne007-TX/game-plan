import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function TopHeader() {
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
        <Link to="/gamePlan1" className="pink-hover">
          #1
        </Link>
        <Link to="/gamePlan2" className="pink-hover">
          #2
        </Link>
        <Link to="" className="pink-hover">
          #3
        </Link>
      </nav>
    </section>
  );
}

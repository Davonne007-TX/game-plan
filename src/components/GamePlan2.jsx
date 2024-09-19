import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ReuseableButton from "./ReuseableButton";

export default function GamePlan2() {
  const navigate = useNavigate();
  const gamePlan1 = () => {
    navigate("/gamePlan1");
  };

  const gamePlan4 = () => {
    navigate("/gamePlan4");
  };

  return (
    <>
      <section className="mt-20 text-white">
        <h1 className=" text-3xl md:text-3xl lg:text-4xl text-center font-mono">
          Game Plan #2
        </h1>
        <section className="flex flex-col ml-20 mt-10 text-2xl font-gloria">
          <li>Responsive Styles on Capstone - - almost done</li>
          <li>Post Capstone - ✔ done</li>
          <li>What projects should be on Portfolio? ✔ done </li>
          <li>Major Errors on Projects ✔ done</li>
          <li>Post Starwars ✔ done</li>
          <li>Getting projects on Portfolio ✔ done</li>
          <li>Leetcode, codewars, and practice problems - always</li>
          <br />
        </section>
      </section>
    </>
  );
}

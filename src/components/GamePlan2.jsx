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
        <h1 className="text-5xl text-center font-mono">Game Plan #2</h1>
        <div className="flex flex-col ml-20 mt-10 text-2xl font-gloria">
          <li>Responsive Styles on Capstone - - almost done</li>
          <li>Post Capstone - tbd</li>
          <li>What projects should be on Portfolio? ✔ done </li>
          <li>Major Errors on Projects ✔ done</li>
          <li>Post Starwars ✔ done</li>
          <li>Getting projects on Portfolio ✔ done</li>
          <li>Leetcode, codewars, and practice problems - always</li>
          <p className="text-center mt-10">By: February 29</p>
          <br />
          <hr />

          <section className="mt-10">
            <h2>Upcoming Projects</h2>
            <li>Corner Store</li>
            <li>Giselda Hair Dresser</li>
            <br />
          </section>

          <hr />
        </div>
      </section>

      <div className="flex justify-center items-center gap-20 mt-12">
        <ReuseableButton label="Back" onClick={gamePlan1} />
        <ReuseableButton label="Next Plan" onClick={gamePlan4} />
      </div>
    </>
  );
}

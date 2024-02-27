import React from "react";
import { useNavigate, Link } from "react-router-dom";
import ReuseableButton from "./ReuseableButton";

export default function GamePlan2() {
  const navigate = useNavigate();
  const gamePlan1 = () => {
    navigate("/");
  };

  return (
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
          <li>Bussiness Website? Transend Tech</li>
          <br />
        </section>

        <hr />

        <div className="flex justify-center items-center gap-20 ">
          <ReuseableButton
            onClick={gamePlan1}
            className="mt-20 rounded-full pink-hover p-2 bg-white text-green-500 mb-20"
            label="Back"
          />

          <Link to="/hooks">
            <ReuseableButton
              label="Hooks"
              className="bg-white rounded-full p-2 text-pink-500 hover:text-green-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

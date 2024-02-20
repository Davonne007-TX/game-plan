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
        <li>Responsive Styles on Capstone - - like now</li>
        <li>Post Capstone - - By February 21st</li>
        <li>What projects should be on Portfolio? ✔ done </li>
        <li>Major Errors on Projects</li>
        <li>Post Starwars ✔ done</li>
        <li>Getting projects on Portfolio ✔ done</li>
        <li>Leetcode, codewars, and practice problems</li>
        <p className="text-center mt-10">By: February 29</p>

        <div className="font-serif">
          <p>Now</p>
          <li>Working on responsiveness on payment on Captone</li>
          <li>Practice Problems</li>
          <li>Post Capstone</li>
          <li>
            Work on Resume for portfolio, should I put resume on portfolio?
          </li>
          <li>Finish and post portfolio</li>
        </div>
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
        <section>
          <h3 className="mt-10">Thoughts - Questions</h3>
          <ul>
            <li>- Projects under company name</li>
            <li>- Are we working on projects alone and if we need help ask?</li>
            <li>
              - Group Projects: split up the work, compensated based on size of
              contribution, what ticket you did
            </li>
          </ul>
        </section>

        <div className="flex justify-center items-center gap-20 ">
          <ReuseableButton
            onClick={gamePlan1}
            className="mt-28 rounded-full pink-hover p-2 bg-white text-green-500 mb-20"
            label="Back"
          />

          <Link to="/hooks">
            <ReuseableButton
              label="Hooks"
              className="mt-10 bg-white rounded-full p-2 text-pink-500 hover:text-green-500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

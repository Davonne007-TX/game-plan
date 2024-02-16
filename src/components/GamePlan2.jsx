import React from "react";
import { useNavigate } from "react-router-dom";

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
        <li>What projects should be on Portfolio?</li>
        <li>Major Errors on Projects</li>
        <li>Getting projects on Portfolio</li>
        <li>Need to do coding problems!!!!!</li>
        <p className="text-center mt-10">By: February 29</p>
        <br />
        <hr />

        <section className="mt-10">
          <h2>Upcoming Projects</h2>
          <li>Corner Store</li>
          <li>Louies Services</li>
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

        <button onClick={gamePlan1} className="mt-28 pink-hover">
          Back
        </button>
      </div>
    </section>
  );
}

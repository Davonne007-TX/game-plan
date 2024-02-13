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
        <li>Responsive Styles on Capstone</li>
        <li>Post Capstone</li>
        <li>What projects should be on Portfolio?</li>
        <li>Errors on Projects</li>
        <li>Getting projects on Portfolio</li>
        <button onClick={gamePlan1} className="mt-40 pink-hover">
          Back
        </button>
      </div>
    </section>
  );
}

import React from "react";
import toDoData from "../data/toDo.js";
import ReuseableButton from "./ReuseableButton.jsx";
import { useNavigate } from "react-router-dom";

export default function GamePlan3() {
  const navigate = useNavigate();

  //functional declarations, instead of arrow functions
  function gamePlan4() {
    navigate("/gamePlan4");
  }

  const backToTwo = () => {
    navigate("/gamePlan2");
  };

  return (
    <>
      <h1 className="font-mono text-pink-700 text-center text-5xl">
        Game Plan #3
      </h1>
      <main className="flex justify-center items-center mt-20 mb-10 gap-5 ml-10 font-gloria text-xl">
        <div className="flex flex-col gap-5">
          {toDoData.map((id) => (
            <li key="id" className="text-white">
              {id.toDo}
            </li>
          ))}
        </div>

        <iframe
          src="https://giphy.com/embed/SScSc0nO2tezJNQc21"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/dccomics-fierce-lets-do-this-dcsuperherogirls-SScSc0nO2tezJNQc21">
            via GIPHY
          </a>
        </p>
      </main>

      <div className="flex justify-center items-center gap-20">
        <ReuseableButton label="Back" onClick={backToTwo} />
        <ReuseableButton label="Next Plan" onClick={gamePlan4} />
      </div>
    </>
  );
}

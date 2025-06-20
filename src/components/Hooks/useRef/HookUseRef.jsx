import { useRef } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function HookUseRef({ backToHooks }) {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ` + ref.current + " times..!");
  }

  const navigate = useNavigate();
  function goToStopWatch() {
    navigate("/useRefStopWatch");
  }
  return (
    <section className="flex-time">
      <h2 className="font-bold text-3xl md:text-3xl text-white">useRef Hook</h2>
      ;
      <button
        onClick={handleClick}
        className="bg-yellow-300 rounded-full mt-40 p-2 text-xl md:text-3xl font-mono hover:scale-105"
      >
        Click me and see what happens..!
      </button>
      <div className="mt-20 flex gap-8 font-mono">
        <Button
          buttonText={"Back To Hooks"}
          className="bg-yellow-300 p-2 hover:scale-105"
          onClick={backToHooks}
        />
        <Button
          buttonText={"Next Example"}
          className="bg-yellow-300 p-2 hover:scale-105"
          onClick={goToStopWatch}
        />
      </div>
    </section>
  );
}

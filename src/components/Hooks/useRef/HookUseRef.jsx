import { useRef } from "react";
import ReuseableButton from "../../ReuseableButton";
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
      <h2 className="font-pizza text-2xl text-white">Hook useRef</h2>;
      <button
        onClick={handleClick}
        className="bg-green-500 rounded-full mt-40 p-2 text-xl md:text-3xl font-pizza hover:scale-110"
      >
        Click me and see what happens..!
      </button>
      <section className="mt-20 flex gap-8">
        <ReuseableButton label={"Back To Hooks"} onClick={backToHooks} />
        <ReuseableButton label={"Next Example"} onClick={goToStopWatch} />
      </section>
    </section>
  );
}

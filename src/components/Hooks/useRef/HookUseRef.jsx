import { useRef } from "react";

export default function HookUseRef() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert(`You clicked ` + ref.current + " times..!");
  }
  return (
    <section className="flex-time">
      <h2 className="font-pizza text-2xl text-white">Hook useRef</h2>;
      <button
        onClick={handleClick}
        className="bg-green-500 rounded-full mt-20 p-2 text-3xl font-pizza hover:scale-110"
      >
        Click Me and see what happens..!
      </button>
    </section>
  );
}

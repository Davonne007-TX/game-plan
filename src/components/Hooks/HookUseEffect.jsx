import { useEffect, useState } from "react";
import ReuseableButton from "../ReuseableButton";
import { use } from "react";

export default function HookUseEffect({ backToHooks }) {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //on every render
  //empty dependency array, will render every time there is a change
  useEffect(() => {
    console.log("I re-rendered");
  });

  //on first render
  //with dependency array, it will log once when its first rendered
  useEffect(() => {
    console.log("The component mounted");
  }, []);

  //on the first render and whenever the dependency changes
  useEffect(() => {
    console.log(`The name changed: ${name}`);

    return () => {
      console.log("I unmounted"); //before it re-renders, can unmount
    }; //clean up function
  }, [name]);

  //without a clean up function, this useEffect is not optimal since it added an event listener every time
  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    // return () => {};
  });

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <section className="flex-time min-h-screen">
      <h1 className="text-white font-anton text-2xl md:text-4xl border-4 p-4 border-pink-400 ">
        Life Cycle of a Component... <br />
        type and open console.log
      </h1>

      <p className="text-white mt-4 font-anton text-2xl md:text-3xl">
        The window width is: {windowWidth}
      </p>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Start Typing"
        className="mt-8 p-2 rounded-xl text-pink-400 font-anton outline-none text-xl"
      />

      <section className="mt-40">
        <ReuseableButton label="Back To Hooks" onClick={backToHooks} />
      </section>
    </section>
  );
}

/*
    youtube source: https://www.youtube.com/watch?v=UVhIMwHDS7k&t=17s
*/

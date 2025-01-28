import { useEffect, useState } from "react";
import ReuseableButton from "../ReuseableButton";

export default function HookUseEffect({ backToHooks }) {
  const [name, setName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //on every render
  //   useEffect(() => {
  //     console.log("I re-rendered");
  //   }); //no dependency array, optional, this will log every time there is a change

  useEffect(() => {
    console.log("The component mounted");
  }, []); //with dependency array,

  return (
    <section className="flex-time min-h-screen">
      <h1 className="text-white font-anton text-3xl md:text-4xl border-4 p-4 border-pink-400 ">
        Life Cycle of a Component... <br />
        type and open console.log
      </h1>

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

    useEffect Hook:

   - whenever the component would reach a lifecycle point
      mount
      user interacts and component re-renders / change 
      unmount 

    
*/

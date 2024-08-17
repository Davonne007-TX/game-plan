import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReuseableButton from "./ReuseableButton";

export default function HookUseState ({ backToHooks }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  //use navigate
  const navigate = useNavigate();

  const nextHook = () => {
    navigate("/hookUseCallback");
  };

  const moreUseState = () => {
    navigate("/moreUseState");
  };

  return (
    <>
      <section className="flex justify-center items-center flex-col mt-10 font-lobster text-lg md:text-lg lg:text-2xl ">
        <p className="text-pink-400 text-3xl">The count is {count}</p>
       <section className="flex gap-10 mt-10">
          <ReuseableButton onClick={increment} label="Increment Count" />
          <ReuseableButton onClick={decrement} label="Decrement Count" />
        </section>

        <section className="mt-10">
          <iframe
            src="https://giphy.com/embed/xT5LMINTLCSOGdIyEo"
            width="480"
            height="270"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/thesimpsons-xT5LMINTLCSOGdIyEo">
              via GIPHY
            </a>
          </p>
        </section>
        <section className="mt-10 flex gap-10">
          <ReuseableButton label="More useState" onClick={moreUseState} />
          <ReuseableButton onClick={nextHook} label="Next Hook" />
          <ReuseableButton onClick={backToHooks} label="Back To Hooks" />
        </section>
      </section>
    </>
  );
}

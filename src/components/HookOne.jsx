import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import ReuseableButton from "./ReuseableButton";

export default function hookOne({ backToHooks }) {
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
    navigate("/hookTwo");
  };

  const moreUseState = () => {
    navigate("/moreUseState");
  };

  return (
    <>
      <Header children={"useState hook"} />
      <div className="flex justify-center items-center flex-col mt-10 font-mono text-2xl ">
        <p>The count is {count}</p>
        <div className="flex flex-col gap-10 mt-10">
          <ReuseableButton onClick={increment} label="Increment Count" />
          <ReuseableButton onClick={decrement} label="Decrement Count" />
        </div>

        <div className="mt-10">
          <iframe
            src="https://giphy.com/embed/d31vMsyGddYZzVBK"
            width="480"
            height="338"
            frameBorder="0"
            allowFullScreen
            className="rounded"
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/southparkgifs-d31vMsyGddYZzVBK"></a>
          </p>
        </div>
        <div className="mt-10 flex gap-10">
          <ReuseableButton label="More useState" onClick={moreUseState} />
          <ReuseableButton onClick={nextHook} label="Next Hook" />
          <ReuseableButton onClick={backToHooks} label="Back To Hooks" />
        </div>
      </div>
    </>
  );
}

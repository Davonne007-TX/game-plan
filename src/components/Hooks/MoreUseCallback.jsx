import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import ReuseableButton from "../ReuseableButton";

export default function MoreUseCallback({ backTooHooks }) {
  const [count, setCount] = useState(0);

  //set a useCallback hook to set the count to + 1
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //create a function to clear the count
  const clearCount = () => {
    setCount(0);
  };

  const navigate = useNavigate();

  const goBackToUseCallback = () => {
    navigate("/hookUseCallBack");
  };

  return (
    <>
      <section className="flex flex-col mt-24 justify-center items-center font-sixty text-white text-5xl">
        <p>Count:{count}</p>
        <button
          onClick={handleClick}
          className="bg-green-400 p-4 rounded-full mt-10"
        >
          Click this big button
        </button>
        <button onClick={clearCount} className="mt-20">
          Clear Count Here 👈
        </button>
        <section className=" flex gap-4 mt-20 text-black text-2xl">
          <ReuseableButton onClick={goBackToUseCallback} label="Go Back" />
          <ReuseableButton onClick={backTooHooks} label="Back To Hooks" />
        </section>
      </section>
    </>
  );
}

//a useCallback hook is used to memorize functions
//preventing unnecessary re-creation of functions on each render

//this can be useful in scenarios where you want to pass a callback function as a prop
//to child components but don't want them to re-render unnecessarily

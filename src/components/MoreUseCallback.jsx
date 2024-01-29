import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import ReuseableButton from "./ReuseableButton";

export default function MoreUseCallback() {
  const [count, setCount] = useState(0);

  //set a useCallback hook to set the count to + 1
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  //create a function to clear the count
  const clearCount = () => {
    setCount(0);
  };

  //useNavigate
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/hookTwo");
  };

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center font-sixty text-white text-5xl">
        <p>Count:{count}</p>
        <button onClick={handleClick} className="bg-black p-4 rounded mt-10">
          Click this button
        </button>
        <button onClick={clearCount} className="mt-20">
          Clear Count
        </button>
        <div className="mt-20">
          <ReuseableButton onClick={goBack} label="Go Back"></ReuseableButton>
        </div>
      </div>
    </>
  );
}

//a useCallback hook is used to memorize functions
//preventing unnecessary re-creation of functions on each render

//this can be useful in scenarios where you want to pass a callback function as a prop
//to child components but don't want them to re-render unnecessarily

import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useCallback, useState } from "react";
import ReuseableButton from "./ReuseableButton";

export default function HookTwo({ backToHooks }) {
  const [inputValue, setInputValue] = useState(""); //set the state for the input, as an empty string

  //a function that takes an event, that sets the states function to the target value
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = useCallback(() => {
    console.log("The button has been activated, and has been clicked");
  }, []);

  // use navigate
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/hookOne");
  };

  const more = () => {
    navigate("/moreUseCallback");
  };

  return (
    <>
      <Header children={"useCallback"} />

      <div className="flex flex-col justify-center items-center font-lobster mt-10">
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Type Something..."
          className="p-2 outline-none border-2 border-black"
        />

        <p className="text-pink-300 mt-10">You typed: {inputValue}</p>

        <button
          onClick={handleClick}
          className="bg-white mt-20 text-2xl lg:ext-4xl rounded-full font-lobster p-2"
        >
          Click and check console.log to see
        </button>

        <div className="flex flex-col gap-10 mt-10">
          <ReuseableButton
            onClick={backToHooks}
            label="Go Back"
            className=" bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
          />
          <ReuseableButton
            className="mt-10 bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
            onClick={more}
            label="More useCallBack"
          />
        </div>
      </div>
    </>
  );
}

//useCallback hook
//  The useCallback hook is used to memoize functions in functional components to
// prevent unnecessary re-rendering.

//The useCallback memorizes functions
//  - optimize performance

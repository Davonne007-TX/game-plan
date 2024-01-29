import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useCallback, useState } from "react";
import ReuseableButton from "./ReuseableButton";

export default function HookTwo() {
  const [inputValue, setInputValue] = useState("");

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

        <p>You typed: {inputValue}</p>

        <button
          onClick={handleClick}
          className="bg-white mt-20 text-2xl lg:ext-4xl rounded-full font-lobster p-2"
        >
          Click and check console.log to see
        </button>

        <div className="flex flex-col gap-10 mt-10">
          <ReuseableButton onClick={goBack} label="Go Back" />
          <ReuseableButton
            className="mt-10 bg-black p-2 text-white rounded-full hover:text-pink-600 font-mono"
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

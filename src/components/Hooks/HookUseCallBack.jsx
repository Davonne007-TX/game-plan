import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import ReuseableButton from "../ReuseableButton";

export default function hookUseCallback({ backToHooks }) {
  const [inputValue, setInputValue] = useState(""); //set the state for the input, as an empty string

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const handleClick = useCallback(() => {
    console.log("The button has been activated, and has been clicked");
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // use navigate
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const more = () => {
    navigate("/moreUseCallback");
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center font-lobster mt-10">
        <h1 className="text-pink-200 text-2xl md:text-3xl">useCallback Hook</h1>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Type Something..."
          className="p-2 outline-none border-2 text-2xl border-black mt-20"
        />
        <p className="text-pink-300 mt-10 text-2xl">You typed: {inputValue}</p>

        <button
          onClick={handleClick}
          className="bg-white mt-10 text-xl lg:text-2xl rounded-full font-lobster p-2"
        >
          Click and check console.log to see
        </button>
        <section className="flex gap-8 mt-10">
          <ReuseableButton
            onClick={backToHooks}
            label="Back To Hooks"
            className=" bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
          />
          <ReuseableButton
            className="mt-10 bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
            onClick={more}
            label="More useCallBack"
          />
        </section>
      </section>
    </>
  );
}

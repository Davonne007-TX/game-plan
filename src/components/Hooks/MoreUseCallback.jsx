import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import ReuseableButton from "../ReuseableButton";

export default function MoreUseCallback({ backToHooks }) {
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
      <section className="flex flex-col mt-24 justify-center items-center font-sixty text-white">
        <p className="text-4xl md:text-5xl">Count:{count}</p>
        <button
          onClick={handleClick}
          className="bg-green-400 text-3xl md:text-4xl p-4 rounded-full mt-10"
        >
          Click this big button
        </button>
        <button onClick={clearCount} className="mt-20">
          Clear Count Here 👈
        </button>

        <div className=" flex gap-4 mt-20 text-black text-3xl md:text-4xl">
          <ReuseableButton onClick={goBackToUseCallback} label="Go Back" />
          <ReuseableButton onClick={backToHooks} label="Back To Hooks" />
        </div>
      </section>
    </>
  );
}

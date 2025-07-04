import { useEffect, useState } from "react";
import Clock from "../Clock";
import ReuseableButton from "../../ReuseableButton";
import { useNavigate } from "react-router-dom";

function useTime() {
  const [time, setTime] = useState(() => new Date()); //set the state for a new Date()

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function MoreUseState() {
  const time = useTime();
  const [color, setColor] = useState("black"); //i want the initial color or state to be black

  const navigate = useNavigate();
  function goBack() {
    navigate("/hookUseState");
  }

  function moreUseState3() {
    navigate("/thirdExampleUseState");
  }

  //one way to do a handel change through a function or you can do a callback function within the onChange event
  //   const handelChange = (e) => {
  //     setColor(e.target.value);
  //   };

  return (
    <>
      <section className="flex flex-col gap-10 justify-center items-center mt-20 font-lobster text-3xl">
        <p className="text-white text-center text-4xl">
          Pick a Color:
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-full w-full mt-5 border-4 text-black border-pink-400 outline-none"
          >
            <option value="black">Select</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="silver">Silver</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="brown">Brown</option>
          </select>
        </p>
        <Clock color={color} time={time.toLocaleTimeString()} />
        <ReuseableButton label="Go Back" onClick={goBack} />
        <ReuseableButton label="More useState" onClick={moreUseState3} />
      </section>
    </>
  );
}

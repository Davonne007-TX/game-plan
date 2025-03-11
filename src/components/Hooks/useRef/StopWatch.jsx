import { useState, useEffect, useRef } from "react";
import ReuseableButton from "../../ReuseableButton";
import { useNavigate } from "react-router-dom";

export default function StopWatch({ backToHooks }) {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const startStopWatch = () => {
    if (intervalRef.current) return;
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const stopStopWatch = () => {
    clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetStopWatch = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStartTime(null);
    setNow(null);
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/hookUseRef");
  };
  return (
    <>
      <section className="flex-time font-anton">
        <h1 className="text-purple-600 text-2xl">useRef Stop Watch</h1>

        <div className="bg-purple-100 p-2 w-full mt-20">
          <h2 className="text-2xl md:text-3xl md:ml-10">
            Time Has Passed: {secondsPassed.toFixed(3)}
          </h2>
          <div className="flex gap-8 mt-4 md:ml-10">
            <button
              className="bg-purple-600 p-2 rounded-xl text-xl md:text-2xl hover:scale-110"
              onClick={startStopWatch}
            >
              Start
            </button>
            <button
              className="bg-purple-600 p-2 rounded-xl text-xl md:text-2xl hover:scale-110"
              onClick={stopStopWatch}
            >
              Stop
            </button>
            <button
              onClick={resetStopWatch}
              className="bg-purple-600 p-2 rounded-xl text-xl md:text-2xl hover:scale-110"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center gap-8 mt-10 ">
        <ReuseableButton
          label={"Back To First Example"}
          className="mt-10 bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
          onClick={goBack}
        />
        <ReuseableButton
          onClick={backToHooks}
          label="Back To Hooks"
          className=" bg-pink-200 p-2 text-black rounded-full hover:text-pink-600 font-mono"
        />
      </section>
    </>
  );
}

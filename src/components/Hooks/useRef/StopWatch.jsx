import { useState, useRef } from "react";

import ReuseableButton from "../../ReuseableButton";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const startStopWatch = () => {
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
  return (
    <section className="flex-time font-anton">
      <h1 className="text-purple-600 text-2xl">useRef Stop Watch</h1>

      <section className="bg-purple-100 p-2 w-full mt-20">
        <h2 className="text-2xl md:text-5xl md:ml-10">
          Time Has Passed: {secondsPassed.toFixed(3)}
        </h2>
        <div className="flex gap-8 mt-4 md:ml-10">
          <button
            className="bg-purple-600 p-2 rounded-xl text-xl md:text-3xl hover:scale-110"
            onClick={startStopWatch}
          >
            Start
          </button>
          <button
            className="bg-purple-600 p-2 rounded-xl text-xl md:text-3xl hover:scale-110"
            onClick={stopStopWatch}
          >
            Stop
          </button>
        </div>
      </section>
    </section>
  );
}

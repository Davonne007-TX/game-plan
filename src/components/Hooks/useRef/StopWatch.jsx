import { useState, useRef } from "react";

import ReuseableButton from "../../ReuseableButton";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  return (
    <section className="flex-time font-anton">
      <h1 className="text-purple-600 text-2xl">useRef Stop Watch</h1>

      <section className="bg-purple-100 p-2 w-full mt-20">
        <h2 className="text-2xl md:text-5xl md:ml-10">Time Has Passed: </h2>
        <div className="flex gap-8 mt-4 md:ml-10">
          <button className="bg-purple-600 p-2 rounded-xl text-xl md:text-3xl hover:scale-110">
            Start
          </button>
          <button className="bg-purple-600 p-2 rounded-xl text-xl md:text-3xl hover:scale-110">
            Stop
          </button>
        </div>
      </section>
    </section>
  );
}

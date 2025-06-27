import { useState } from "react";
import Button from "../../Button";
import { whatToDoWeatherEvent } from "./whatToDoWeatherEvent ";

export default function WeatherPreparedness() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const next = index < whatToDoWeatherEvent.length - 1;

  const handleClick = () => {
    if (next) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleMoreWeatherPrep = () => {
    setShowMore(!showMore);
  };

  let storm = whatToDoWeatherEvent[index];
  return (
    <section className="flex flex-col justify-center  text-white items-center">
      <h1 className="text-2xl md:text-4xl font-anton text-blue-600">
        Weather Preparedness Guide
      </h1>

      <div className="max-w-xs md:max-w-4xl p-2 my-10 flex flex-col justify-center items-center gap-4">
        <h2 className="font-sixty text-2xl">{storm.name}</h2>

        <span className="font-sixty">
          ({index + 1} of {whatToDoWeatherEvent.length})
        </span>

        <button onClick={handleMoreWeatherPrep} className="text-2xl">
          {showMore ? "Hide" : "Show"} Details
        </button>

        {showMore && (
          <p className="text-center text-lg md:text-2xl">{storm.description}</p>
        )}

        <img
          src={storm.img}
          alt={storm.alt}
          className="max-w-lg mt-10 rounded-xl"
        />
        <button
          className="bg-white mt-8 text-2xl w-40 font-anton tracking-widest text-black p-2 rounded font-bold"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </section>
  );
}

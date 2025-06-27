import { useState } from "react";
import { whatToDoWeatherEvent } from "./whatToDoWeatherEvent ";

export default function WeatherPreparedness({ backToHooks }) {
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
          <div className="flex flex-col gap-8">
            <p className="text-center text-lg md:text-2xl">
              {storm.description}
            </p>
            <p className="text-center text-lg md:text-2xl">
              {storm.moreDescription}
            </p>
          </div>
        )}

        <img
          src={storm.img}
          alt={storm.alt}
          className="max-w-lg mt-10 rounded-xl"
        />
        <button
          className="bg-white mt-8 text-2xl w-60 font-anton text-black p-2 rounded font-bold  hover:scale-105 mb-8 transition-all duration-300 transform ease-out"
          onClick={handleClick}
        >
          Next Type of Storm
        </button>

        <button
          onClick={backToHooks}
          className="p-2 bg-white text-blue-600 mt-10 text-xl md:text-2xl hover:scale-105 mb-8 transition-all duration-300 transform ease-out font-capri"
        >
          Back To Hooks
        </button>
      </div>
    </section>
  );
}

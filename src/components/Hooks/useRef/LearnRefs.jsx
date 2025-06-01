import { useRef, useState } from "react";
import Button from "../../Button";

export default function LearnRefs() {
  const ref = useRef("Hola amiga!");
  const [text, setText] = useState("Hola amiga");

  const handleRefUpdate = () => {
    ref.current = "Hola, como estas";
  };

  const handleStateUpdate = () => {
    setText("Hola como estas");
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-pink-500 font-lobster text-2xl md:text-4xl lg:text-4xl text-center">
        Lets Figure This Out: useRef() Edition
        <a
          href="https://youtu.be/hErOvJAJ0KY?si=gLsiw_gOoTlfFic2"
          className="text-white font-lobster underline block text-2xl md:text-3xl"
        >
          Tutorial by: YouTube Content Creator Shruti Kapoor
        </a>
      </h1>

      <div className="bg-pink-500 rounded text-2xl mt-8 font-anton max-w-5xl px-4 py-4">
        <p>Ref: {ref.current}</p>
        <p>State: {text}</p>
        <div className="flex gap-4 mt-8 px-4">
          <Button
            buttonText="Update ref"
            onClick={handleRefUpdate}
            className="p-2 bg-white hover:scale-105 transition-all duration-300 transform ease-out hover:bg-gray-200 text-pink-500"
          />
          <Button
            buttonText="Update State"
            onClick={handleStateUpdate}
            className="p-2 bg-white hover:scale-105 transition-all duration-300 transform ease-out hover:bg-gray-200 text-pink-500"
          />{" "}
        </div>
      </div>
    </section>
  );
}

//useState vs useRef updates

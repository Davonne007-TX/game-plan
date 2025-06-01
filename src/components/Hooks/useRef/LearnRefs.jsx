import { useRef, useState } from "react";

export default function LearnRefs() {
  const ref = useRef("Hola amiga!");
  const [text, setText] = useState("Hola amiga");

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

      <div className="bg-pink-500 rounded text-2xl mt-8 font-anton max-w-5xl px-4">
        <p>Ref: {ref.current}</p>
        <p>State: {text}</p>
      </div>
    </section>
  );
}

//useState vs useRef

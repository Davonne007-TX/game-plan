import { useRef, useState } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function LearnRefs({ backToHooks }) {
  const ref = useRef("Hola amiga!");
  const [text, setText] = useState("Hola amiga");

  const handleRefUpdate = () => {
    ref.current = "Hola, como estas";
  };

  const handleStateUpdate = () => {
    setText("Hola como estas");
  };

  const navigate = useNavigate();
  const goBackToPreviousUseRef = () => {
    navigate("/useRefStopWatch");
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

      <div className="mt-20 flex flex-col md:flex-row gap-8 font-anton">
        <Button
          buttonText="Back To Previous Example"
          className="p-2 bg-white hover:scale-105 transition-all duration-300 transform ease-out hover:bg-gray-200 text-pink-500"
          onClick={goBackToPreviousUseRef}
        />
        <Button
          onClick={backToHooks}
          buttonText="Back To Hooks"
          className="p-2 bg-white hover:scale-105 transition-all duration-300 transform ease-out hover:bg-gray-200 text-pink-500"
        />
      </div>
    </section>
  );
}

//useState vs useRef updates

//Questions :
//When you click on update state button first, the ref doesn't update anymore, just the state

//But it does update both useRef and useState when you click update ref and then update state

//why?

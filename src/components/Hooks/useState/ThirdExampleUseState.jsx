import { useState } from "react";
import Button from "../../Button";
import { useNavigate } from "react-router-dom";

export default function ThirdExampleUseState({ backToHooks }) {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const naviagte = useNavigate();
  const lastExample = () => {
    naviagte("/weatherAware");
  };

  return (
    <section
      className="font-gloria min-h-screen backdrop:flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col p-4 justify-center items-center gap-4">
        <h1 className="text-white  text-2xl md:text-4xl">
          Change The Background Color
        </h1>

        <label>
          <input
            value={color}
            type="text"
            placeholder="Enter Color, or Hex #"
            onChange={handleChange}
            className="rounded-2xl outline outline-4 outline-pink-500 p-4 w-80 shadow-md text-xl md:text-2xl"
          />
        </label>

        <Button
          onClick={backToHooks}
          buttonText="Back To Hooks"
          className="p-2 bg-white text-pink-400 mt-10 text-xl md:text-2xl hover:scale-105 mb-8 transition-all duration-300 transform ease-ou font-capri"
        />

        <Button
          onClick={lastExample}
          buttonText="See Next Example"
          className="p-2 bg-white text-pink-400 mt-10 text-xl md:text-2xl hover:scale-105 mb-8 transition-all duration-300 transform ease-ou font-capri"
        />
      </div>
    </section>
  );
}

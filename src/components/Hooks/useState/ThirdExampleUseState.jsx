import { useState } from "react";

export default function ThirdExampleUseState() {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
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
      </div>
    </section>
  );
}

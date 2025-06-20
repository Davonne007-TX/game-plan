import { useState, useMemo } from "react";

export default function UseMemoFilterFruit() {
  const [query, setQuery] = useState("");
  const wingFlavors = [
    "Lemon Pepper",
    "Spicy Garlic",
    "Spicy Lemon Pepper",
    "Mango Habenero",
    "Hot",
    "Mild",
  ];

  const filteredWings = useMemo(() => {
    return wingFlavors.filter((wing) => wing.includes(query));
  }, [query, wingFlavors]);

  return (
    <section className="flex flex-col gap-2 p-2 justify-center items-center">
      <h2 className="text-white font-capri text-4xl text-center">
        useMemo Hook
      </h2>
      <p className="text-white font-thin text-2xl">
        Example from Githubs Copilot
      </p>

      <div className=" bg-red-600 p-4 md:p-8 mt-10 rounded-3xl">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 🔥🍗 Flavors..."
          className="w-60 md:w-96 p-2 font-capri hover:outline-none text-md md:text-2xl"
        />

        <ul>
          {filteredWings.map((wings) => (
            <li
              key={wings}
              className="text-white mt-8 text-lg md:text-2xl font-sans"
            >
              {wings}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

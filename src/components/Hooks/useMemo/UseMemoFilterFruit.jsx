import { useState, useMemo } from "react";

export default function UseMemoFilterFruit() {
  const [query, setQuery] = useState("");
  const items = [
    "Lemon Pepper",
    "Spicy Garlic",
    "Mango Habenero",
    "Hot",
    "Mild",
  ];

  const filteredItems = useMemo(() => {
    return items.filter((items) => items.includes(query));
  }, [query, items]);

  return (
    <section className="flex flex-col gap-2 p-2 justify-center items-center">
      <h2 className="text-white font-anton text-4xl text-center">
        useMemo Hook
      </h2>
      <p className="text-white font-thin">Example from react.dev</p>

      <div className=" bg-red-600 p-4 md:p-8 mt-20 rounded-3xl">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Hot Wing Flavors..."
          className="w-60 md:w-96 p-2 hover:outline-none font-mono text-sm md:text-2xl"
        />
      </div>
    </section>
  );
}

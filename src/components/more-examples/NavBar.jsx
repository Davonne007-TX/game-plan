import React from "react";

export default function NavBar() {
  const links = [
    { name: "News and Feature", id: 0 },
    { name: "Kids", id: 1 },
    { name: "Women", id: 2 },
    { name: "Men", id: 3 },
    { name: "Merch", id: 4 },
  ];
  return (
    <>
      <section className="ml-10 flex flex-col lg:flex-row lg:mt-5 gap-10 list-none font-sans">
        {links.map((links, id) => (
          <li key={id}>{links.name}</li>
        ))}
      </section>

      <input
        type="search"
        className="w-96 h-10 p-2 lg:p-0 rounded-md mt-4 ml-10 outline-none bg-slate-500"
      />
    </>
  );
}

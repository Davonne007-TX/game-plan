import React from "react";

export default function NavBar() {
  const links = [
    { name: "News and Features" },
    { name: "Kids" },
    { name: "Women" },
    { name: "Men" },
    { name: "Merch" },
  ];
  return (
    <>
      <div className="ml-10 flex flex-col lg:flex-row lg:mt-5 gap-10 list-none font-sans">
        {links.map((links) => (
          <li key="name">{links.name}</li>
        ))}
      </div>
    </>
  );
}

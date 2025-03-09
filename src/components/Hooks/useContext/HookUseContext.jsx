import { createContext, useContext, useState } from "react";
import Form from "./Form";

export const ThemeContext = createContext(null);

export default function HookUseContext() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <section className="flex justify-center items-center">
          <h1 className="text-pink-700 text-3xl font-lobster">
            useContext Hook
          </h1>
        </section>

        <section
          className={`max-w-xs md:max-w-xl mx-auto p-8 mt-20 rounded-xl flex flex-col gap-4  ${
            theme === "dark" ? "bg-pink-600 text-white" : "bg-white text-black"
          }`}
        >
          <Form />
          <label className="font-mono">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) => {
                setTheme(e.target.checked ? "dark" : "light");
              }}
            />{" "}
            Use Dark Mode
          </label>
        </section>
      </ThemeContext.Provider>
    </>
  );
}

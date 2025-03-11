import { createContext, useState } from "react";
import Form from "./Form";
import ReuseableButton from "../../ReuseableButton";
import { useNavigate } from "react-router-dom";

export const ThemeContext = createContext(null);

export default function HookUseContext({ backToHooks }) {
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  const nextExample = () => {
    navigate("/nextExample");
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <section className="flex justify-center items-center font-mono">
          <h1 className="text-pink-700 text-3xl">useContext Hook</h1>
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

      <section className=" mt-20 flex gap-8 justify-center items-center">
        <ReuseableButton label="Back To Hooks" onClick={backToHooks} />
        <ReuseableButton label={"Next Example"} onClick={nextExample} />
      </section>
    </>
  );
}

import { createContext, useState } from "react";
import WelcomePanel from "./WelcomePanel";
import ReuseableButton from "../../ReuseableButton";
import { useNavigate } from "react-router-dom";

export const ChangeThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export default function SecondExample({ backToHooks }) {
  const [changeTheme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const backToUseContext = () => {
    navigate("/hookUseContext");
  };

  return (
    <ChangeThemeContext.Provider value={{ changeTheme, setTheme }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <h2 className="text-white text-center text-2xl font-mono">
          More useContext Hook
        </h2>
        <WelcomePanel />

        <label className="text-white font-mono flex gap-4 justify-center items-center mt-4">
          <input
            type="checkbox"
            checked={changeTheme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />{" "}
          Use Dark Mode
        </label>

        <section className="flex gap-8 justify-center items-center mt-20">
          <ReuseableButton
            onClick={backToUseContext}
            label="Back To useContext Example"
          />
          <ReuseableButton onClick={backToHooks} label="Back To Hooks" />
        </section>
      </CurrentUserContext.Provider>
    </ChangeThemeContext.Provider>
  );
}

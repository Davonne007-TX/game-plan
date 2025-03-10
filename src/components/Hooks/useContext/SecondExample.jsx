import { createContext, useState } from "react";
import WelcomePanel from "./WelcomePanel";

export const ChangeThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

export default function SecondExample() {
  const [changeTheme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <ChangeThemeContext.Provider value={{ changeTheme, setTheme }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />

        <label className="text-white font-mono flex justify-center items-center mt-4">
          <input
            type="checkbox"
            checked={changeTheme === "dark"}
            onChange={(e) => {
              setTheme(e.target.checked ? "dark" : "light");
            }}
          />{" "}
          Use Dark Mode
        </label>
      </CurrentUserContext.Provider>
    </ChangeThemeContext.Provider>
  );
}

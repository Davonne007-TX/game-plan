import { useContext } from "react";
import { ThemeContext } from "./HookUseContext";

export default function UseContextButton({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button
      className={`font-sixty p-2 rounded text-sm ${className} ${
        theme === "dark" ? "bg-black" : "bg-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

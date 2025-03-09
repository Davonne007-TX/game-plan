import { useContext } from "react";
import { ThemeContext } from "./HookUseContext";

export default function UseContextButton({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={`bg-gray-300 font-sixty p-2 rounded ${className}`}>
      {children}
    </button>
  );
}

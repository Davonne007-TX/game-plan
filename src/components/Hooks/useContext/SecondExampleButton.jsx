import { useContext } from "react";
import { ChangeThemeContext } from "./SecondExample";

export default function SecondExampleButton({ children, disabled, onClick }) {
  const { changeTheme } = useContext(ChangeThemeContext);
  const className = "button-" + changeTheme;
  return (
    <button
      className={` rounded-full p-2 hover:scale-110 cursor-pointer ${
        changeTheme === "dark" ? "bg-black text-white" : "bg-white text-black"
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

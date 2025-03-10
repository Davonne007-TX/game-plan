import { useContext } from "react";
import { ChangeThemeContext } from "./SecondExample";

export default function SecondExampleButton({ children, disabled, onClick }) {
  const changeTheme = useContext(ChangeThemeContext);
  const className = "button-" + changeTheme;
  return (
    <button
      className={`bg-white rounded-full p-2 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

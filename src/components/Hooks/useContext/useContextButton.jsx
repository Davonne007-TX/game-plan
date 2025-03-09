import { useContext } from "react";
import { ThemeContext } from "./HookUseContext";

export default function UseContextButton({ children }) {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
}

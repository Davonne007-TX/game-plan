import { useContext } from "react";
import { ChangeThemeContext } from "./SecondExample";

export default function SecondPanel({ title, children }) {
  const changeTheme = useContext(ChangeThemeContext);
  const className = "panel-" + changeTheme;
  return (
    <section className={` ${className}`}>
      <h2 className="font-mono text-4xl p-2">{title}</h2>
      {children}
    </section>
  );
}

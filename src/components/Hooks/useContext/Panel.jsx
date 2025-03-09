import { useContext } from "react";
import { ThemeContext } from "./HookUseContext";

export default function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  const className = `panel-${theme}`;

  return (
    <section className={className}>
      <h3 className="font-sixty text-xl md:text-3xl">{title}</h3>
      {children}
    </section>
  );
}

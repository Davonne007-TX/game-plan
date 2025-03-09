import { useContext } from "react";
import Panel from "./Panel";
import UseContextButton from "./useContextButton";
import { ThemeContext } from "./HookUseContext";

export default function Form({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <Panel title={"Hello World, lets connect..!"} theme={theme}>
      <div className="flex gap-8 mt-4 ">
        <UseContextButton>Send Message</UseContextButton>
        <UseContextButton>Get in Touch</UseContextButton>
      </div>
    </Panel>
  );
}

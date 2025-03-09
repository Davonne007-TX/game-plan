import { useContext } from "react";
import Panel from "./Panel";
import UseContextButton from "./useContextButton";
import { ThemeContext } from "./HookUseContext";

export default function Form({ children }) {
  const theme = useContext(ThemeContext);
  return (
    <Panel title={"Welcome"} theme={theme}>
      <UseContextButton>Sign Up</UseContextButton>
      <UseContextButton>Login</UseContextButton>
    </Panel>
  );
}

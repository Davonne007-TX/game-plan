import Panel from "./Panel";
import UseContextButton from "./useContextButton";

export default function Form({ children }) {
  return (
    <Panel title={"Welcome"}>
      <UseContextButton>Sign Up</UseContextButton>
      <UseContextButton>Login</UseContextButton>
    </Panel>
  );
}

import { useContext } from "react";
import { ChangeThemeContext, CurrentUserContext } from "./SecondExample";
import SecondPanel from "./SecondPanel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";

export default function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  const { changeTheme } = useContext(ChangeThemeContext);
  const className = "panel-" + changeTheme;

  return (
    <section
      className={`p-4 border-2 rounded-3xl max-w-xl mx-auto mt-40 ${
        changeTheme === "dark" ? "bg-pink-600" : "bg-white"
      } ${className}`}
    >
      <SecondPanel title="Welcome">
        {currentUser !== null ? <Greeting /> : <LoginForm />}
      </SecondPanel>
    </section>
  );
}

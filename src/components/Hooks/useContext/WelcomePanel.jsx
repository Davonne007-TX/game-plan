import { useContext } from "react";
import { CurrentUserContext } from "./SecondExample";
import SecondPanel from "./SecondPanel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";

export default function WelcomePanel({ children }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <section
      className={`p-4 border-2 bg-white rounded-3xl max-w-xl mx-auto mt-40`}
    >
      <SecondPanel title="Welcome">
        {currentUser !== null ? <Greeting /> : <LoginForm />}
      </SecondPanel>
    </section>
  );
}

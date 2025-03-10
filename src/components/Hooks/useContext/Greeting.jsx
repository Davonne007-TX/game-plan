import { useContext } from "react";
import { ChangeThemeContext, CurrentUserContext } from "./SecondExample";

export default function Greeting() {
  const { currentUser } = useContext(CurrentUserContext);
  const { changeTheme } = useContext(ChangeThemeContext);
  const className = "greeting-" + changeTheme;
  return (
    <>
      <section
        className={`p-2 rounded-xl text-xl mt-4 font-mono ${className} ${
          changeTheme === "dark"
            ? "bg-black text-white"
            : "bg-purple-500 text-black"
        } `}
      >
        <p>You are logged in as {currentUser.name}</p>;
      </section>
    </>
  );
}

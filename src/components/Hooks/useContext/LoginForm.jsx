import { useContext, useState } from "react";
import SecondExampleButton from "./SecondExampleButton";
import { ChangeThemeContext, CurrentUserContext } from "./SecondExample";

export default function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName.trim() !== "" && lastName.trim();
  const { changeTheme } = useContext(ChangeThemeContext);
  const className = "background-" + changeTheme;
  return (
    <form
      className={`flex flex-col rounded-2xl font-mono gap-4 p-4 justify-center items-center mt-4 ${
        changeTheme === "dark" ? "bg-pink-200" : "bg-purple-600"
      } ${className}`}
    >
      <label className="text-xl">
        First Name:
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="rounded p-2"
        />
      </label>
      <label className="text-xl">
        {" "}
        Last Name:
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="rounded p-2"
        />
      </label>

      <SecondExampleButton
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: firstName + "" + lastName,
          });
        }}
        className={"hover:scale-110"}
      >
        Log in
      </SecondExampleButton>
    </form>
  );
}

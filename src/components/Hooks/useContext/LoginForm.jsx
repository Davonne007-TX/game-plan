import { useContext, useState } from "react";
import SecondExampleButton from "./SecondExampleButton";
import { CurrentUserContext } from "./SecondExample";

export default function LoginForm() {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName.trim() !== "" && lastName.trim();
  return (
    <form
      className={`flex flex-col rounded-2xl bg-purple-500 font-mono gap-4 p-4 justify-center items-center mt-4`}
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
      >
        Log in
      </SecondExampleButton>
    </form>
  );
}

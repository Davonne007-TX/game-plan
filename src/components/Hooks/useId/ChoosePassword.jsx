import { useId } from "react";

export default function ChoosePassword() {
  const myPasswordHintId = useId();
  return (
    <section className="flex-time">
      <h1 className="font-sixty text-purple-300 mt-20 text-3xl">
        useId() hook{" "}
      </h1>

      <div className="bg-purple-400 max-w-3xl p-8 mt-10">
        <div className="flex flex-col gap-4 font-sixty text-2xl">
          <h2>You shall not pass..! Choose your password..!</h2>
          <label className="font-mono text-2xl w-full">
            Password:
            <input
              type="password"
              className="p-1 rounded outline-none border-4 border-purple-600 "
              aria-describedby={myPasswordHintId}
            />
          </label>
          <p id={myPasswordHintId} className="text-2xl font-mono">
            Your password should be at least 3000 characters
          </p>
        </div>
      </div>
    </section>
  );
}

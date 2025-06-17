import { useState } from "react";
import Button from "../../Button";

export default function Challenge({ backToHooks }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    setTimeout(() => {
      alert("Sending " + text);
    }, 3000);
  };

  const theChallenge = `

    In this example, after you press “Send”, there is a small
    delay before the message is shown. Type “hello”, press
    Send, and then quickly edit the input again. Despite
    your edits, the alert would still show “hello”
    (which was the value of state at the time the button was clicked).

    Usually, this behavior is what you want in an app. 
    However, there may be occasional cases where you
    want some asynchronous code to read the latest
    version of some state. Can you think of a way to
    make the alert show the current input text rather
    than what it was at the time of the click?`;
  return (
    <section className=" min-h-screen text-white flex flex-col justify-center items-center px-4">
      <h1 className="font-sixty text-3xl text-center">useRef Challenge</h1>
      <p className="font-thin  block text-2xl text-center mt-4">
        Example 4 from try out some challenges section on{" "}
        <a
          href="https://react.dev/learn/referencing-values-with-refs"
          className="underline"
        >
          react.dev
        </a>
      </p>

      <div className="flex justify-center items-center w-full gap-4 mt-20">
        <div className="flex flex-col items-center gap-6 w-full max-w-md text-center">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 rounded text-black "
          />
          <button
            onClick={handleSend}
            className="bg-green-600 text-2xl p-2 px-4 rounded font-bold hover:bg-green-700 transition"
          >
            Send Ahora
          </button>

          <h2 className="font-sixty text-2xl mt-4 md:text-3xl">
            The Challenge
          </h2>
          <p className="font-thin text-2xl">
            React.dev, Shruti's Challenge Source:
            https://react.dev/learn/referencing-values-with-refs
          </p>
          <p className="font-thin text-2xl">{theChallenge}</p>
        </div>
      </div>
      <Button
        buttonText={"Back To Hooks"}
        className="bg-green-400 text-black text-2xl my-20 font-bold p-2 hover:scale-105"
        onClick={backToHooks}
      />
    </section>
  );
}

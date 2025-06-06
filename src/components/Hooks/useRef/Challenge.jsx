import { useState } from "react";

export default function Challenge() {
  const [text, setText] = useState("");

  const handleSend = () => {
    setTimeout(() => {
      alert("Sending " + text);
    }, 3000);
  };
  return (
    <section className="max-w-4xl text-white flex  flex-col justify-center items-center">
      <h1 className="font-sixty text-3xl">useRef Challenge</h1>
      <a
        href="https://react.dev/learn/referencing-values-with-refs"
        className="font-thin block text-2xl text-center mt-4"
      >
        Example 4 from try out some challenges section on react.dev
      </a>

      <div className="flex gap-4 items-center mt-20">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 rounded text-black "
        />
        <button
          onClick={handleSend}
          className="bg-green-600 p-2 px-4 rounded font-bold hover:bg-green-700 transition"
        >
          Send Ahora
        </button>
      </div>
    </section>
  );
}

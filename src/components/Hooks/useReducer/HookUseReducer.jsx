import { useReducer } from "react";
import Button from "../../Button";
function reducer(state, action) {
  if (action.type === "increment_age") {
    return {
      age: state.age + 1,
    };
  }
}

export default function HookUseReducer({ backToHooks }) {
  const [state, dispatch] = useReducer(reducer, { age: 31 });
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-pink-600 font-gloria text-3xl text-center">
        useReducer Hook
      </h1>
      <p className="text-white font-serif text-xl">Example from React.dev</p>

      <div className=" mt-20 text-2xl bg-white max-w-3xl p-4 md:p-8 rounded">
        <button
          className="bg-pink-600  mb-4 hover:scale-105 transition-all duration-300 transform ease-out font-gloria text-white p-2 rounded-3xl"
          onClick={() => {
            dispatch({ type: `increment_age` });
          }}
        >
          Increment Age!!
        </button>

        <p className="font-mono">
          Awesome you are
          <span className="bg-pink-600 text-white p-1 ml-2">
            {state.age}
          </span>{" "}
          years old! Feliz Cumpleaños!{" "}
        </p>
      </div>

      <div className="mt-20 flex flex-col gap-8">
        <Button
          onClick={backToHooks}
          buttonText="Back To Hooks"
          className="p-2 bg-pink-600 text-2xl text-white hover:scale-105 transition-all duration-300 transform ease-ou font-gloria"
        />
        <Button
          onClick={""}
          buttonText="Next Example"
          className="p-2 bg-pink-600 text-2xl text-white hover:scale-105 transition-all duration-300 transform ease-ou font-gloria"
        />
      </div>
    </section>
  );
}

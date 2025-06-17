import { useReducer } from "react";
import Button from "../../Button";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Count({ backToHooks }) {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-white font-extrabold text-3xl text-center">
        useReducer Similar Example{" "}
      </h1>
      <p className="text-purple-600 font-gloria mt-2 text-2xl">
        with Switch Statement
      </p>

      <div className="text-white mt-20 text-4xl font-thin">
        <p>Count: {state.count}</p>
        <div className="text-center text-5xl">
          <Button
            buttonText="-"
            onClick={() => dispatch({ type: "decrement" })}
            className="text-white hover:scale-105"
          />
          <Button
            buttonText="+"
            className="hover:scale-105"
            onClick={() => dispatch({ type: "increment" })}
          />
        </div>
      </div>

      <Button
        onClick={backToHooks}
        buttonText="Back To Hooks"
        className="p-2 bg-purple-600 mt-10 text-2xl text-white hover:scale-105 transition-all duration-300 transform ease-ou font-gloria"
      />
    </section>
  );
}

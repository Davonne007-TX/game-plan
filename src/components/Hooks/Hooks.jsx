import { Link } from "react-router-dom";
import Image from "../Image";

export default function Hooks() {
  const reactHooks = [
    { hook: "useState()", link: "/hookUseState", id: 1 },
    { hook: "useCallBack()", link: "/hookUseCallBack", id: 2 },
    { hook: "useEffect()", link: "/hookUseEffect", id: 3 },
    { hook: "useContext()", link: "/hookUseContext", id: 4 },
    { hook: "useRef()", link: "/hookUseRef", id: 5 },
    { hook: "useReducer()", link: "/useReducerHook", id: 6 },
    { hook: "useMemo()", link: "/useMemoHookFilterWings", id: 6 },
  ];

  return (
    <>
      <section className="flex flex-col justify-center items-center mt-20 gap-4 font-mono text-2xl text-white">
        {reactHooks.map((rh) => (
          <Link to={rh.link} key={rh.id} className="hover:text-pink-400">
            {rh.hook}
          </Link>
        ))}

        <Image src="/images/pinkReact.jpg" alt="React Logo by Grok 2" />
      </section>
    </>
  );
}

/*
  Resources - 

  - https://react.dev/reference/rules/rules-of-hooks









*/

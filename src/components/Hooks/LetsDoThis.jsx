import { Link } from "react-router-dom";
import Image from "../Image";

export default function LetsDoThis() {
  const reactHooks = [
    { hook: "useState()", link: "/hookUseState", id: 1 },
    { hook: "useCallBack()", link: "/hookUseCallBack", id: 2 },
    { hook: "useEffect()", link: "/hookUseEffect", id: 3 },
    { hook: "useContext()", link: "/hookUseContext", id: 4 },
    { hook: "useRef()", link: "/hookUseRef", id: 5 },
    { hook: "useReducer()", link: "/useReducerHook", id: 6 },
    { hook: "useMemo()", link: "/useMemoHookFilterWings", id: 7 },
    { hook: "useActionState()", link: "/displayErrorsUseActionState", id: 8 },
  ];

  return (
    <section className="flex flex-col justify-center items-center mt-20 gap-4 font-mono text-2xl text-white">
      {reactHooks.map((hook) => (
        <Link to={hook.link} key={hook.id} className="hover:text-pink-400">
          {hook.hook}
        </Link>
      ))}

      <Image src="/images/pinkReact.jpg" alt="React Logo by Grok 2" />
    </section>
  );
}

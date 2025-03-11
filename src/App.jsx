import "./App.css";
import { useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Home from "./components/Home";
import GamePlan1 from "./components/One/GamePlan1";
import LetsLearnHooks from "./components/Hooks/LetsLearnHooks";
import Hooks from "./components/Hooks/Hooks";
import HookUseState from "./components/Hooks/HookUseState";
import MoreUseState from "./components/Hooks/MoreUseState";
import HookUseCallBack from "./components/Hooks/HookUseCallBack";
import MoreUseCallback from "./components/Hooks/MoreUseCallback";
import HookUseEffect from "./components/Hooks/HookUseEffect";
import HookUseContext from "./components/Hooks/useContext/HookUseContext";
import SecondExample from "./components/Hooks/useContext/SecondExample";
import HookUseRef from "./components/Hooks/useRef/HookUseRef";
import SideProjects from "./components/more-examples/SideProjects";
import Lists from "./components/more-examples/Lists";
import Toggle from "./components/more-examples/Toggle";
import ForFun from "./components/more-examples/ForFun";
import Random from "./components/more-examples/Random";
import WeDidIt from "./components/more-examples/WeDidIt";
import ThinkingInReact from "./components/more-examples/Product-Search/ThinkingInReact";
import ToDo from "./components/more-examples/To-Do-List/toDo";
import Timer from "./components/more-examples/CountDown/Timer";
import WebCard from "./components/more-examples/Web-Card/WebCard";
import GamePlan2 from "./components/GamePlan2";
import GamePlan3 from "./components/GamePlan3";
import GamePlan4 from "./components/GamePlan4";
import GamePlan5 from "./components/Five/GamePlan5";
import GamePlan6 from "./components/GamePlan6";
import GamePlan7 from "./components/GamePlan7";
import GamePlan8 from "./components/Eight/GamePlan8";
import GamePlan9 from "./components/Nine/GamePlan9";
import GamePlan10 from "./components/GamePlan10";
import GamePlan11 from "./components/Eleven/GamePlan11";
import GamePlan12 from "./components/Twelve/GamePlan12";
import GamePlan13 from "./components/Thirteen/GamePlan13";
import GamePlan14 from "./components/Fourteen/GamePlan14";
import StopWatch from "./components/Hooks/useRef/StopWatch";

//Note to self; lazy load components and images

function App() {
  const navigate = useNavigate();
  //useCallback
  const backToHooks = useCallback(() => {
    navigate("/hooks");
  }, [navigate]);

  return (
    <>
      <TopHeader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamePlan1" element={<GamePlan1 />} />
        <Route path="/letsLearnHooks" element={<LetsLearnHooks />} />
        <Route path="hooks" element={<Hooks />} />
        <Route
          path="/hookUseState"
          element={<HookUseState backToHooks={backToHooks} />}
        />
        <Route path="/moreUseState" element={<MoreUseState />} />
        <Route
          path="/hookUseCallBack"
          element={<HookUseCallBack backToHooks={backToHooks} />}
        />
        <Route
          path="/moreUseCallback"
          element={<MoreUseCallback backToHooks={backToHooks} />}
        />
        <Route
          path="/hookUseEffect"
          element={<HookUseEffect backToHooks={backToHooks} />}
        />
        <Route
          path="/hookUseContext"
          element={<HookUseContext backToHooks={backToHooks} />}
        />
        <Route
          path="/nextExample"
          element={<SecondExample backToHooks={backToHooks} />}
        />
        <Route
          path="/hookUseRef"
          element={<HookUseRef backToHooks={backToHooks} />}
        />
        <Route path="/useRefStopWatch" element={<StopWatch />} />
        <Route path="/sideProjects" element={<SideProjects />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/pizzaHut" element={<ForFun />} />s
        <Route path="/random" element={<Random />} />
        <Route path="/weDidIt" element={<WeDidIt />} />
        <Route path="/productSearch" element={<ThinkingInReact />} />
        <Route path="/toDo" element={<ToDo />} />
        <Route path="/countDown" element={<Timer />} />
        <Route path="/webCard" element={<WebCard />} />
        <Route path="/gamePlan2" element={<GamePlan2 />} />
        <Route path="/gamePlan3" element={<GamePlan3 />} />s
        <Route path="/gamePlan4" element={<GamePlan4 />} />s
        <Route path="/gamePlan5" element={<GamePlan5 />} />
        <Route path="/gamePlan6" element={<GamePlan6 />} />
        <Route path="/gamePlan7" element={<GamePlan7 />} />
        <Route path="/gamePlan8" element={<GamePlan8 />} />
        <Route path="/gamePlan9" element={<GamePlan9 />} />
        <Route path="/gamePlan10" element={<GamePlan10 />} />
        <Route path="/gamePlan11" element={<GamePlan11 />} />
        <Route path="/gamePlan12" element={<GamePlan12 />} />
        <Route path="/gamePlan13" element={<GamePlan13 />} />
        <Route path="/gamePlan14" element={<GamePlan14 />} />
      </Routes>
    </>
  );
}

export default App;

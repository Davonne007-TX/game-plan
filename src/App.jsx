import "./App.css";
import { useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TopHeader from "./components/TopHeader";
import Home from "./components/Home";
import Hooks from "./components/hooks";
import HookOne from "./components/HookOne";
import HookTwo from "./components/HookTwo";
import MoreUseCallback from "./components/MoreUseCallback";
import Lists from "./components/more-examples/Lists";
import MoreUseState from "./components/MoreUseState";
import Toggle from "./components/more-examples/Toggle";
import GamePlan2 from "./components/GamePlan2";
import GamePlan1 from "./components/GamePlan1";
import GamePlan3 from "./components/GamePlan3";
import GamePlan4 from "./components/GamePlan4";
import GamePlan5 from "./components/GamePlan5";
import GamePlan6 from "./components/GamePlan6";
import GamePlan7 from "./components/GamePlan7";
import GamePlan8 from "./components/GamePlan8";
import ForFun from "./components/more-examples/ForFun";
import Random from "./components/more-examples/Random";

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
        <Route path="hooks" element={<Hooks />} />
        <Route
          path="/hookOne"
          element={<HookOne backToHooks={backToHooks} />}
        />
        <Route
          path="/hookTwo"
          element={<HookTwo backToHooks={backToHooks} />}
        />
        <Route path="/moreUseCallback" element={<MoreUseCallback />} />
        <Route path="/moreUseState" element={<MoreUseState />} />
        <Route path="/lists" element={<Lists />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/pizzaHut" element={<ForFun />} />
        <Route path="/random" element={<Random />} />
        <Route path="/gamePlan2" element={<GamePlan2 />} />
        <Route path="/gamePlan3" element={<GamePlan3 />} />
        <Route path="/gamePlan4" element={<GamePlan4 />} />
        <Route path="/gamePlan5" element={<GamePlan5 />} />
        <Route path="/gamePlan6" element={<GamePlan6 />} />
        <Route path="/gamePlan7" element={<GamePlan7 />} />
        <Route path="/gamePlan8" element={<GamePlan8 />} />
      </Routes>
    </>
  );
}

export default App;

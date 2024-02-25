import "./App.css";
import { useCallback } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import TopHeader from "./components/TopHeader";
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
      </Routes>
    </>
  );
}

export default App;

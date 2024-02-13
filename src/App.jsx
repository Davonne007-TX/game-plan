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

function App() {
  const navigate = useNavigate();
  //useCallback
  const backToHooks = useCallback(() => {
    navigate("/hooks");
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hooks from "./components/hooks";
import HookOne from "./components/HookOne";
import HookTwo from "./components/HookTwo";
import MoreUseCallback from "./components/MoreUseCallback";
import Lists from "./components/more-examples/Lists";
import MoreUseState from "./components/MoreUseState";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="/hookOne" element={<HookOne />} />
        <Route path="/hookTwo" element={<HookTwo />} />
        <Route path="/moreUseCallback" element={<MoreUseCallback />} />
        <Route path="/moreUseState" element={<MoreUseState />} />
        <Route path="/lists" element={<Lists />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HookOne from "./components/HookOne";
import HookTwo from "./components/HookTwo";
import MoreUseCallback from "./components/MoreUseCallback";
import Lists from "./components/Lists";
import MoreUseState from "./components/MoreUseState";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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

//other ideass
//look at other APIS
{
  /*         <li>Weather App</li>
            <li>More coding question</li>
            <li>E-Commerce</li>
            <li>Slack Clone</li> */
}

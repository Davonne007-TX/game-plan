import "./App.css";
import React from "react";
import { useCallback, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const TopHeader = lazy(() => import("./components/TopHeader"));
const GamePlan1 = lazy(() => import("./components/one/GamePlan1"));
const LetsLearnHooks = lazy(() => import("./components/hooks/LetsLearnHooks"));
const LetsDoThis = lazy(() => import("./components/hooks/LetsDoThis"));
const HookUseState = lazy(() =>
  import("./components/hooks/useState/HookUseState")
);
const MoreUseState = lazy(() =>
  import("./components/hooks/useState/MoreUseState")
);
const ThirdExampleUseState = lazy(() =>
  import("./components/hooks/useState/ThirdExampleUseState")
);
const WeatherPreparedness = lazy(() =>
  import("./components/hooks/useState/WeatherPreparedness")
);

const HookUseCallBack = lazy(() =>
  import("./components/hooks/HookUseCallBack")
);
const MoreUseCallback = lazy(() =>
  import("./components/hooks/MoreUseCallback")
);
const HookUseEffect = lazy(() => import("./components/hooks/HookUseEffect"));
const HookUseContext = lazy(() =>
  import("./components/hooks/useContext/HookUseContext")
);
const SecondExample = lazy(() =>
  import("./components/hooks/useContext/SecondExample")
);
const HookUseRef = lazy(() => import("./components/hooks/useRef/HookUseRef"));

const StopWatch = lazy(() => import("./components/hooks/useRef/StopWatch"));
const LearnRefs = lazy(() => import("./components/hooks/useRef/LearnRefs"));
const VideoPlayer = lazy(() => import("./components/hooks/useRef/VideoPlayer"));
const Challenge = lazy(() => import("./components/hooks/useRef/Challenge"));
const HookUseReducer = lazy(() =>
  import("./components/hooks/useReducer/HookUseReducer")
);
const Count = lazy(() => import("./components/hooks/useReducer/Count"));
const UseMemoFilterWings = lazy(() =>
  import("./components/hooks/useMemo/UseMemoFilterWings")
);
const Password = lazy(() => import("./components/hooks/useId/Password"));

const SideProjects = lazy(() =>
  import("./components/more-examples/SideProjects")
);
const Lists = lazy(() => import("./components/more-examples/Lists"));
const Toggle = lazy(() => import("./components/more-examples/Toggle"));
const ForFun = lazy(() => import("./components/more-examples/ForFun"));
const Random = lazy(() => import("./components/more-examples/Random"));
const WeDidIt = lazy(() => import("./components/more-examples/WeDidIt"));
const ThinkingInReact = lazy(() =>
  import("./components/more-examples/product-search/ThinkingInReact")
);
const ToDo = lazy(() => import("./components/more-examples/to-do-list/toDo"));
const Timer = lazy(() => import("./components/more-examples/countdown/Timer"));
const WebCard = lazy(() =>
  import("./components/more-examples/web-card/WebCard")
);
const MyCarousel = lazy(() =>
  import("./components/more-examples/carousel/MyCarousel")
);
const MangeDependenciesGranularly = lazy(() =>
  import(
    "./components/more-examples/stateManagement/MangeDependenciesGranularly"
  )
);
const Ceviche = React.lazy(() =>
  import("./components/more-examples/seafood-reciepe/Ceviche")
);
const GamePlan2 = lazy(() => import("./components/GamePlan2"));
const GamePlan3 = lazy(() => import("./components/GamePlan3"));
const GamePlan4 = lazy(() => import("./components/GamePlan4"));
const GamePlan5 = lazy(() => import("./components/five/GamePlan5"));
const GamePlan6 = lazy(() => import("./components/GamePlan6"));
const GamePlan7 = lazy(() => import("./components/GamePlan7"));
const GamePlan8 = lazy(() => import("./components/eight/GamePlan8"));
const GamePlan9 = lazy(() => import("./components/nine/GamePlan9"));
const GamePlan10 = lazy(() => import("./components/GamePlan10"));
const GamePlan11 = lazy(() => import("./components/eleven/GamePlan11"));
const GamePlan12 = lazy(() => import("./components/twelve/GamePlan12"));
const GamePlan13 = lazy(() => import("./components/thirteen/GamePlan13"));
const GamePlan14 = lazy(() => import("./components/fourteen/GamePlan14"));

function App() {
  const navigate = useNavigate();

  const backToHooks = useCallback(() => {
    navigate("/hooks");
  }, [navigate]);

  return (
    <>
      <TopHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gamePlan1" element={<GamePlan1 />} />
          <Route path="/letsLearnHooks" element={<LetsLearnHooks />} />
          <Route path="/hooks" element={<LetsDoThis />} />
          <Route
            path="/hookUseState"
            element={<HookUseState backToHooks={backToHooks} />}
          />
          <Route path="/moreUseState" element={<MoreUseState />} />
          <Route
            path="/thirdExampleUseState"
            element={<ThirdExampleUseState backToHooks={backToHooks} />}
          />
          <Route
            path="/weatherAware"
            element={<WeatherPreparedness backToHooks={backToHooks} />}
          />
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
          <Route
            path="/useRefStopWatch"
            element={<StopWatch backToHooks={backToHooks} />}
          />
          <Route
            path="/understandingUseRef"
            element={<LearnRefs backToHooks={backToHooks} />}
          />
          <Route
            path="/nextUseRefExample"
            element={<VideoPlayer backToHooks={backToHooks} />}
          />
          <Route
            path="/challenge"
            element={<Challenge backToHooks={backToHooks} />}
          />
          <Route
            path="/useReducerHook"
            element={<HookUseReducer backToHooks={backToHooks} />}
          />
          <Route
            path="useReducerCount"
            element={<Count backToHooks={backToHooks} />}
          />
          <Route
            path="/useMemoHookFilterWings"
            element={<UseMemoFilterWings backToHooks={backToHooks} />}
          />
          <Route
            path="/useId"
            element={<Password backToHooks={backToHooks} />}
          />

          <Route path="/sideProjects" element={<SideProjects />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/toggle" element={<Toggle />} />
          <Route path="/pizzaHut" element={<ForFun />} />
          <Route path="/random" element={<Random />} />
          <Route path="/weDidIt" element={<WeDidIt />} />
          <Route path="/productSearch" element={<ThinkingInReact />} />
          <Route path="/toDo" element={<ToDo />} />
          <Route path="/countDown" element={<Timer />} />
          <Route path="/webCard" element={<WebCard />} />
          <Route path="/myCarousel" element={<MyCarousel />} />
          <Route
            path="/reactBestPractices"
            element={<MangeDependenciesGranularly />}
          />
          <Route path="ceviche" element={<Ceviche />} />
          <Route path="/gamePlan2" element={<GamePlan2 />} />
          <Route path="/gamePlan3" element={<GamePlan3 />} />
          <Route path="/gamePlan4" element={<GamePlan4 />} />
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
      </Suspense>
    </>
  );
}

export default App;

import { useState } from "react";

export default function MangeDependenciesGranularly() {
  const [userProfile, setUserProfile] = useState({
    name: "Davonne",
    age: 31,
    lastLogin: new Date().toLocaleTimeString(),
  }); //state for user profile

  const [effectCount, setEffectCount] = useState(0);

  return (
    <section className="flex flex-col justify-center items-center text-center">
      <h1 className="text-red-600 font-lobster text-3xl md:text-4xl">
        Tutorial React Best Practices
        <span
          className="
        text-2xl text-white block "
        >
          Created By Youtube Content Creator Shruti Kapoor{" "}
        </span>
      </h1>

      <div className="max-w-6xl flex flex-col md:flex-row gap-2 md:gap-10 font-mono bg-white px-4 rounded-2xl mt-10 text-3xl ">
        <p>Name:{userProfile.name}</p>
        <p>Age:{userProfile.age}</p>
        <p>Last Login: {userProfile.lastLogin}</p>
      </div>
    </section>
  );
}

/* 

React Best Practices:

1. You may not need an external library 

 you can use --- for simple applications, SPA
   -useContext
   - useState
   - useReducer
 
   or when becomes bigger...
   - Redux
   - Zustand
  
2.Locate state close to the component that needs it
3.Manage dependencies granularly 

*/

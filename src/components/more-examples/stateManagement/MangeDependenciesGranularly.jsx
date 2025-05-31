import { useEffect, useState } from "react";
import Gif from "./Gif";
import Button from "../../Button";

export default function MangeDependenciesGranularly() {
  const [userProfile, setUserProfile] = useState({
    name: "Octavia Blake",
    age: 159,
    lastLogin: new Date().toLocaleTimeString(),
  });

  const [effectCount, setEffectCount] = useState(0);

  useEffect(() => {
    setEffectCount((prev) => prev + 1);
    console.log(
      "Less Granular Example: Effect re-runs! Count:",
      effectCount + 1,
      "Name:",
      userProfile.name,
      "Age:",
      userProfile.age
    );
  }, [userProfile.name, userProfile.age]); //see questions, dependency was on the entire object, thats why its re-running when update login is clicked. so only use the one you need

  const updateAge = () => {
    setUserProfile((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  const updateLastLogin = () => {
    setUserProfile((prev) => ({
      ...prev,
      lastLogin: new Date().toLocaleTimeString(),
    }));
  };

  return (
    <section className="flex flex-col justify-center items-center text-center">
      <h1 className="text-red-600 font-lobster text-3xl md:text-4xl">
        Lets Do a Tutorial: React Best Practices
        <span
          className="
        text-2xl text-white block mt-2 "
        >
          Tutorial Created By: Youtube Content Creator Shruti Kapoor{" "}
        </span>
      </h1>

      <div className="w-96 flex flex-col gap-4 font-pizza bg-white py-4 px-4 rounded-2xl mt-10 text-2xl mb-10 ">
        <Gif />
        <p>Name: {userProfile.name}</p>
        <p>Age: {userProfile.age}</p>
        <p>Last Login: {userProfile.lastLogin}</p>

        <div className="flex flex-col gap-8 py-4">
          <Button
            buttonText="Update Age"
            className="px-3 py-1 rounded-full text-lg md:text-2xl cursor-pointer bg-red-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700 hover:shadow-lg"
            onClick={updateAge}
          />

          <Button
            buttonText="Update Last Login "
            className="px-3 py-1 rounded-full text-lg md:text-2xl cursor-pointer bg-red-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700 hover:shadow-lg"
            onClick={updateLastLogin}
          />

          <p>Effect Count: {effectCount}</p>
        </div>
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
 
   or when becomes more complex..
   - Zustand
   - Jotai

   or even bigger... 
    - Redux
  
2.Locate state close to the component that needs it
3.Manage dependencies granularly 



Questions:

- On the dependency array, React lightbulb said I needed 
to include effectCount in the dependency in the userEffect?

*/

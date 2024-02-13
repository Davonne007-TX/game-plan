import React from "react";

export default function Toggle() {
  return (
    <>
      <section className="flex flex-col gap-10 h-screen justify-center items-center">
        <h1 className="text-4xl font-gloria text-blue-400">Toggle This</h1>
        <label className="inline-flex items-center cursor-pinter">
          <span className="relative">
            <input type="checkbox" className="hidden peer" />
            <div className="w-10 h-6 rounded-full shadow-inner dark:bg-slate-800 peer-checked:dark:bg-white"></div>
            <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto peer-checked:dark:bg-slate-800 bg-white"></div>
          </span>
        </label>
      </section>
    </>
  );
}

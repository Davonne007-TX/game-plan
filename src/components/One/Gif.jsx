import React from "react";
import { Link } from "react-router-dom";

export default function Gif() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <iframe
        src="https://giphy.com/embed/yoJC2K6rCzwNY2EngA"
        width="480"
        height="300"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/go-team-you-can-do-it-yoJC2K6rCzwNY2EngA"></a>
      </p>

      <Link
        to="/hooks"
        className="mt-20 mb-20 text-5xl bg-black font-lobster text-white p-4 rounded-full hover:text-blue-600"
      >
        Start Hooks
      </Link>
    </div>
  );
}

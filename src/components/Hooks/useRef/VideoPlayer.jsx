import { useState } from "react";
import { Play, Pause } from "lucide-react";

const src = "https://www.w3schools.com/html/movie.mp4";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); //state for isPlaying
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="font-lobster text-2xl md:text-4xl lg:text-4xl  text-purple-600 ">
        Pushing Through Understanding Refs
      </h1>
      <a
        href="https://youtu.be/hErOvJAJ0KY?si=gLsiw_gOoTlfFic2"
        className="text-white mt-2 font-lobster text-center underline block text-xl md:text-3xl"
      >
        Tutorial by: Content Creator Shruti Kapoor
      </a>

      <div className="max-w-sm md:max-w-3xl bg-purple-500 p-4 md:p-10 mt-20 rounded-3xl ">
        <video src={src} className="w-full rounded-3xl" onClick={""} />
      </div>
    </section>
  );
}

import { useState } from "react";

const dogPhotos = [
  {
    image: "/images/wolfPack.jpg",
    alt: "My 5 dogs, Pitbull Mix and Cane Corso",
    id: 2,
  },
  {
    image: "/images/packSleeping.jpg",
    alt: "Dogs are sleeping",
    id: 3,
  },
  {
    image: "/images/daisy.jpg",
    alt: "Little Daisy a puppy with a pink toy",
    id: 4,
  },
  {
    image: "/images/oldestToYoungest.jpg",
    alt: "Youngest dog Daisy with oldest dog Maryjane",
    id: 5,
  },
];

const Slide = ({ image }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={image.image}
        alt={image.alt}
        className="rounded-2xl shadow-lg w-1/2 h-auto"
      />
    </div>
  );
};

//controls
const ControlButtons = () => {
  const handleDecrement = () => {};

  const handleIncrement = () => {};

  return (
    <div>
      <button onClick={handleDecrement}>➡️</button>
      <button onClick={handleIncrement}>⬅️</button>
    </div>
  );
};

export default function MyCarousel() {
  const [index, setIndex] = useState(0);
  return (
    <section className="text-center flex flex-col  min-h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
      <div className="mt-10 flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold">
          Prepare for the Interview: React{" "}
        </h1>
        <p className="text-2xl font-thin">
          Implemented from Shruti Kapoor's Youtube
        </p>

        <section>
          <Slide image={dogPhotos[index]} />
        </section>
      </div>
    </section>
  );
}

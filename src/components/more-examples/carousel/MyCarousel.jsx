import { act, useState } from "react";

const dogPhotos = [
  {
    image: "/images/newPack.jpg",
    alt: "My 5 dogs, Pitbull Mix and Cane Corso",
    id: 1,
  },
  {
    image: "/images/chew.jpg",
    alt: "Dogs are sleeping",
    id: 2,
  },

  {
    image: "/images/wolfPack.jpg",
    alt: "All 5 dogs, Cane Corso and Pitbull Mix",
    id: 3,
  },
  {
    image: "/images/maryLexy.jpg",
    alt: "Mary and Lexy laying down on the grass",
    id: 4,
  },
  {
    image: "/images/eyes.jpg",
    alt: "Lexy, Daisy and Coco, Daisy with her eyes being funny",
    id: 5,
  },
  {
    image: "/images/crazyMary.jpg",
    alt: "Mary acting goofy laying down in the grass with Lexy",
    id: 6,
  },
  {
    image: "/images/packEyes.jpg",
    alt: "Doggies being funny with their eyes looking all the same direction",
    id: 7,
  },
  {
    image: "/images/og.png",
    alt: "Original pack of dogs, Roxy, Lexy and Mary",
    id: 8,
  },
];

const Slide = ({ image }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={image.image}
        alt={image.alt}
        className="rounded-2xl shadow-lg max-w-sm md:max-w-md"
      />
    </div>
  );
};

//controls
const ControlButtons = ({ activeIndex, setIndex, total }) => {
  const handleDecrement = () => {
    if (activeIndex === 0) {
      setIndex(total - 1);
      return;
    }
    setIndex(activeIndex - 1);
  };

  const handleIncrement = () => {
    if (activeIndex === total - 1) {
      setIndex(0);
      return;
    }
    setIndex(activeIndex + 1);
  };

  return (
    <div className="flex justify-center items-center gap-x-96  text-5xl -mt-36">
      <button onClick={handleDecrement} className="mr-4 md:mr-20">
        ⬅️
      </button>
      <button onClick={handleIncrement} className="ml-4 md:ml-20">
        ➡️
      </button>
    </div>
  );
};

//indicators
const Indicators = ({ dogPhotos, activeIndex, setIndex }) => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {dogPhotos.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`w-4 h-4 mt-14 rounded-full ${
            i === activeIndex ? "bg-pink-400" : "bg-white"
          }`}
        />
      ))}
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
          <ControlButtons
            activeIndex={index}
            setIndex={setIndex}
            total={dogPhotos.length}
          />
          <Indicators
            dogPhotos={dogPhotos}
            activeIndex={index}
            setIndex={setIndex}
          />
        </section>
      </div>
    </section>
  );
}

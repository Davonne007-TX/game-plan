export default function ReuseableButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-full p-2 hover:text-pink-400 font-lobster sm:text-md md:text-lg lg:text-2xl"
    >
      {label}
    </button>
  );
}

//creating a reuseable button that you can use on multiple components,
//without repeating your self, DRY

// bg-black p-2 text-white rounded-full hover:text-blue-600 font-serif"

export default function ReuseableButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-black p-2 text-white rounded-full hover:text-blue-600 font-serif"
    >
      {label}
    </button>
  );
}

//creating a reuseable button that you can use on multiple components,
//without repeating your self, DRY

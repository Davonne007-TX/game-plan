export default function ReuseableButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-white rounded-full p-1 hover:text-pink-400 font-lobster text-md  lg:text-2xl"
    >
      {label}
    </button>
  );
}

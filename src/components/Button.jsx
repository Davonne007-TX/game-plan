export default function Button({ buttonText, onClick }) {
  return (
    <button
      className="bg-pink-400 p-2 mt-4 md:mt-0 ml-4 rounded-full"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

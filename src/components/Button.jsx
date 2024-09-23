export default function Button({ buttonText, onClick, className }) {
  return (
    <button
      className={`bg-pink-400 p-2 rounded-full ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

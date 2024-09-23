export default function Button({ buttonText, onClick, className }) {
  return (
    <button className={`p-2 rounded ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
}

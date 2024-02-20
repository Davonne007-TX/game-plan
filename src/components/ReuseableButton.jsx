export default function ReuseableButton({ onClick, label, className }) {
  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
}

//creating a reuseable button that you can use on multiple components,
//without repeating your self, DRY

// bg-black p-2 text-white rounded-full hover:text-blue-600 font-serif"

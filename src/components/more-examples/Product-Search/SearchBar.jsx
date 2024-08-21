export default function SearchBar() {
  return (
    <form className="text-white">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded-full text-black outline-none"
      />
      <label>
        <input type="checkbox" className="ml-10" />
        Only show products that are in stock
      </label>
    </form>
  );
}

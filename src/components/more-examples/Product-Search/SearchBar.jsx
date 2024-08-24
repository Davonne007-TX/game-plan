export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="text-white">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        className="p-2 rounded-full text-black outline-none flex-time"
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <br />
      <label>
        <input
          type="checkbox"
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products that are in stock
      </label>
    </form>
  );
}

import { useState } from "react";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <main className="flex-time">
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={setFilterText}
          onInStickOnlyChange={setInStockOnly}
        />

        <ProductsTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </main>
    </>
  );
}

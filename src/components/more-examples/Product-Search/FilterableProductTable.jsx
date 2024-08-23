import { useState } from "react";
import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <>
      <main>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} />

        <ProductsTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </main>
    </>
  );
}

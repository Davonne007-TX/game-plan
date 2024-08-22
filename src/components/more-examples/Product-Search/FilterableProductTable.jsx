import ProductsTable from "./ProductsTable";
import SearchBar from "./SearchBar";

export default function FilterableProductTable({ products }) {
  return (
    <>
      <main>
        <SearchBar />
        <ProductsTable products={products} />
      </main>
    </>
  );
}

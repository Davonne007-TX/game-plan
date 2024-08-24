import FilterableProductTable from "./FilterableProductTable";

//an array of objects
const PRODUCTS = [
  { category: "Fruits", price: "$3.00", stocked: true, name: "Strawberries" },
  { category: "Fruits", price: "$5.00", stocked: true, name: "Pineapple" },
  { category: "Fruits", price: "$2.00", stocked: false, name: "Blueberries" },
  { category: "Vegetables", price: "$4.00", stocked: false, name: "Cucumbers" },
  { category: "Vegetables", price: "$5.00", stocked: true, name: "Squash" },
  { category: "Vegetables", price: "$2.00", stocked: false, name: "Carrots" },
];

export default function ThinkingInReact() {
  return (
    <>
      <main className="flex-time text-white">
        <h1 className="text-purple-300 font-bold text-2xl text-center">
          Thinking in React
        </h1>
        <section className="flex-time mt-20">
          <h2 className="font-bold mb-4 text-2xl text-purple-300 ">
            Fruits and Veggies Inventory
          </h2>
          <FilterableProductTable products={PRODUCTS} />
        </section>
      </main>
    </>
  );
}

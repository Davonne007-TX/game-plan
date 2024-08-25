import FilterableProductTable from "./FilterableProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$3.00", stocked: true, name: "Cherries" },
  { category: "Fruits", price: "$5.00", stocked: true, name: "Oranges" },
  { category: "Fruits", price: "$2.00", stocked: false, name: "Bananas" },
  { category: "Fruits", price: "3.00", stocked: true, name: "Apples" },
  { category: "Vegetables", price: "$4.00", stocked: true, name: "Corn" },
  { category: "Vegetables", price: "$4.00", stocked: false, name: "Tomato" },
  { category: "Vegetables", price: "$5.00", stocked: true, name: "Squash" },
  { category: "Vegetables", price: "$2.00", stocked: false, name: "Carrots" },
];

export default function ThinkingInReact() {
  return (
    <>
      <main className="flex-time text-white font-mono text-xl">
        <h1 className="text-purple-300 font-bold text-3xl text-center">
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

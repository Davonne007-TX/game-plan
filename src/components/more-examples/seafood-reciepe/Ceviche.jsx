function Ingredigent({ name, inStock }) {
  return <li>{name}</li>;
}

export default function Ceviche() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-96 bg-white rounded-3xl p-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold font-lobster text-blue-500">
          Ceviche Ingredigent List
        </h2>

        <ul className="flex flex-col mr-auto gap-10 text-2xl mt-10 font-thin">
          <Ingredigent inStock={true} name="Shrimp" />
          <Ingredigent niStock={true} name="Red Onion" />
          <Ingredigent inStock={false} name="Cucumbers" />
          <Ingredigent inStock={true} name="Limes" />
          <Ingredigent inStock={false} name="Tomatoes" />
        </ul>
      </div>
    </section>
  );
}

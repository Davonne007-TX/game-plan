import Image from "../../Image";

function Ingredigent({ name, inStock }) {
  let ingredigentItem = name;
  if (inStock) {
    ingredigentItem = <del>{name + "✅"}</del>;
  }
  return <li>{ingredigentItem}</li>;
}

export default function Ceviche() {
  return (
    <section className="flex flex-col justify-center items-center">
      <div className="max-w-4xl my-10 bg-white rounded-3xl p-4 flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-4xl font-bold font-lobster text-blue-500">
          Aguachile Ingredigent Check List
        </h2>
        <p className="text-xl">✅ means in stock</p>

        <ul className="flex flex-col mr-auto gap-10 text-2xl mt-10 font-thin">
          <Ingredigent inStock={true} name="Shrimp 🍤" />
          <Ingredigent niStock={false} name="Red Onion 🟥 🧅" />
          <Ingredigent inStock={false} name="Cucumbers 🥒 " />
          <Ingredigent inStock={true} name="Limes 🍋‍🟩" />
          <Ingredigent inStock={false} name="Serranno Peppers 🔥" />
        </ul>

        <div className="mt-10 max-w-sm">
          <Image src="./images/ceviche.png" />
        </div>
      </div>
    </section>
  );
}

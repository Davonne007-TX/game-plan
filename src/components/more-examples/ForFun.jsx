import ReuseableButton from "../ReuseableButton";
import Image from "../Image";

export default function ForFun() {
  return (
    <>
      <main className="bg-pizzaHut flex flex-col  gap-10 justify-center items-center h-screen">
        <h1 className="text-6xl md:text-8xl lg:text-8xl font-pizza">
          Pizza Hut
        </h1>
        <section className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Your E-mail"
            className="w-60 md:w-96 lg:w-96 p-2 rounded-lg font-serif outline-none"
          />
          <ReuseableButton
            label="Get Deals"
            className="bg-black rounded text-white p-2 font-pizza hover:text-pizzaHut"
          />
        </section>

        <Image src="/images/pizza.jpg" />

        <section className="flex gap-20">
          <ReuseableButton
            label="Menu"
            className="bg-white text-black rounded-full p-2 w-64 hover:text-pizzaHut font-pizza text-2xl"
          />
          <ReuseableButton
            label="Order Now"
            className="bg-white text-black rounded-full p-2 w-64 hover:text-pizzaHut font-pizza text-2xl"
          />
        </section>
      </main>
    </>
  );
}

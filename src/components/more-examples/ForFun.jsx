import ReuseableButton from "../ReuseableButton";
import Image from "../Image";

export default function ForFun() {
  return (
    <>
      <section className="bg-pizzaHut flex flex-col  gap-10 justify-center items-center h-screen">
        <h1 className="text-8xl font-pizza">Pizza Hut</h1>
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter Your E-mail"
            className="w-64 p-2 rounded-lg font-serif outline-none"
          />
          <ReuseableButton
            label="Subscribe"
            className="bg-black rounded text-white p-2 font-pizza hover:text-pizzaHut"
          />
        </div>

        <Image src="/images/pizza.jpg" />

        <ReuseableButton
          label="Order Now"
          className="bg-white text-black rounded-full p-2 w-64 hover:text-pizzaHut font-pizza text-2xl"
        />
      </section>
    </>
  );
}

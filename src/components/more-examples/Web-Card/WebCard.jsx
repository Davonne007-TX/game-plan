import Name from "./Name";
import Helpful from "./Helpful";
import HireMe from "./HireMe";

export default function WebCard() {
  const thisIsMe = "./images/me.jpeg";
  return (
    <main className="flex flex-col justify-center items-center mt-20 font-serif">
      <h2 className="text-white text-3xl font-bold">UI Web Card </h2>
      <p className="text-white text-sm md:text-xl">
        From post by @janm_ux Horizontal UI Web Card
      </p>
      <section className="bg-white w-full mb-10 max-w-sm md:max-w-5xl p-8 rounded-lg shadow-md mt-10 md:mt-20">
        <section className="flex flex-col md:flex-row gap-8">
          <img src={thisIsMe} className="max-w-sm" />
          <section className="flex flex-col gap-8">
            <Name name="Davonne V." />
            <Helpful />
            <HireMe />
          </section>
        </section>
      </section>
    </main>
  );
}

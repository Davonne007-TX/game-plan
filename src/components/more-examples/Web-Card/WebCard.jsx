import Name from "./Name";
import Helpful from "./Helpful";
import HireMe from "./HireMe";

export default function WebCard() {
  return (
    <main className="flex flex-col justify-center items-center mt-20 font-serif">
      <h2 className="text-white text-3xl font-bold">UI Web Card </h2>
      <p className="text-white text-sm md:text-xl">
        From post by @janm_ux Horizontal UI Web Card
      </p>
      <section className="bg-white w-full max-w-sm md:max-w-2xl p-8 rounded-lg shadow-md mt-20">
        <section className="flex flex-col gap-8">
          <Name name="Davonne V." />
          <Helpful />
          <HireMe />
        </section>
      </section>
    </main>
  );
}

//note to self, make common styles with @apply

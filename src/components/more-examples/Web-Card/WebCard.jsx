import Name from "./Name";
import Helpful from "./Helpful";
import HireMe from "./HireMe";

export default function WebCard() {
  return (
    <main className="flex flex-col justify-center items-center mt-20 font-serif">
      <section className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md">
        <section className="flex flex-col gap-8">
          <Name name="Davonne V." title={"Frontend Web Developer"} />
          <Helpful />
          <HireMe />
        </section>
      </section>
    </main>
  );
}

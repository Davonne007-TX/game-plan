import Name from "./Name";
import Helpful from "./Helpful";

export default function WebCard() {
  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <section className="bg-white w-full max-w-2xl p-8 rounded-lg shadow-md">
        <section className="flex flex-col gap-8">
          <Name name="Davonne Vigil" title={"Frontend Web Developer"} />
          <Helpful />
        </section>
      </section>
    </main>
  );
}

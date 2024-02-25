import NavBar from "./NavBar";
import NikeShoe from "./NikeShoe";

export default function Random() {
  return (
    <>
      <section section className="bg-white h-screen p-40">
        <div className="ml-40">
          <div className="flex flex-col lg:flex-row">
            <h1 className="text-7xl font-anton">Nike</h1>
            <img
              src="/images/nike.png"
              className="w-10 h-10 lg:w-30 lg:h-20 ml-10"
            />
            <NavBar />
          </div>
        </div>

        <NikeShoe />
      </section>
    </>
  );
}

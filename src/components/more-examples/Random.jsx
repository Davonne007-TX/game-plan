import NavBar from "./NavBar";
import NikeShoe from "./NikeShoe";

export default function Random() {
  return (
    <>
      <main section className="bg-white min-h-screen ">
        <header className="flex flex-col lg:flex-row p-10">
          <h1 className="text-7xl font-anton">Nikey</h1>
          <img
            src="/images/nike.png"
            className="w-10 h-10 lg:w-30 lg:h-20 ml-10"
          />
          <NavBar />
        </header>

        <NikeShoe />
      </main>
    </>
  );
}

import GoHome from "./GoHome";

export default function Header({ children }) {
  return (
    <>
      <header className="text-center w-full bg-black text-white font-lobster text-4xl p-4 ">
        <div className="flex flex-start">
          <GoHome />
        </div>
        <h1>{children}</h1>
      </header>
    </>
  );
}

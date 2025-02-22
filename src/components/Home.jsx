export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="text-white font-sixty mt-20  text-center text-xs md:text-sm lg:text-lg">
        A Web Dev Journey Learning React and growing as a Dev
      </h1>
      <iframe
        src="https://giphy.com/embed/RbDKaczqWovIugyJmW"
        width="700"
        height="700"
        frameBorder="0"
        className="giphy-embed -mt-28 "
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/looneytunesworldofmayhem-world-of-mayhem-looney-tunes-ltwom-RbDKaczqWovIugyJmW">
          via GIPHY
        </a>
      </p>
    </main>
  );
}

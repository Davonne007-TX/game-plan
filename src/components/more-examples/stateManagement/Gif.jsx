export default function Gif() {
  return (
    <section>
      <iframe
        src="https://giphy.com/embed/ecZMap0OPw4Hm"
        width="480"
        height="300"
        frameBorder="0"
        className="giphy-embed w-72 md:w-92 mx-auto"
        allowFullScreen
      ></iframe>
      <p>
        <a
          href="https://giphy.com/gifs/the-100-ecZMap0OPw4Hm"
          className="text-xs"
        >
          via GIPHY
        </a>
      </p>
    </section>
  );
}

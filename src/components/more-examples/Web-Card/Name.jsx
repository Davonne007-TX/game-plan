export default function Name({ name }) {
  return (
    <section className="flex flex-col font-bold">
      <h2 className="text-3xl font-lobster">{name}</h2>
      <p>
        Freelance Frontend Dev at{" "}
        <a href="" className="underline text-purple-400">
          DJVD Web Services
        </a>
      </p>
    </section>
  );
}

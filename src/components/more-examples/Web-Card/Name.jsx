export default function Name({ name, title }) {
  return (
    <section className="flex flex-col font-bold">
      <h2 className="text-2xl">{name}</h2>
      <p>
        Frontend Web Developer at{" "}
        <a href="" className="underline text-purple-600">
          DJVD Web Services
        </a>
      </p>
    </section>
  );
}

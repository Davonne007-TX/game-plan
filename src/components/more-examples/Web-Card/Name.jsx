export default function Name({ name, title }) {
  return (
    <section className="flex flex-col font-bold">
      <h2 className="text-2xl">{name}</h2>
      <p>{title}</p>
    </section>
  );
}

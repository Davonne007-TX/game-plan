export default function Clock({ color, time }) {
  return (
    <h1
      style={{ color: color }}
      className="font-lobster text-6xl md:text-7xl lg:text-8xl"
    >
      {time}
    </h1>
  );
}

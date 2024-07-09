export default function Image({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="max-w-sm md:max-w-lg lg:max-w-lg rounded-3xl"
    />
  );
}

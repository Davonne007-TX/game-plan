export default function Image({ src, alt }) {
  return (
    <img src={src} alt={alt} className="max-w-xs  md:max-w-sm rounded-2xl" />
  );
}

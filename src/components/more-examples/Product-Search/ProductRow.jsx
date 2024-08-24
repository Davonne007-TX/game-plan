export default function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span className="text-red-400">{product.name}</span>
  );

  return (
    <tr className="text-white">
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

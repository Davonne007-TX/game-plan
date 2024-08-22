export default function ProductCategoryRow({ category }) {
  return (
    <tr className="text-white">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

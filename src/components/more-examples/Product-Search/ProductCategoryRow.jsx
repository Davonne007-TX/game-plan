export default function ProductCategoryRow({ category }) {
  return (
    <tr className="text-green-600">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

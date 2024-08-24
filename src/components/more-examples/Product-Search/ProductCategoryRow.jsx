export default function ProductCategoryRow({ category }) {
  return (
    <tr className="text-purple-300 ">
      <th colSpan="2">{category}</th>
    </tr>
  );
}

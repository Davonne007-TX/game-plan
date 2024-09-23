export default function ItemToDo({ toDo, toDoAccomplished, deleteToDo }) {
  return (
    <>
      <li className={`text-white ${toDo.completed ? "completed" : " "}`}>
        <span onClick={() => toDoAccomplished(toDo.id)}>{toDo.text}</span>
        <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
      </li>
    </>
  );
}

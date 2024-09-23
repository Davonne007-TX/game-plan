import Button from "../../Button";

export default function ItemToDo({ toDo, toDoAccomplished, deleteToDo }) {
  return (
    <>
      <section className="mt-10 ml-4">
        <li
          className={`text-white flex gap-4 text-2xl ${
            toDo.completed ? "completed" : " "
          }`}
        >
          <span onClick={() => toDoAccomplished(toDo.id)}>{toDo.text}</span>
          <Button
            onClick={() => deleteToDo(toDo.id)}
            buttonText={"Delete"}
            className="text-lg mb-4"
          />
        </li>
      </section>
    </>
  );
}

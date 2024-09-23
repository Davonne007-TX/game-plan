import Button from "../../Button";

export default function ItemToDo({ toDo, toDoAccomplished, deleteToDo }) {
  return (
    <>
      <section className="mt-10">
        <li
          className={`text-white text-2xl flex justify-between ${
            toDo.completed ? "completed" : " "
          }`}
        >
          <span onClick={() => toDoAccomplished(toDo.id)}>{toDo.text}</span>
          <Button
            onClick={() => deleteToDo(toDo.id)}
            buttonText={"Delete"}
            className="text-lg mb-4 bg-white text-pink-400"
          />
        </li>
      </section>
    </>
  );
}

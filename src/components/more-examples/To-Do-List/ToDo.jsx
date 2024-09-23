import { useState } from "react";
import Button from "../../Button";
import ItemToDo from "./ItemToDo";

export default function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  //add to, to do list
  const addToDo = () => {
    if (toDo.trim() === "") return;
    const newToDo = { id: Date.now(), text: toDo, completed: false };
    setToDoList([...toDoList, newToDo]);
    setToDo("");
  };

  //when the to do is complete
  const toDoAccomplished = (id) => {
    setToDoList(
      toDoList.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : true
      )
    );
  };

  //delete to do item
  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((toDo) => toDo.id !== id));
  };

  return (
    <main className="flex-time text-white gap-2 font-serif text-center">
      <h1 className=" font-bold text-2xl md:text-4xl lg:text-4xl font-gloria">
        To-Do-List
      </h1>
      <p className="text-lg">
        Brought to you by Danny Thompson and @ThisDotMedia
      </p>

      <section className="mt-20 max-w-5xl text-xl">
        <input
          className="rounded-full w-80 md:w-96 p-4 text-black outline-none border-4 border-pink-400"
          placeholder="Add items to, to do list..."
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <Button
          buttonText={"Add To Do"}
          onClick={addToDo}
          className="mt-4 md:mt-0 ml-4 bg-pink-400"
        />

        <ul
          className={`text-white p-2 mt-10 rounded-lg ${
            toDoList.length === 0 ? "" : "bg-pink-400"
          }`}
        >
          {toDoList.map((toDo) => (
            <ItemToDo
              key={toDo.id}
              toDo={toDo}
              toDoAccomplished={toDoAccomplished}
              deleteToDo={deleteToDo}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

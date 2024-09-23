import { useState } from "react";
import ItemToDo from "./ItemToDo";

export default function ToDo() {
  const [toDo, setToDo] = useState();
  const [toDoList, setToDoList] = useState([]);

  //add to, to do list
  const addToDo = () => {
    if (toDo.trim() === "") return;
    const newToDo = { id: Date.now(), text: toDo, completed: false };
    setToDoList([...toDoList, newToDo]);
    setToDo("");
  };

  //when the to do is complete
  const toDoAccomplihsed = (id) => {
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
    <main className="flex-time text-white gap-2 font-serif">
      <h1 className=" font-bold text-2xl md:text-3xl lg:text-4x font-gloria">
        To-Do-List
      </h1>
      <p>Brought to you by Danny Thompson and ThisDotLabs</p>

      <section className="mt-20 bg-pink max-w-5xl">
        <input
          className="rounded-full w-96 p-3 text-black outline-none border-4 border-pink-400"
          placeholder="Add To Do"
        />
      </section>
    </main>
  );
}

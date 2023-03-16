import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import Todo from "./Todo";
import { db } from "./services/Firebase";
import { addDoc, collection } from "firebase/firestore";

//tailwind css
// 100vh -> h-screen
// 100vw -> w-screen
const style = {
  bg: `p-4 h-screen w-screen bg-gradient-to-br from-[#919BFF] to-[#133A94]`,
  container: `bg-zinc-50 max-w-[600px] m-auto w-full rounded-md shadow-lg p-4`,
  heading: `text-3xl font-bold text-center text-gray-700 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full`,
  button: `border p-4 ml-2 bg-indigo-500 text-gray-100 text-xl cursor-pointer`,
};

function App() {
  // Variables
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const taskCollectionRef = collection(db, "tasks");

  // CRUD - Create, Read, Update and Delete operations

  // Create task
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === "") {
      alert("Please enter a valid task name");
      return;
    }
    // addDoc
    await addDoc(taskCollectionRef, {
      task: input,
      completed: false
    })

    setInput("");

  };

  // Read tasks

  // Update tasks

  // Delete tasks

  return (
    <div className={style.bg}>
      <div className={style.container}>
        {/* Todo App Container */}
        <h3 className={style.heading}>Todo App with Firebase</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            className={style.input}
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Add a task"
          />
          <button className={style.button}>
            <BsPlus />
          </button>
        </form>
        {/* Todos Container */}
        <ul>
          {/* Tasks here */}
          {todos.map((task, index) => (
            <Todo key={index} name={task} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

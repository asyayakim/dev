import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Header({data: {addTask}}) {
  const [newTaskName, setNewTaskName] = useState("");
  function HandleAddTask(e) {  
    e.preventDefault();

    const newTask = {
        name: newTaskName,
      timeStamp: new Date(),
      completed: false,
      id: uuidv4(),
    };

    addTask(newTask);
  }
  
  return (
    <div>
      <h1>Todo list</h1>
      <form onSubmit={HandleAddTask}>
        <input type="text" onChange={e => setNewTaskName(e.target.value)} placeholder="Add new task" />
        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
}

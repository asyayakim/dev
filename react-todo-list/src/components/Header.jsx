import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Header({data: {addTask, setSortOption, sortOption}}) {
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
      <select 
      value={sortOption.sortBy} 
      onChange={(e) => setSortOption(prev => ({...prev, sortBy: e.target.value}))
      }>
        <option value="newest">Newest to Oldest</option>
        <option value="oldest">Oldest to Newest</option>
        <option value="a-to-z">A to Z</option>
        <option value="z-to-a">Z to A</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <label htmlFor="hideorshow" >
        Hide Completed Tasks: 
        <input type="checkbox" id="hideorshow" checked={sortOption.hideCompleted}
        onChange={e => setSortOption(prev=> ({...prev, hideCompleted: e.target.checked,}))}/>
      </label>
    </div>
  );
}

import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [todoData, setTodoData] = useState(() => {
    const savedData = localStorage.getItem("todoData")
    return savedData ? JSON.parse(savedData).map(task => ({
      ...task, 
      timeStamp: new Date(task.timeStamp)
    })) : []
  });

  const [sortOption, setSortOption] = useState(() => {
  const savedSort = localStorage.getItem("sortOption")
  return JSON.parse(savedSort) || {sortBy: "newest", hideCompleted: false };
});
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todoData))
    localStorage.setItem("sortOption", JSON.stringify(sortOption))
  }, [todoData, sortOption ])

  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }
  function deleteTask(id) {
    setTodoData((prev) => prev.filter(task => task.id !== id));
  }
  function editTask(id, updatedTask) {
    setTodoData(prev => 
      prev.map(task => (task.id === id ?
        {...task, ...updatedTask } : task))
    );

  }

  const sortedData = [...todoData]
  .filter(task=> !task.completed || !sortOption.hideCompleted)
  .sort((a, b) => {
    switch(sortOption.sortBy) {
      case "newest":
        return b.timeStamp - a.timeStamp;
      case "oldest":
        return a.timeStamp - b.timeStamp;
      case "a-to-z":
        return a.name.localeCompare(b.name);
      case "z-to-a":
        return b.name.localeCompare(a.name);
    }
  }
  );

  return (
    <>
      <Header data={{ addTask, sortOption, setSortOption }} />
      <TodoList data={{ sortedData, editTask, deleteTask }} />
    </>
  );
}

export default App;

import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
function App() {
  const [todoData, setTodoData] = useState([]);
  function addTask(newTask) {
    setTodoData((prev) => [...prev, newTask]);
  }
  function deleteTask(id) {
    setTodoData((prev) => prev.filter(task => task.id !== id));
  }
  function editTask(id, updatedTask) {
    setTodoData((prev) => prev.map(task => {
      if(task.id === id) {
        task.name = updatedTask;
      }
      return task;
    }));
  }

  return (
    <>
      <Header data={{ addTask }} />
      <TodoList data={{ todoData, editTask, deleteTask }} />
    </>
  );
}

export default App;

import Header from "./components/Header.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";
function App() {
  const [todoData, setTodoData] = useState([]);
function addTask(newTask) {
  setTodoData((prev) => [...prev, newTask]);
}
  return (
    <>
      <Header data={{addTask}}/>
      <TodoList data= {{todoData}}/>
    </>
  );
}

export default App;

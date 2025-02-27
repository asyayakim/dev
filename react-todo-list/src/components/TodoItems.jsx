import React from "react";
import { useState } from "react";


export default function TodoItems({data: {task, deleteTask, editTask}}) {
  const[isReadOnly, setIsReadOnly] = useState(true);
  const[updatedTaskName, setUpdatedTaskName] = useState(task.name);
  
  function changeCompleted () {
    task.completed = !task.completed;
  }
  
  const formattedTime = task.timeStamp.toLocaleString("en-GB");
 function handleEditTask() {
    setIsReadOnly(!isReadOnly);
    if(!isReadOnly) {
      editTask(task.id, {...task, name: setUpdatedTaskName});
    }
    setIsReadOnly(prev => !prev);
 }

  return (
    <li>
      <input

        type="checkbox"
        onChange={changeCompleted}
        checked={task.completed}
      />
      <p>{formattedTime}</p>
      <input type="text" value={task.name} readOnly={isReadOnly} onChange={()=> setUpdatedTaskName(editTask.target.value)}/>
      <button onClick={handleEditTask}>{}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

import React from "react";
import { useState } from "react";


export default function TodoItems({data: {task, deleteTask, editTask}}) {
  const[isReadOnly, setIsReadOnly] = useState(true);
  const[updatedTaskName, setUpdatedTaskName] = useState(task.name);
  
  function changeCompleted () {
    editTask(task.id, {...task, completed: !task.completed});
  }
  
  const formattedTime = task.timeStamp.toLocaleString("en-GB");
 function handleEditTask() {
    if(!isReadOnly) {
      editTask(task.id, {...task, name: updatedTaskName});
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
      <input type="text"
       value={updatedTaskName} 
       readOnly={isReadOnly} 
       onChange={e=> setUpdatedTaskName(e.target.value)}/>
      <button onClick={handleEditTask}>{isReadOnly ? "Edit" : "Save"}</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

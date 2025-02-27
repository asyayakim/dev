import React from 'react';
import TodoItems from './TodoItems.jsx';

export default function TodoList({data:{todoData, deleteTask, editTask}}) {
   if(todoData.length === 0) {
       return <h3>No tasks. Add task to begin.</h3>;  
    }
    return (
        <ul>
            {todoData.map(task => {
              return  <TodoItems key={task.id} data={{task, deleteTask, editTask}}/>
})}
        </ul>
    );
    }
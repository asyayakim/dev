import React from 'react';
import TodoItems from './TodoItems.jsx';

export default function TodoList({data:{sortedData, deleteTask, editTask}}) {
   if (sortedData.length === 0) {
     return <h3>No tasks. Add task to begin.</h3>;
   }
    return (
        <ul>
            {sortedData.map(task => {
              return  <TodoItems key={task.id} data={{task, deleteTask, editTask}}/>
})}
        </ul>
    );
    }
export default function TodoItems({data: {task}}) {
  function changeCompleted () {
    task.completed = !task.completed;
  }const formattedTime = task.timeStamp.toLocaleString("en-GB");
  return (
   <li>
    <input type="checkbox" onChange={changeCompleted} checked={task.completed} />
    <p>{formattedTime}</p>
    <input type="text" value={task.name} />
   </li>
  );
}

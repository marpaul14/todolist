export default function Task({
  handleCompleteTask,
  handleDeleteTask,
  id,
  taskName,
  completed,
}) {
  return (
    <div className="list">
      <h2>{taskName}</h2>
      <div>
        <button onClick={() => handleCompleteTask(id)}>
          {completed ? "Completed" : "Complete Task"}
        </button>
        <button className="delete-btn" onClick={() => handleDeleteTask(id)}>
          ✖
        </button>
      </div>
    </div>
  );
}

export default function BodyToDo({ tasks, onComplete, onDelete }) {
  return (
    <div className="container bg-secondary p-3 rounded-3">
      <p className="text-white">Let's get some work DONE</p>
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "bg-success text-white" : ""
            }`}
          >
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text}
            </span>
            <div>
              <button
                className="btn btn-sm btn-success me-2"
                onClick={() => onComplete(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

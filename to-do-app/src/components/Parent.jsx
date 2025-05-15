import { useState } from "react";
import HeadToDo from "./HeadToDo.jsx";
import BodyToDo from "./BodyToDo.jsx";
export default function Parent() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }
  };
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container col-lg-5 col-sm-12">
      <HeadToDo onAdd={addTask} />

      <BodyToDo
        tasks={tasks}
        onComplete={toggleComplete}
        onDelete={deleteTask}
      />
    </div>
  );
}

import { useState } from "react";
export default function HeadToDo({ onAdd }) {
  const [input, setInput] = useState("");
  const handleAdd = () => {
    onAdd(input);
    setInput("");
  };

  return (
    <div className="container bg-primary p-3 rounded-3 mb-1">
      <h1 className="text-white">To Do List</h1>
      <div className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-light" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

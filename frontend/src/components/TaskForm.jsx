import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title, dueDate: new Date().toISOString(), isComplete: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Add a task..."
        className="flex-1 p-2 border rounded bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
        Add
      </button>
    </form>
  );
};

export default TaskForm;

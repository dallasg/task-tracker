import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const API_BASE_URL = "http://localhost:5069/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(API_BASE_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  const handleToggle = async (task) => {
    await fetch(`${API_BASE_URL}/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, isComplete: !task.isComplete }),
    });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    fetchTasks();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Task Tracker</h1>
        <TaskForm onAdd={handleAdd} />
        <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;

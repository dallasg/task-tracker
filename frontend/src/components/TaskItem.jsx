import {
    TrashIcon,
    CheckCircleIcon,
    XCircleIcon,
  } from "@heroicons/react/24/solid";

  const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
      <li className="relative flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded shadow group">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onToggle(task)}
            className="relative group"
          >
            {task.isComplete ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 hover:scale-110 transition-transform duration-150" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-gray-400 hover:text-blue-500 hover:scale-110 transition-transform duration-150" />
            )}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs rounded px-2 py-1 pointer-events-none z-10">
              {task.isComplete ? "Mark Incomplete" : "Mark Complete"}
            </span>
          </button>

          <div className="flex flex-col">
            <span
              className={`text-lg ${
                task.isComplete
                  ? "line-through text-gray-400 dark:text-gray-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {task.title}
            </span>
            {task.dueDate && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>

        <button onClick={() => onDelete(task.id)} className="relative group">
          <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-transform duration-150 hover:scale-110" />
          <span className="absolute -top-8 right-0 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-xs rounded px-2 py-1 pointer-events-none z-10">
            Delete
          </span>
        </button>
      </li>
    );
  };

  export default TaskItem;

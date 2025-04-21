import {
    TrashIcon,
    CheckCircleIcon,
    XCircleIcon,
  } from "@heroicons/react/24/solid";

  const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
      <li className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded shadow">
        <div className="flex items-center gap-3">
          <button onClick={() => onToggle(task)}>
            {task.isComplete ? (
              <CheckCircleIcon className="h-6 w-6 text-green-500 hover:text-green-600" />
            ) : (
              <XCircleIcon className="h-6 w-6 text-gray-400 hover:text-blue-500" />
            )}
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
        <button onClick={() => onDelete(task.id)}>
          <TrashIcon className="h-5 w-5 text-red-500 hover:text-red-600 dark:hover:text-red-400" />
        </button>
      </li>
    );
  };

  export default TaskItem;

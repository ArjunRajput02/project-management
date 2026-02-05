import NewTask from "./NewTask";

export default function Task({ onAddTask, onDeleteTask, tasks }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>

      <NewTask onAddTask={onAddTask} />

      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project Does Not have Any task
        </p>
      )}

      <ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-stone-200 px-3 py-1 rounded"
          >
            <span>{task.text}</span>
            <button
              className="text-sm font-medium text-stone-900 hover:text-red-600"
              onClick={() => onDeleteTask(task.id)}
            >
              Clear
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

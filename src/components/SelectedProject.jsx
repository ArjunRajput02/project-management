import Task from "./Task";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 bg-stone-100 rounded-lg shadow-sm p-6">
      <header className="pb-5 mb-6 border-b border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-semibold text-stone-700">
            {project.title}
          </h2>
          <button
            className="text-sm font-medium text-stone-500 hover:text-red-600"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>

        <p className="mt-1 mb-4 text-sm text-stone-400">
          Due {formattedDate}
        </p>

        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Task
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
    </div>
  );
}

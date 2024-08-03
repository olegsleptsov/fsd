import { TaskItem } from "./task-item";
import { useTasks } from "../model/use-tasks";
import { CreateTaskForm } from "./create-task-from";
import { TasksListType } from "../types.ts";
import { ToggleTaskCheckbox } from "./ToggleTaskCheckbox.tsx";
import { DeleteTaskButton } from "./DeleteTaskButton.tsx";

export function TasksList({taskStorage, renderOwnerSelect}: TasksListType) {
  const { addTask, removeTask, tasks, toggleCheckTask, updateOwner } =
    useTasks(taskStorage);
  
  return (
    <div>
      <CreateTaskForm onCreate={addTask} />
      {tasks?.map((task) => (
        <TaskItem
          key={task.id}
          title={task.title}
          actions={
            <>
              <ToggleTaskCheckbox isDone={task.done} onToggle={() => toggleCheckTask(task.id)} />
              <DeleteTaskButton onClick={() => removeTask(task.id)} />
              {renderOwnerSelect({
                ownerId: task.ownerId,
                onChangeOwner: (ownerId) => updateOwner(task.id, ownerId)
              })}
            </>
          }
        />
      ))}
    </div>
  );
}

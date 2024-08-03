import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Task, TaskStorage} from "../types.ts";

export function useTasks(taskStorage: TaskStorage) {
  const [tasks, setTasks] = useState<Task[]>(() =>
    taskStorage.getTasks()
  );

  const addTask = (value: string) => {
    setTasks((tasks) => [
      { id: nanoid(), title: value, done: false },
      ...tasks,
    ]);
  };

  const removeTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  const toggleCheckTask = (id: string) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const updateOwner = (id: string, ownerId: string) => {
    setTasks((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, ownerId } : task))
    );
  };

  useEffect(() => {
    taskStorage.saveTasks(tasks);
  }, [tasks]);

  return {
    tasks,
    addTask,
    removeTask,
    toggleCheckTask,
    updateOwner,
  };
}

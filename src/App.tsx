import {getFromStorage, saveToStorage} from "./lib/storage.ts";
import {STORAGE_KEY, Task, TasksList} from "./tasks";
import { UserSelect } from "./user";

const taskStorage = {
  getTasks: () => getFromStorage<Task[]>(STORAGE_KEY, []),
  saveTasks: (tasks: Task[]) => saveToStorage(STORAGE_KEY, tasks)
}

export function App() {
  return (
    <>
      <TasksList
        taskStorage={taskStorage}
        renderOwnerSelect={({ownerId, onChangeOwner}) =>
          (
            <UserSelect
              onChangeUserId={onChangeOwner}
              userId={ownerId}
            />
          )
        }
      />
    </>
  );
}

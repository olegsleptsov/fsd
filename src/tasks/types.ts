import {ReactNode} from "react";

export type Task = {
  id: string;
  title: string;
  done: boolean;
  ownerId?: string;
};

export type TaskStorage = {
  getTasks: () => Task[]
  saveTasks: (tasks: Task[]) => void;
}

export type OwnerSelectParams = {
  ownerId?: string
  onChangeOwner: (ownerId: string) => void
}

export type TasksListType = {
  taskStorage: TaskStorage,
  renderOwnerSelect: ({ ownerId, onChangeOwner }: OwnerSelectParams) => ReactNode
}
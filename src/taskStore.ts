import { nanoid } from "nanoid";
import { proxy, useSnapshot } from "valtio";
import type { Task, TaskStatus } from "./types";

interface TaskStore {
  [taskId: string]: Task;
}

export const taskStore = proxy<TaskStore>({});
export const useTasks = () => useSnapshot(taskStore);

export const addTask = (status: TaskStatus) => {
  const id = nanoid();
  taskStore[id] = {
    id,
    status,
    value: "",
  };
};

export const filteredTasks = (status: TaskStatus, taskStore: TaskStore) =>
  Object.values(taskStore).filter((task) => task.status === status);

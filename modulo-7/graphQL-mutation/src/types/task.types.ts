
export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
}

export type Priority = {
  high: boolean;
  medium: boolean;
}

export type CreateTaskData = {
  createTask: {
    title: string;
    description: string;
  }
}
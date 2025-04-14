import { create } from "zustand";
import { generateDummyTodos } from "./constant/dummyTodos";

export enum TodoStatus {
  FINISHED = "FINISHED",
  WORKING = "WORKING",
  PENDING = "PENDING",
}

export enum Priority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  URGENT = "URGENT",
}

export type TODO = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: TodoStatus;
  priority: Priority;
  createdAt: string | null;
  compleatedAt: string | null;
  deletedAt: string | null;
  subtasks?: TODO[];
  assignee?: {
    id: string;
    name: string;
    email?: string;
  };
  isArchived?: boolean;
};

type USETODO_STATE = {
  todos: TODO[];
  addTodo: (data: TODO) => void;
  updateTodo: (data: TODO) => void;
  deleteTodo: (id: string) => void;
};

const useTodo = create<USETODO_STATE>((set) => ({
  todos: generateDummyTodos(40),

  addTodo: (data) =>
    set((state) => ({
      todos: [...state.todos, data],
    })),

  updateTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo,
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));

export default useTodo;

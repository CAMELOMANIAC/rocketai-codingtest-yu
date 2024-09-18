import { makeAutoObservable } from "mobx";
import { RootStore } from "./global";

interface Todo {
  id: number;
  content: string;
}

export class TodoStore {
  todos: Todo[] = [];
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addTodo = (todo: Todo) => {
    this.todos.push(todo);
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  get todoCount() {
    return this.todos.length;
  }
}

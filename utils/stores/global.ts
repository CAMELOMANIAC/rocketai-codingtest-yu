import { TodoStore } from "./todos";
import { WolrdStore } from "./wolrd";

export class RootStore {
  todoStore: TodoStore;
  wolrdStore: WolrdStore;

  constructor() {
    this.todoStore = new TodoStore(this);
    this.wolrdStore = new WolrdStore(this);
  }
}
const rootStore = new RootStore();
export default rootStore;

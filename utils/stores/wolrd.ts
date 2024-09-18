import { makeAutoObservable } from "mobx";
import { RootStore } from "@/utils/stores/global";

export class WolrdStore {
  isWolrd: boolean = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  setWolrd = (isWolrd: boolean) => {
    this.isWolrd = isWolrd;
  };
}

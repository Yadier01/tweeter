import { create } from "zustand";

type State = {
  username: string;
  setUserName: (username: string) => void;
};

export const userStore = create<State>((set) => ({
  username: "",
  setUserName: (username: string) => set({ username }),
}));

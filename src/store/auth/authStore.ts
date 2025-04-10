import { create } from "zustand";

type AuthState = {
  isLogin: boolean;
  setLogin: () => void;
  setRegister: () => void;
  toggleAuthMode: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  isLogin: true,
  setLogin: () => set({ isLogin: true }),
  setRegister: () => set({ isLogin: false }),
  toggleAuthMode: () => set((state) => ({ isLogin: !state.isLogin })),
}));

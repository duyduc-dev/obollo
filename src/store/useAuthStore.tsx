import { create } from 'zustand';

interface AuthStore {
  authInfo: any;
  currentUser: any;

  setCurrentUser: (user: any) => void;
  setAuth: (auth: any) => any;
}

const useAuthStore = create<AuthStore>((set) => ({
  authInfo: null,
  currentUser: null,
  setAuth: (auth) => {
    set({ authInfo: auth });
  },
  setCurrentUser: (user) => set({ currentUser: user }),
}));

export default useAuthStore;

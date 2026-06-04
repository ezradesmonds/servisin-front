import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

// Based on the User model and API responses
interface User {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  role: 'customer' | 'technician' | 'admin';
  avatar?: string | null;
  // Add other fields from the User model as needed
}

interface AppState {
  theme: 'light' | 'dark';
  token: string | null;
  user: User | null;
  setTheme: (theme: 'light' | 'dark') => void;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAppStore = create(
  persist<AppState>(
    (set) => ({
      theme: 'light',
      token: null,
      user: null,
      setTheme: (theme) => set({ theme }),
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      logout: () => set({ token: null, user: null }),
    }),
    {
      name: 'servisin-app-storage', // unique name for storage
      storage: createJSONStorage(() => localStorage), // use localStorage for web compatibility
    }
  )
);

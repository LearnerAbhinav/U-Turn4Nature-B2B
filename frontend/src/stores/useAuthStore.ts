import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "@/lib/api";

interface User {
  id: string;
  companyName: string;
  email: string;
  role: string;
  status: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: true,

      setAuth: (token, user) => set({ token, user, isAuthenticated: true }),
      
      logout: () => {
        localStorage.removeItem("b2b_token");
        set({ token: null, user: null, isAuthenticated: false });
      },

      checkAuth: async () => {
        const token = localStorage.getItem("b2b_token");
        if (!token) {
          set({ isLoading: false, isAuthenticated: false, user: null });
          return;
        }

        try {
          // Fetch current user from API
          const userData = await api.getMe();
          set({ user: userData, isAuthenticated: true, token, isLoading: false });
        } catch (error) {
          console.error("Auth check failed:", error);
          localStorage.removeItem("b2b_token");
          set({ token: null, user: null, isAuthenticated: false, isLoading: false });
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token }), // Only persist token
    }
  )
);

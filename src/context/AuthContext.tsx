import { createContext, useContext, useState, type ReactNode } from "react";
import type { User } from "../types";

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

// buat context dengan default nilai null
const AuthContext = createContext<AuthContextType | null>(null);

// buat provider - komponen yang membungkus dan menyediakan data
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    // value = data yang tersedia untuk semua komponen di dalam
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: user !== null, // true kalo user ada
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// custom hook - supaya tidak perlu import AuthContext tiap pakai
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  // throw error kalo dipakai di luar Provider -
  if (!ctx) throw new Error("useAuth harus dipakai di dalam AuthProvider");
};

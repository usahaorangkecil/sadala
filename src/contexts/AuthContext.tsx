
import React, { createContext, useContext, useState, useEffect } from "react";

type User = {
  email: string;
  role: "pemkab" | "opd" | "validator" | "editor" | "user";
  name: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

const users: Record<string, { password: string; role: User["role"]; name: string }> = {
  "pemkab@admin.com": { password: "admin123", role: "pemkab", name: "Admin Pemkab" },
  "opd@admin.com": { password: "admin123", role: "opd", name: "Admin OPD" },
  "validator@admin.com": { password: "admin123", role: "validator", name: "Validator" },
  "editor@admin.com": { password: "admin123", role: "editor", name: "Editor" },
  "user@admin.com": { password: "admin123", role: "user", name: "User" },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user info in localStorage
    const storedUser = localStorage.getItem("sadalaUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const userInfo = users[email];
    
    if (userInfo && userInfo.password === password) {
      const authenticatedUser = {
        email,
        role: userInfo.role,
        name: userInfo.name
      };
      
      setUser(authenticatedUser);
      localStorage.setItem("sadalaUser", JSON.stringify(authenticatedUser));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("sadalaUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

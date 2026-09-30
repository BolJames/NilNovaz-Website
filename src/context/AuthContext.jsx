import { createContext, useContext, useEffect, useMemo, useState } from "react";
import * as authService from "../services/authService";

const AuthContext = createContext(null);
const STORAGE_KEY = "nilnovaz-auth-user";

const normalizeRole = (role) => {
  const value = String(role || "").toLowerCase();
  if (value === "admin") return "admin";
  return "user";
};

const readStoredUser = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved);
    if (!parsed || !parsed.email) return null;
    return {
      ...parsed,
      role: normalizeRole(parsed.role),
    };
  } catch {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user]);

  const login = async (credentials) => {
    const sessionUser = await authService.login(credentials);
    setUser(sessionUser);
    return sessionUser;
  };

  const register = async ({ fullName, email, password, role = "user" }) => {
    const trimmedName = String(fullName || "").trim();
    const trimmedEmail = String(email || "").trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !password) {
      throw new Error("Please fill in all required fields.");
    }

    if (trimmedName.length < 2) {
      throw new Error("Full name must be at least 2 characters long.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      throw new Error("Please enter a valid email address.");
    }

    if (password.length < 8) {
      throw new Error("Password must be at least 8 characters long.");
    }

    const normalizedRole = normalizeRole(role);
    if (normalizedRole === "admin") {
      throw new Error("Admin accounts require secure approval. Public registration creates a user account only.");
    }

    const sessionUser = await authService.register({ fullName: trimmedName, email: trimmedEmail, password, role: "user" });
    setUser(sessionUser);
    return sessionUser;
  };

  const socialLogin = async () => {
    throw new Error("Social login will be enabled when the authentication provider is configured.");
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      register,
      socialLogin,
      logout,
      role: user?.role || "guest",
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}

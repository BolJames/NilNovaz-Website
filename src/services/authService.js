const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.message || "Authentication request failed.");
  return payload;
};

export const login = async (credentials) => (await request("/auth/login", { method: "POST", body: JSON.stringify(credentials) })).user;
export const register = async (details) => (await request("/auth/register", { method: "POST", body: JSON.stringify(details) })).user;
export const logout = async () => request("/auth/logout", { method: "POST" });
export const getCurrentUser = async () => (await request("/auth/me")).user;
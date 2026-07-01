const API_URL = "https://nexuscart-backend-ytmw.onrender.com";

const saveToken = (token) => localStorage.setItem("nexus_token", token);
const getToken = () => localStorage.getItem("nexus_token");
const removeToken = () => localStorage.removeItem("nexus_token");

export const authService = {
  signUp: async (email, password) => {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Registration failed");
    saveToken(data.token);
    return data;
  },

  signIn: async (email, password) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.detail || "Login failed");
    saveToken(data.token);
    return data;
  },

  signOut: async () => {
    removeToken();
  },

  getToken,

  getUser: async () => {
    const token = getToken();
    if (!token) return null;
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (!res.ok) {
      removeToken();
      return null;
    }
    return await res.json();
  }
};

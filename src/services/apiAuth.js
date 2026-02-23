const API_URL = "https://dummyjson.com";

// LOGIN
export async function login({ username, password }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!res.ok) throw new Error("Invalid username or password");

  const data = await res.json();

  localStorage.setItem("accessToken", data.accessToken);
  localStorage.setItem("refreshToken", data.refreshToken);

  return data;
}

// LOGOUT
export async function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");

  return true;
}

// GET CURRENT USER
export async function getCurrentUser() {
  const token = localStorage.getItem("accessToken");

  if (!token) return null;

  const res = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    localStorage.removeItem("accessToken");
    return null;
  }

  const data = await res.json();

  return data;
}

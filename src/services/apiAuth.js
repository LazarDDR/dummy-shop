// api.js
// DummyJSON API login bez CORS problema

let authToken = null; // token iz login-a
let currentUser = null; // trenutno ulogovani user

// Login funkcija
export async function login({ username, password }) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) throw new Error("Invalid username or password");

  const data = await res.json();

  // Sačuvaj token i user-a
  authToken = data.token;
  currentUser = {
    id: data.id,
    username: data.username,
    email: data.email,
  };

  // Sačuvaj u localStorage da ostane nakon refresh-a
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  return currentUser;
}

// Logout funkcija
export function logout() {
  authToken = null;
  currentUser = null;
  localStorage.removeItem("authToken");
  localStorage.removeItem("currentUser");
}

// Dohvati trenutno ulogovanog korisnika
export function getCurrentUser() {
  if (currentUser) return currentUser;

  // Ako je refreshovan page, učitaj iz localStorage
  const savedUser = localStorage.getItem("currentUser");
  const savedToken = localStorage.getItem("authToken");

  if (!savedUser || !savedToken) return null;

  authToken = savedToken;
  currentUser = JSON.parse(savedUser);

  return currentUser;
}

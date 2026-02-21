// api.js
// Funkcije za login, logout i getCurrentUser koristeći dummyjson API

let authToken = null; // čuvamo token nakon login-a

// Login funkcija
export async function login({ username, password }) {
  const res = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    throw new Error("Invalid username or password");
  }

  const data = await res.json();

  // Sačuvaj token za kasnije
  authToken = data.token;

  return data;
}

// Logout funkcija
export async function logout() {
  if (!authToken) return null;

  const res = await fetch("https://dummyjson.com/auth/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Something went wrong on logout");
  }

  const data = await res.json();

  // Očisti token
  authToken = null;

  return data;
}

// Dohvati trenutno ulogovanog korisnika
export async function getCurrentUser() {
  if (!authToken) return null;

  const res = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return null;

  const data = await res.json();

  return data;
}

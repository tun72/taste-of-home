
import { URL } from "../utils/constants";

export async function editUserData({ name }) {
  fetch(URL + "/edit-user");
}

export async function login({ email, password }) {
  const result = await fetch(`${URL}/api/auth/login-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await result.json();

  if (data.status === "fail") throw new Error(data.message);

  return data;
}

export async function getCurrentUser({ token }) {
  const result = await fetch(`${URL}/api/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!result.ok) return ;

  const data = (await result.json()) || null;

  if (data === null || data.status === "fail")
    throw new Error("Something about user went wrong");

  return data.user;
}

export async function updateUser({ token, name, password }) {
  let UPDATE_URL = URL;
  if (password) {
    UPDATE_URL += "/api/user/edit-password";
  } else {
    UPDATE_URL += "/api/user/edit-user";
  }

  const result = await fetch(`${UPDATE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      newPassword: password?.newPassword,
      confPassword: password?.confPassword,
      password: password?.curPassword,
    }),
  });

  const data = (await result.json()) || null;

  if (data === null || data.status === "fail")
    throw new Error("Something about user went wrong");

  return data;
}

export async function logout() {
  if (localStorage.getItem("token")) localStorage.removeItem("token");
}

import { API_BASE_URL } from "../config/constant";
import type { User } from "../config/types";

type ApiResponse<T> = {
  status: number;
  message: string;
  body: T;
};

async function request<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: { "Content-Type": "application/json", ...init.headers },
  });

  const payload = (await response.json()) as ApiResponse<T>;

  if (!response.ok) {
    throw new Error(payload.message || "Une erreur est survenue");
  }

  return payload.body;
}

export function login(email: string, password: string) {
  return request<{ token: string }>("/user/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function getProfile(token: string) {
  return request<User>("/user/profile", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
}

import type { User } from "../config/types";
import { request } from "./crud";

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

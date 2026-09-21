import type { User } from "../config/types";
import { request } from "./crud";

export function updateProfile(
  token: string,
  userData: Partial<User> | FormData,
) {
  return request<User>("/user/profile", {
    method: "PUT",
    headers: { Authorization: `Bearer ${token}` },
    body: userData instanceof FormData ? userData : JSON.stringify(userData),
  });
}

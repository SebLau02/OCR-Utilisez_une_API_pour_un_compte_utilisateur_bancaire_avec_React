import { API_BASE_URL } from "../config/constant";

type ApiResponse<T> = {
  status: number;
  message: string;
  body: T;
};

export async function request<T>(path: string, init: RequestInit): Promise<T> {
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

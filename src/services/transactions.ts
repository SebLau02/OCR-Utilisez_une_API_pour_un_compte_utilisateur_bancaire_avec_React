import type { Transactions } from "../config/types";
import { requestMock } from "./crud";

export function getTransactions(token: string, category: string) {
  return requestMock<Transactions>(`/data/user/profile/${category}.json`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
}

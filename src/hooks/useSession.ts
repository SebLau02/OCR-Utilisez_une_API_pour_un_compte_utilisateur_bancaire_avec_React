import Cookies from "js-cookie";
import { COOKIE_KEY, USER_ID_KEY } from "../config/constant";

export const useSession = () => {
  const token = Cookies.get(COOKIE_KEY);
  const userId = Cookies.get(USER_ID_KEY);
  return { token, userId };
};

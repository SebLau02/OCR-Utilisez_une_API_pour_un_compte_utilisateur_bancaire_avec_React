import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

export const FEATURES = [
  {
    img: iconChat,
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    img: iconMoney,
    title: "More savings means higher rates",
    text: "The more you save with us, the higher your interest rate will be!",
  },
  {
    img: iconSecurity,
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

export const API_BASE_URL = "http://localhost:3001/api/v1";
export const COOKIE_KEY = "argent_bank";
export const USER_ID_KEY = "argent_bank_user_id";

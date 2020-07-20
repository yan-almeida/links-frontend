import { apiPost } from "../../helpers/api";

export const SIGN_UP = "SIGN_UP";

export const signUp = (data) => {
  const payload = apiPost("/auth/sign-up", data);
  // busca dado na API, retorna type e payload
  return { type: SIGN_UP, payload };
};

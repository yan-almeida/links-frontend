export const SIGN_IN = "SIGN_IN";

export const signIn = (data) => {
  // busca dado na API, retorna type e payload
  return { type: SIGN_IN, payload: data };
};

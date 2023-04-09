import { API, tryCatchWrapper } from "../helpers";

export async function login(data: any) {
  return tryCatchWrapper(API.post("/login", data));
}

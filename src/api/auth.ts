import { BASE_URL } from "../constants";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export async function login({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  console.log(response);

  if (!response.ok) {
    throw new Error("Invalid email or password");
  }

  const data = await response.json();
  if (data.status !== "success" || !data.details) {
    throw new Error(data.responseMessage || "Login failed");
  }
  return {
    accessToken: data.details.accessToken,
    user: data.details.user,
  };
}

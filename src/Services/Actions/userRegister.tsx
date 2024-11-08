"use server";

import { RegisterFormData } from "@/app/register/page";

export const registerUser = async (data: RegisterFormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const userInfo = await res.json();
  console.log(userInfo);
  return userInfo;
};

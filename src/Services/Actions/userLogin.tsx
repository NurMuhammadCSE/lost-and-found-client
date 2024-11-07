"use server";

import { FormValues } from "@/app/login/page";

export const userLogin = async (data: FormValues) => {
    console.log(data)
    // console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
//   console.log(res)
  const userInfo = await res.json();
  console.log(userInfo)
  return userInfo;
};

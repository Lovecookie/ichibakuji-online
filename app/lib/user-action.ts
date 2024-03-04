"use server";

import { IResponseWith, LoginUser, ResponseError, ResponseSuccess } from "@/interfaces/response/shared";
import { TOptional } from "@/interfaces/util/optional";
import { cookies } from "next/headers";

const HOST_URL = process.env.HOST_URL;

export async function requestLogin(email: string, password: string) {
    const url = `${HOST_URL}/api/login`;

    console.log(`email:${email}, password:${password}`);
    console.log(url);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        return ResponseError(response.status, "Login failed.");
    }

    const convertedData = await response.json();
    console.log("convertedData ", convertedData);

    const cookie = cookies();
    cookie.set({
        name: "user_basic",
        value: JSON.stringify(convertedData.data),
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    return ResponseSuccess(convertedData.data);
}

export async function requestLogout() {
    const cookie = cookies();
    cookie.delete("user_basic");

    return ResponseSuccess("Logout success.");
}

export async function getUserBasic() {
    const cookie = cookies();
    const userBasic = cookie.get("user_basic");
    if (userBasic === undefined) {
        return ResponseError(401, "User not logged in.");
    }

    const convertedData = JSON.parse(userBasic.value);

    return ResponseSuccess(convertedData);
}

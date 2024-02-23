import { NextApiResponse } from "next";

export interface IResponseWith<Data = any> {
    code: number;
    message: string;
    data?: Data;
}

export type LoginUser = {
    userkey: number;
    email: string;
    nickname: string;
};

export type UserProfile = {
    userkey: number;
    nickname: string;
    profileImage: string;
    place: string;
};

export type ProfileDetail = {
    userProfile: UserProfile;
    introduction: string;
};

export type ProfileDetailWithCrew = {
    userProfile: UserProfile;
    introduction: string;
    crew: UserProfile[];
};

export function ResponseError(code: number, message: string) {
    return { code, message };
}

export function ResponseSuccess(data: any) {
    return { code: 0, message: "", data };
}

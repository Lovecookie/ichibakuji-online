import { errorStatus, isValidPost, successStatus } from "@/interfaces";
import { IResponseWith, LoginUser, ProfileDetail, ProfileDetailWithCrew } from "@/interfaces/response";
import { PostAsync } from "@/interfaces/util/client-fetch";
import { NextApiRequest, NextApiResponse } from "next";

const HOST_URL = process.env.HOST_URL;

export async function requestProfileDetail(body: string): Promise<IResponseWith<ProfileDetailWithCrew>> {
    return PostAsync({
        url: "/api/profile/detail",
        body,
    }).then((response) => response.json());
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!isValidPost(req)) {
        res.status(400).json(errorStatus(400, "Invalid request"));
        return;
    }

    const loginUser: LoginUser = req.body;
    const profilePictureUrl = `${process.env.PROFILES_PATH}/profile1.jpg`;

    const profileDetailWithCrew: ProfileDetailWithCrew = {
        userProfile: {
            userkey: loginUser.userkey,
            nickname: loginUser.nickname,
            profileImage: profilePictureUrl,
            place: "봉천동",
        },
        introduction: "반갑습니다. 저는 봉천동에 사는 개발자입니다. 잘 부탁드립니다.",
        crew: [],
    };

    res.status(200).json(successStatus(profileDetailWithCrew));
}

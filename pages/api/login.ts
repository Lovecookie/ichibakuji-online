import { errorStatus, isValidPost, successStatus } from "@/interfaces";
import { LoginRequest } from "@/interfaces/request";
import { IResponseWith, LoginUser } from "@/interfaces/response/shared";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse<IResponseWith<LoginUser>>) {
    console.log(req.body);

    if (!isValidPost(req)) {
        res.status(405).json(errorStatus(405, "Method not allowed"));

        return;
    }

    const userkey = 1;
    const nickname = "smbaek";
    const { email, password }: LoginRequest = req.body;

    res.status(200).json(successStatus({ userkey, email, nickname } as LoginUser));
}

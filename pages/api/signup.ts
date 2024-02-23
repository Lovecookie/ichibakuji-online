import { LoginUser, IResponseWith } from "@/interfaces/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<IResponseWith<LoginUser>>) {}

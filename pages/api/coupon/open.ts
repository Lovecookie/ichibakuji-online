import { isValidPost, successStatus } from "@/interfaces";
import { ResultCoupon } from "@/interfaces/response/coupon";
import { IResponseWith } from "@/interfaces/response/shared";
import { PostAsync } from "@/interfaces/util/client-fetch";
import { NextApiRequest, NextApiResponse } from "next";

const jsonData = {
    coupons: [
        {
            key: "1",
            index: 1000,
            title: "Coupon 1",
            pic: "tenmu1.jpg",
        },
        {
            key: "2",
            index: 1001,
            title: "Coupon 2",
            pic: "tenmu2.jpg",
        },
        {
            key: "3",
            index: 1002,
            title: "Coupon 3",
            pic: "tenmu3.jpg",
        },
        {
            key: "4",
            index: 1003,
            title: "Coupon 4",
            pic: "tenmu4.jpg",
        },
        {
            key: "5",
            index: 1004,
            title: "Coupon 5",
            pic: "tenmu5.jpg",
        },
        {
            key: "6",
            index: 1005,
            title: "Coupon 6",
            pic: "tenmu6.jpg",
        },
        {
            key: "7",
            index: 1006,
            title: "Coupon 7",
            pic: "tenmu7.jpg",
        },
        {
            key: "8",
            index: 1007,
            title: "Coupon 8",
            pic: "tenmu8.jpg",
        },
        {
            key: "9",
            index: 1008,
            title: "Coupon 9",
            pic: "tenmu9.jpg",
        },
        {
            key: "10",
            index: 1009,
            title: "Coupon 10",
            pic: "tenmu10.jpg",
        },
        {
            key: "11",
            index: 1010,
            title: "Coupon 11",
            pic: "tenmu11.jpg",
        },
        {
            key: "12",
            index: 1011,
            title: "Coupon 12",
            pic: "tenmu12.jpg",
        },
        {
            key: "13",
            index: 1012,
            title: "Coupon 13",
            pic: "tenmu13.jpg",
        },
        {
            key: "14",
            index: 1013,
            title: "Coupon 14",
            pic: "tenmu14.jpg",
        },
        {
            key: "15",
            index: 1014,
            title: "Coupon 15",
            pic: "tenmu15.jpg",
        },
        {
            key: "16",
            index: 1015,
            title: "Coupon 16",
            pic: "tenmu16.jpg",
        },
        {
            key: "17",
            index: 1016,
            title: "Coupon 17",
            pic: "tenmu17.jpg",
        },
        {
            key: "18",
            index: 1017,
            title: "Coupon 18",
            pic: "tenmu18.jpg",
        },
        {
            key: "19",
            index: 1018,
            title: "Coupon 19",
            pic: "tenmu19.jpg",
        },
        {
            key: "20",
            index: 1019,
            title: "Coupon 20",
            pic: "tenmu20.jpg",
        },
        {
            key: "21",
            index: 1020,
            title: "Coupon 21",
            pic: "tenmu21.jpg",
        },
        {
            key: "22",
            index: 1020,
            title: "Coupon 22",
            pic: "tenmu22.jpg",
        },
        {
            key: "23",
            index: 1021,
            title: "Coupon 23",
            pic: "tenmu23.jpg",
        },
        {
            key: "24",
            index: 1022,
            title: "Coupon 24",
            pic: "tenmu24.jpg",
        },
    ],
};

export async function requestResultCoupon(body: string): Promise<IResponseWith<ResultCoupon>> {
    return await PostAsync({
        url: "/api/coupon/open",
        body,
    }).then((response) => response.json());
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!isValidPost(req)) {
        res.status(400).json({ error: "Invalid request" });
        return;
    }

    const resultCoupon = _randomCoupon();

    console.log(
        `${resultCoupon.index}번 쿠폰이 나왔습니다.\nkey: ${resultCoupon.key} title: ${resultCoupon.title} pic: ${resultCoupon.pic}`
    );

    res.status(200).json(successStatus(resultCoupon));
}

function _randomCoupon(): ResultCoupon {
    const randomIndex = Math.floor(Math.random() * jsonData.coupons.length);
    return jsonData.coupons[randomIndex];
}

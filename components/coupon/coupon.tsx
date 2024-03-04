"use client";

import Image from "next/image";
import ImgCoupon from "@/public/assets/coupon-image.png";
import ImgPreopenCoupon from "@/public/assets/preopen-coupon-image.png";
import { useState } from "react";

export type CouponInfo = {
    id: number;
    name: string;
};

interface ICouponListProps {
    children: React.ReactNode;
}

export function CouponList({ children }: ICouponListProps) {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 gap-8">{children}</div>
        </div>
    );
}

export function CouponBox() {
    return (
        <div className="transition-transform duration-300 ease-in-out hover:scale-110">
            <Image src={ImgCoupon} alt="CouponBox" style={{ objectFit: "cover" }} />
        </div>
    );
}

interface IHoverCouponBoxProps {
    handleClickCoupon: () => void;
}

export function HoverCouponBox({ handleClickCoupon }: IHoverCouponBoxProps) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={() => handleClickCoupon()}
        >
            {isHover ? (
                <Image src={ImgPreopenCoupon} alt="CouponBox" style={{ objectFit: "cover" }} />
            ) : (
                <Image src={ImgCoupon} alt="CouponBox" style={{ objectFit: "cover" }} />
            )}
        </div>
    );
}

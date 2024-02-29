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
            <Image src={ImgCoupon} alt="CouponBox" objectFit="cover" />
        </div>
    );
}

export function HoverCouponBox() {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {isHover ? (
                <Image src={ImgPreopenCoupon} alt="CouponBox" objectFit="cover" />
            ) : (
                <Image src={ImgCoupon} alt="CouponBox" objectFit="cover" />
            )}
        </div>
    );
}

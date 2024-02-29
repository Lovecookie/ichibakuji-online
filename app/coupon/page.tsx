"use client";

import { playFirework } from "@/components/3rd-party/confetti";
import { CouponList, CouponBox, HoverCouponBox } from "@/components/coupon/coupon";
import OpacityEmptyModal from "@/components/modal/opacity-empty-modal";
import { useState } from "react";

export default function CouponPage() {
    const [showModal, setShowModal] = useState(false);
    const couponInfos = [
        { id: 1, name: "Coupon 1" },
        { id: 2, name: "Coupon 2" },
        { id: 3, name: "Coupon 3" },
        { id: 4, name: "Coupon 4" },
        { id: 5, name: "Coupon 5" },
        { id: 6, name: "Coupon 6" },
        { id: 7, name: "Coupon 7" },
        { id: 8, name: "Coupon 8" },
        { id: 9, name: "Coupon 9" },
        { id: 10, name: "Coupon 10" },
        { id: 11, name: "Coupon 11" },
        { id: 12, name: "Coupon 12" },
        { id: 13, name: "Coupon 13" },
        { id: 14, name: "Coupon 14" },
        { id: 15, name: "Coupon 15" },
        { id: 16, name: "Coupon 16" },
        { id: 17, name: "Coupon 17" },
        { id: 18, name: "Coupon 18" },
        { id: 19, name: "Coupon 19" },
        { id: 20, name: "Coupon 20" },
        { id: 21, name: "Coupon 21" },
        { id: 22, name: "Coupon 22" },
        { id: 23, name: "Coupon 23" },
        { id: 24, name: "Coupon 24" },
    ];

    const handleShowModal = () => {
        playFirework();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section>
            {showModal && (
                <OpacityEmptyModal opacity={0} onClose={handleCloseModal}>
                    <div className="flex flex-col items-center">
                        <p className="text-white text-lg mt-4">이 쿠폰을 선택할까요?</p>
                        <HoverCouponBox />
                    </div>
                </OpacityEmptyModal>
            )}
            <div className="flex-1 mx-10 my-20">
                <CouponList>
                    {couponInfos.map((info) => {
                        return (
                            <div key={info.id} className="" onClick={handleShowModal}>
                                <CouponBox />
                            </div>
                        );
                    })}
                </CouponList>
            </div>
        </section>
    );
}

"use client";

import { playFirework } from "@/components/3rd-party/confetti";
import { CouponList, CouponBox, HoverCouponBox } from "@/components/coupon/coupon";
import { DefaultSpinner, ESpinnerColor } from "@/components/loading/default-spinner";
import TransparentEmptyModal from "@/components/modal/opacity-empty-modal";
import { requestResultCoupon } from "@/pages/api/coupon/open";
import { useState } from "react";

const EModalType = {
    None: 0,
    PreOpened: 1,
    Loading: 2,
    Result: 3,
} as const;
type EModalType = (typeof EModalType)[keyof typeof EModalType];

export default function CouponPage() {
    const [modalType, setModalType] = useState<EModalType>(EModalType.None);

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
        // playFirework();
        setModalType(EModalType.PreOpened);
    };

    const handleCloseModal = () => {
        setModalType(EModalType.None);
    };

    const handleClickCoupon = async () => {
        setModalType(EModalType.Loading);

        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        const responseWith = await requestResultCoupon("");
        if (responseWith.code !== 0) {
            setModalType(EModalType.None);
            return;
        }

        await delay(1000);

        playFirework();
        setModalType(EModalType.Result);
    };

    return (
        <section>
            <_SwitchComponent
                modalType={modalType}
                handleClickCoupon={handleClickCoupon}
                handleCloseModal={handleCloseModal}
            />
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

interface ISwitchComponentProps {
    modalType: EModalType;
    handleClickCoupon: () => void;
    handleCloseModal: () => void;
}

function _SwitchComponent({ modalType, handleClickCoupon, handleCloseModal }: ISwitchComponentProps) {
    return (
        <div>
            {modalType === EModalType.None && null}
            {modalType === EModalType.PreOpened && (
                <TransparentEmptyModal handleClose={handleCloseModal}>
                    <div className="flex flex-col items-center">
                        <p className="text-white text-lg mt-4">누르면 개봉됩니다.</p>
                        <HoverCouponBox handleClickCoupon={handleClickCoupon} />
                    </div>
                </TransparentEmptyModal>
            )}
            {modalType === EModalType.Loading && (
                <TransparentEmptyModal handleClose={handleCloseModal} hiddenCloseButton={true}>
                    <div className="flex flex-col items-center">
                        <DefaultSpinner width="20" height="20" color={ESpinnerColor.yellow} />
                    </div>
                </TransparentEmptyModal>
            )}
            {modalType === EModalType.Result && (
                <TransparentEmptyModal handleClose={handleCloseModal}>
                    <div className="animate-jump-in animate-once animate-duration-500 animate-delay-0 animate-ease-in-out animate-alternate animate-fill-backwards">
                        <div className="flex flex-col items-center">
                            <p className="text-white text-lg mt-4">축하합니다!</p>
                            <CouponBox />
                        </div>
                    </div>
                </TransparentEmptyModal>
            )}
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { HiChevronLeft } from "react-icons/hi2";
import { FaUserAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./topnav.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import IconHoverButton from "../button/icon-button";

interface ITopNavProps {
    title?: string;
    hasBackButton?: boolean;
}

export function ProfileTopNav() {
    return <TopNav title={"프로필"} hasBackButton={true} />;
}

export function CouponTopNav() {
    return <TopNav title={"쿠폰"} hasBackButton={true} />;
}

export function TopNav({ title = "복권왕", hasBackButton = false }: ITopNavProps) {
    const router = useRouter();
    const [opacity, setOpacity] = useState(1);
    let lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setOpacity(0);
            } else {
                setOpacity(1);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className="flex items-center justify-between px-4 py-2 h-16"
            style={{ opacity, backgroundImage: "linear-gradient(to right, #d0e25d 0%, #ec2f2f 60%, #3c81f9 100%)" }}
        >
            <article className="nav-content flex justify-between w-full">
                <div className="flex flex-1 justify-start items-center">
                    {hasBackButton && (
                        <div
                            className="p-2 bg-gray-400 opacity-40 rounded-full hover:bg-gray-300 hover:opacity-60"
                            onClick={() => router.back()}
                        >
                            <span className="text-white font-bold">
                                <HiChevronLeft size={24} />
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <h1 className="text-center text-2xl text-gray-200">{title}</h1>
                </div>
                <div className=" flex gap-4 justify-end items-center flex-1">
                    <IconHoverButton href="/profile">
                        <FaUserAlt size={24} />
                    </IconHoverButton>
                    <IconHoverButton href="/coupon">
                        <FaQuestionCircle size={24} />
                    </IconHoverButton>
                </div>
            </article>
        </nav>
    );
}

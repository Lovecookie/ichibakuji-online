"use client";

import { useEffect, useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./topnav.module.css";

export default function TopNav() {
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
        // <nav className="flex items-center justify-between px-4 py-2 bg-gray-800 text-white h-16" style={{ opacity }}>
        <nav
            className="flex items-center justify-between px-4 py-2 h-16"
            style={{ opacity, backgroundImage: "linear-gradient(to right, #d0e25d 0%, #ec2f2f 60%, #3c81f9 100%)" }}
        >
            <article className="nav-content flex justify-between w-full">
                <div className="flex-1"></div>
                <h1 className="text-center flex-1 text-2xl text-gray-200">一番くじ</h1>
                <div className=" flex gap-4 justify-end items-center flex-1">
                    <span className="text-gray-200">
                        <FaUserAlt size={24} />
                    </span>
                    <span className="content-center text-gray-200">
                        <FaQuestionCircle size={24} />
                    </span>
                </div>
            </article>
        </nav>
    );
}

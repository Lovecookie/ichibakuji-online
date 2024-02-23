"use client";

import { useEffect } from "react";
import chroma from "chroma-js";
import styles from "./falling-stars.module.css";

interface FallingStarsProps {
    children: React.ReactNode;
}

export default function FallingStars({ children }: FallingStarsProps) {
    useEffect(() => {
        const fallingContainer = document.getElementById("falling");
        if (!fallingContainer) {
            return;
        }

        for (let i = 0; i < 200; i++) {
            const star = document.createElement("div");

            star.className = styles.star;
            star.style.left = `${Math.random() * 100}vw`;
            star.style.animationDuration = `${Math.random() * 5 + 2}s`;

            const baseColor = chroma("yellow");
            const brightness = Math.random() * 0.5 + 0.75;
            const adjustedColor = baseColor.brighten(brightness - 1);
            star.style.backgroundColor = adjustedColor.css();

            fallingContainer.appendChild(star);
        }
    }, []);

    return (
        <div className={styles.alokdalok}>
            <div className={styles.falling} id="falling"></div>
            <div className="absolute inset-0 flex items-center justify-center">{children}</div>
        </div>
    );
}

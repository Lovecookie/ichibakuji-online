import type { Metadata } from "next";
import styles from "@/components/background/checkerboard.module.css";
import { CouponTopNav } from "@/components/nav/topnav";

export const metadata = {
    title: "Coupon",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className={`${styles.checkerBackground} flex flex-col`}>
            <CouponTopNav />
            {children}
        </main>
    );
}

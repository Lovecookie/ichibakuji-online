import { TopNav } from "@/components/nav/topnav";
import ClickablePopupList from "@/components/popup-box/clickable-popup";
import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import styles from "@/components/background/checkerboard.module.css";

import imgSlider1 from "@/public/assets/slider/slider1.jpg";
import imgSlider2 from "@/public/assets/slider/slider2.jpg";
import imgSlider3 from "@/public/assets/slider/slider3.jpg";
import imgSlider4 from "@/public/assets/slider/slider4.jpg";
import imgMain from "@/public/assets/main_image.png";
import SliderBox from "@/components/slider/slider-box";
import BusinessInfoCard from "@/components/card/business-info-card";

export const metadata = {
    title: "Home | BakujiKing-Online",
};

export default function Home() {
    return (
        <main className={`${styles.checkerBackground} flex flex-col`}>
            <TopNav />
            <section className="m-5">
                <ClickablePopupList />
            </section>
            <section className="mx-4 my-5 relative h-[400px]">
                <Image src={imgMain} alt={`Main Image`} layout="fill" objectFit="contain" className="w-full h-full" />
            </section>
            <section className="flex-2 mx-4 my-20 h-[400px]">
                <SliderBox images={[imgSlider1, imgSlider2, imgSlider3, imgSlider4]} />
            </section>
            <section className="flex-1">
                <BusinessInfoCard />
            </section>
        </main>
    );
}

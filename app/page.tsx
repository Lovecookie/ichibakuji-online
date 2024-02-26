import TopNav from "@/components/nav/topnav";
import ClickablePopupList from "@/components/popup-box/clickable-popup";
import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

import styles from "@/components/background/checkerboard.module.css";

import picSlider1 from "@/public/assets/slider/slider1.jpg";
import picSlider2 from "@/public/assets/slider/slider2.jpg";
import picSlider3 from "@/public/assets/slider/slider3.jpg";
import picSlider4 from "@/public/assets/slider/slider4.jpg";
import picMainImage from "@/public/assets/main_image.png";
import SliderBox from "@/components/slider/slider-box";
import BusinessInfoCard from "@/components/card/business-info-card";

export const metadata = {
    title: "Home | BakujiKing-Online",
};

export default function Home() {
    // return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
    return (
        <main className={styles.checkerBackground}>
            <TopNav />
            <section className="m-4">
                <ClickablePopupList />
            </section>
            <section className="mx-4 my-5 relative flex flex-col h-[20%]">
                <Image
                    src={picMainImage}
                    alt={`Main Image`}
                    layout="fill"
                    objectFit="contain"
                    className="w-full h-full"
                />
            </section>
            <section className="mx-4 my-20 h-[15%]">
                <SliderBox images={[picSlider1, picSlider2, picSlider3, picSlider4]} />
            </section>
            <section>
                <BusinessInfoCard />
            </section>
        </main>
    );
}

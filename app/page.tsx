import TopNav from "@/components/nav/topnav";
import ClickablePopupList from "@/components/popup-box/clickable-popup";

import styles from "@/components/background/checkerboard.module.css";
import { Metadata } from "next";

import picSlider1 from "@/public/assets/slider/slider1.jpg";
import picSlider2 from "@/public/assets/slider/slider2.jpg";
import picSlider3 from "@/public/assets/slider/slider3.jpg";
import picSlider4 from "@/public/assets/slider/slider4.jpg";
import SliderBox from "@/components/slider/slider-box";

export const metadata = {
    title: "Home",
};

export default function Home() {
    // return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
    return (
        <main className={styles.checkerBackground}>
            <TopNav />
            <div className="m-4">
                <ClickablePopupList />
                <div className="my-20">
                    <SliderBox images={[picSlider1, picSlider2, picSlider3, picSlider4]} />
                </div>
            </div>
        </main>
    );
}

import styles from "@/components/background/checkerboard.module.css";
import TopNav from "@/components/nav/topnav";
import ClickablePopupList from "@/components/popup-box/clickable-popup";

export default function Home() {
    // return <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>;
    return (
        <main className={styles.checkerBackground}>
            <TopNav />
            <ClickablePopupList />
        </main>
    );
}

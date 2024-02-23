import styles from "@/components/background/checkerboard.module.css";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return <main className={styles.checkerBackground}>{children}</main>;
}

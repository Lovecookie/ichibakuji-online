import DefaultInput from "@/components/input/default-input";
import DefaultLabel from "@/components/input/default-label";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "@/components/background/checkerboard.module.css";

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        router.push("/profile");
    };

    return (
        <section className={styles.checkerBackground}>
            <div className="p-8 bg-white bg-opacity-60 rounded-lg shadow-md max-w-sm w-full">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 bg-center flex justify-center items-center">
                        <h1>로그인</h1>
                    </div>
                    <div className="mb-4">
                        <DefaultLabel htmlFor="email" labelName="Email" />
                        <DefaultInput type="email" id="email" name="email" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6">
                        <DefaultLabel htmlFor="password" labelName="Password" />
                        <DefaultInput
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-10"></div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                        <div className="flex">
                            <span className="text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="text-indigo-600 hover:underline">
                                    Sign Up
                                </Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

import Link from "next/link";
import { IconType } from "react-icons";

export default function DefaultCircleButton({ children }: { children: React.ReactNode }) {
    return (
        <span className="p-2 text-gray-200 hover:bg-gray-200 hover:bg-opacity-40 hover:rounded-full">{children}</span>
    );
}

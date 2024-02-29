import Link from "next/link";
import { IconType } from "react-icons";

interface IIconHoverButtonProps {
    href: string;
}

export default function IconHoverButton({ children, href }: Readonly<React.PropsWithChildren<IIconHoverButtonProps>>) {
    return (
        <span className="p-2 text-gray-200 hover:bg-gray-200 hover:bg-opacity-40 hover:rounded-full">
            <Link href={href}>{children}</Link>
        </span>
    );
}

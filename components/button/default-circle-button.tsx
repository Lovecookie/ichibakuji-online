import Link from "next/link";
import { IconType } from "react-icons";

interface IDefaultCircleButtonProps {
    onClick?: () => void;
}

export default function DefaultCircleButton({
    onClick = () => {},
    children,
}: Readonly<React.PropsWithChildren<IDefaultCircleButtonProps>>) {
    return (
        <span className="p-2 text-gray-200 hover:bg-gray-200 hover:bg-opacity-40 hover:rounded-full" onClick={onClick}>
            {children}
        </span>
    );
}

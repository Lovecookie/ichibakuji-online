import DefaultCircleButton from "../button/default-circle-button";
import { HiOutlineXMark } from "react-icons/hi2";

interface IEmptyModalProps {
    opacity?: number;
    onClose: () => void;
}

export default function OpacityEmptyModal({
    children,
    opacity = 20,
    onClose,
}: Readonly<React.PropsWithChildren<IEmptyModalProps>>) {
    return (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-60 flex justify-center items-center">
            <div className={`pt-2 pl-4 pr-4 pb-4 bg-white bg-opacity-${opacity} rounded-lg w-96 flex flex-col`}>
                <div className="flex justify-end" onClick={onClose}>
                    <DefaultCircleButton>
                        <HiOutlineXMark size={20} />
                    </DefaultCircleButton>
                </div>
                {children}
            </div>
        </div>
    );
}

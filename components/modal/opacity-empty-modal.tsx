import DefaultCircleButton from "../button/default-circle-button";
import { HiOutlineXMark } from "react-icons/hi2";

interface IEmptyModalProps {
    handleClose: () => void;
    hiddenCloseButton?: boolean;
}

export default function TransparentEmptyModal({
    children,
    handleClose,
    hiddenCloseButton = false,
}: Readonly<React.PropsWithChildren<IEmptyModalProps>>) {
    return (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-60 flex justify-center items-center">
            <div className={`pt-2 pl-4 pr-4 pb-4 bg-white bg-opacity-0 rounded-lg w-96 min-h-48 flex flex-col`}>
                <div className="flex justify-end" onClick={handleClose}>
                    {!hiddenCloseButton && (
                        <DefaultCircleButton>
                            <HiOutlineXMark size={20} />
                        </DefaultCircleButton>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
}

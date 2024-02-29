import DefaultCircleButton from "../button/default-circle-button";
import { HiOutlineXMark } from "react-icons/hi2";

interface IEmptyModalProps {
    onClose: () => void;
}

export default function EmptyModal({ children, onClose }: Readonly<React.PropsWithChildren<IEmptyModalProps>>) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
            <div className="bg-white pt-2 pl-4 pr-4 pb-4 rounded-lg shadow-lg w-96 flex flex-col">
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

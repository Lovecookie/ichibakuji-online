interface ICouponBoxModalProps {
    onClose: () => void;
}

export default function CouponBoxModal({ children, onClose }: Readonly<React.PropsWithChildren<ICouponBoxModalProps>>) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
            <div className="bg-white pt-2 pl-4 pr-4 pb-4 rounded-lg shadow-lg w-96 flex flex-col">
                <div className="flex justify-end">
                    <button className="text-xl text-gray-700 hover:text-gray-900" onClick={onClose}>
                        &times; {/* 크로스 마크 (닫기 아이콘) */}
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}

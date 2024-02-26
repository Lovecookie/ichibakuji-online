interface IInfoCardProps {
    title: string;
    content: string;
}

function InfoCard({ title, content }: IInfoCardProps) {
    return (
        <div className="flex flex-row justify-start">
            <div className="text-white">
                <p>{`${title}: `} </p>
            </div>
            <div className="mx-2 text-purple-400">
                <p>{content}</p>
            </div>
        </div>
    );
}

export default function BusinessInfoCard() {
    return (
        <div className="p-5 bg-gray-800 bg-opacity-70">
            <div className="flex flex-col">
                <InfoCard title="사업자 정보" content="대구몬스터" />
                <InfoCard title="대표자" content="양은석" />
                <InfoCard title="대표 Email" content="tlqkftoRl@kakao.com" />
                <InfoCard title="사업자 등록번호" content="123-45-67890" />
                <InfoCard title="통신판매업신고" content="2024-대구 동성로-1104" />
                <InfoCard title="개인정보관리책임" content="양은석" />
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { HiMiniChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

export default function ClickablePopupList() {
    return (
        <div className="flex flex-col justify-between items-center space-y-2">
            <ClickablePopup />
            <ClickablePopup />
            <ClickablePopup />
        </div>
    );
}

function ClickablePopup() {
    const [isExpanded, setIsExpanded] = useState(false);

    const togglePopup = () => setIsExpanded(!isExpanded);

    return (
        <article
            className={`cursor-pointer bg-orange-100 opacity-90 transition-all duration-300 ease-in-out border rounded-2xl overflow-hidden items-center justify-start
        ${isExpanded ? "w-full h-screen" : "w-full h-14"}`}
            onClick={togglePopup}
        >
            <div className="mx-4 my-3 h-5/6">{isExpanded ? <PopupContent /> : <PopupTitle />}</div>
        </article>
    );
}

function PopupTitle() {
    return (
        <div className="flex flex-row items-center">
            <div className="bg-yellow-200 rounded-xl py-1">
                <div className="px-2 flex flex-row items-center">
                    <HiMiniChatBubbleOvalLeftEllipsis size={24} />
                    <p className="text-sm px-4">공지사항</p>
                </div>
            </div>
            <p>연휴기간 배송 안내</p>
        </div>
    );
}

function PopupContent() {
    return (
        <div className="flex flex-col h-full justify-between  items-start">
            <PopupTitle />
            <div className="my-4 flex flex-col justify-around">
                <div className="">
                    <p>등록일: 2021년 9월 20일</p>
                </div>
                <div className="whitespace-pre-line">
                    {
                        "안녕하세요.\n 저희 이치바쿠지를 찾아주셔서 감사합니다.\n 이곳은 공지사항을 올리는 곳입니다.\n 감사합니다."
                    }
                </div>
            </div>
        </div>
    );
}

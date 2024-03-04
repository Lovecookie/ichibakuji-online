import Image from "next/image";

interface IResultCouponImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export function ResultCouponImage({ src, alt, width = 128, height = 128 }: IResultCouponImageProps) {
    return <Image src={`/assets/coupon/${src}`} alt={alt} width={width} height={height} />;
}

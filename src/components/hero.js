import Image from "next/image";


export default function Hero({
    imgUrl,
    altContent,
    content
}) {
    return (
        <div className="h-screen relative -z-10">
            <div className="absolute inset-0 -z-10">
                <Image src={imgUrl} fill style={{ objectFit: 'cover' }} alt={altContent}></Image>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50"></div>
            </div>
            <div className="flex justify-center pt-48">
                <h1 className="text-black-500 text-6xl">{ content }</h1>
            </div>
        </div>
    );
}

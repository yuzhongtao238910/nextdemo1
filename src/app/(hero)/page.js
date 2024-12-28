import Hero from "@/src/components/hero.js";
import homeSrc from "/public/1.png"

export const metadata = {
    title: 'hello',
    description: '太棒啦',
    // icons: {
    //     icon: '/ico.png'
    // },
}
// export async function generateMetadata(
//     { params, searchParams },
//     parent
// ) {
//     const pa = await params
//     const sa = await searchParams
//     const pare =  await parent
//     console.log(pa)
//     console.log(sa)
//     console.log(pare)
//     return {
//         title: 'hello238910',
//     }
// }
export default function Home() {
    return (
        <Hero
            imgUrl={homeSrc}
            altContent="h11ello"
            content="apple!"
        ></Hero>
    );
}

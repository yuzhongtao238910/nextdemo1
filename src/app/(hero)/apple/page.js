import Hero from "@/src/components/hero.js";
import homeSrc from "/public/2.png"
import { notFound } from 'next/navigation'
export const metadata = {
    title: 'apple',
    description: 'handsome',
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
export default function Apple() {
    notFound()
    return (
        <Hero
            imgUrl={homeSrc}
            altContent="hello"
            content="apple!"
        ></Hero>
    );
}

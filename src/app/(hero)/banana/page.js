import Hero from "@/src/components/hero.js";
import homeSrc from "/public/3.png"
export default function Banana() {
    return (
        <Hero
            imgUrl={homeSrc}
            altContent="hello"
            content="apple!"
        ></Hero>
    );
}
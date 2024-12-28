import Hero from "@/src/components/hero.js";
import homeSrc from "/public/4.png"
export default function Performance() {
    return (
        <Hero
            imgUrl={homeSrc}
            altContent="hello"
            content="apple!"
        ></Hero>
    );
}

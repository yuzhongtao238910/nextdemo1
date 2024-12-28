"use client"
import Header from "../../components/header.js";
export default function RootLayout({ children }) {
    console.log(children, 555)
    return (
        <>
            <Header></Header>
            { children }
        </>
    );
}

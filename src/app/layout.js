"use client"
import "./globals.css";
import { Hanalei_Fill } from 'next/font/google'

const inter = Hanalei_Fill({
    subsets: ['latin'],
    // swap 表示没有加载完先用本地的字体，加载完字体后在使用谷歌字体
    display: 'swap',
    weight: '400'
})

export default function RootLayout({ children }) {
    console.log(children, 555)
    return (
        <html lang="en" className={inter.className}>
            <body>
                {/* <Header></Header> */}
                {/* 2 */}
                { children }
            </body>
        </html>
    );
}

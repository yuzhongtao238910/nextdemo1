"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


const accessLink = ["/", "/preformance", "/apple", "/banana"]

export default function Header() {
    const pathname = usePathname()
    // console.log(pathname)
    // if (!accessLink.includes(pathname)) {
    //     return null
    // }
    return (
        <div className="absolute w-full z-100 h-full">
           <div className="flex justify-between container mx-auto p-8 items-end">
               <Link href="/" className={ pathname === '/' ? 'text-purple-700 text-3xl' : 'text-bold text-green-800 text-2xl' }>Home</Link>
               <div className="text-lg space-x-3">
                   <Link href="/preformance" className={ pathname === '/preformance' ? 'text-purple-700' : 'text-bold text-green-700' }>preformance</Link>
                   <Link href="/apple" className={ pathname === '/apple' ? 'text-purple-700' : 'text-bold text-green-700' }>apple</Link>
                   <Link href="/banana" className={ pathname === '/banana' ? 'text-purple-700' : 'text-bold text-green-700' }>banana</Link>
               </div>
           </div>
       </div>
    )
}
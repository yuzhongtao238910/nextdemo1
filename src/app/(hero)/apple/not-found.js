import Link from "next/link"
export default function NotFound() {
    return (
        <div className="pt-48 z-30 absolute">
            <h2>局部的not-found的js</h2>
            <Link href="/" className="text-purple-700">Return Home</Link>
        </div>
    )
}
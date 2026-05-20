import Link from "next/link";


export default function Menu(){
    return (
        <div className="flex fixed top-0 z-10 gap-5 shadow-lg w-screen text-white font-montserrat">
            <Link href="/" className=" hover:bg-[#6D28D9] transition-colors duration-250 ease-in-out px-5 py-5 rounded-md">Home</Link>
            <Link href="/components/menu/sobre" className="hover:bg-[#6D28D9] transition-colors duration-250 ease-in-out px-5 py-5 rounded-md" >Sobre</Link>
            
        </div>
    )
}
import Link from "next/link";


export default function Menu(){
    return (
        <div className="text-white font-montserrat">
            <Link href="/" className="border-b-3 border-transparent hover:border-[#6D28D9] transition-colors duration-250 ease-in-out px-10 py-5 rounded-md">Home</Link>
            <Link href="#sobre" className="border-b-3 border-transparent hover:border-[#6D28D9] transition-colors duration-250 ease-in-out px-10 py-5 rounded-md" >Sobre</Link>

        </div>
    )
}
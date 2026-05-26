import Link from "next/link";


export default function Menu(){
    return (
        <div className="text-white font-montserrat gap-5">
            <Link href="/" className=" hover:bg-[#6D28D9] transition-colors duration-250 ease-in-out px-5 py-5 rounded-md">Home</Link>
            <Link href="#sobre" className="hover:bg-[#6D28D9] transition-colors duration-250 ease-in-out px-5 py-5 rounded-md" >Sobre</Link>
            
        </div>
    )
}
import Link from "next/link";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Rodape(){
    return (
        <div className="flex justify-center items-center bg-zinc-950 text-white text-xs font-montserrat p-4 gap-20">
            <div className="flex flex-col items-start justify-center gap-2">
                <p>Alan Sousa Mendes - Técnico T.I | Desenvolvedor Web</p>
                <p>© 2026 Todos os direitos reservados.</p>
            </div>
            <div className="flex flex-row items-end justify-center gap-2">
                <Link href="https://www.instagram.com/alann.ti/" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} className="hover:text-[#6D28D9] transition-colors duration-250 ease-in-out"/></Link>
                <Link href="https://github.com/lanzinn3" target="_blank" rel="noopener noreferrer"><FaGithub size={24} className="hover:text-[#6D28D9] transition-colors duration-250 ease-in-out"/></Link>
                <Link href="https://www.linkedin.com/in/alan-mendes3/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} className="hover:text-[#6D28D9] transition-colors duration-250 ease-in-out"/></Link>
            </div>
        </div>
    )
}
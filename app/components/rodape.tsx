import Link from "next/link";


export default function Rodape(){
    return (
        <div className="flex justify-center items-center bg-zinc-950 text-white text-xs font-montserrat p-4 gap-70">
            <div className="flex flex-col items-start justify-center gap-2">
                <p>Alan Sousa Mendes - Técnico T.I / Dev Web</p>
                <p>© 2026 Todos os direito reservados.</p>
            </div>
            <div className="flex flex-row items-end justify-center gap-2">
                <Link href="https://www.instagram.com/alann.ti/" target="_blank">insta</Link>
                <Link href="https://github.com/lanzinn3" target="_blank">git</Link>
                <Link href="https://www.linkedin.com/in/alan-mendes3/" target="_blank" >linkedin</Link>
            </div>
        </div>
    )
}
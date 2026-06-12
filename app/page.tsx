'use client'

import Menu from "./components/menu";
import SobrePage from "./components/sobre";
import nuvem from "./image/nuvem.png";
import Rodape from "./components/rodape";
import { FaAngleDown } from "react-icons/fa";
import Contato from "./components/contato";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="flex flex-col font-montserrat bg-zinc-800">
      <main className="w-full">
        <div className="flex flex-row fixed top-0 left-0 right-0 z-10 p-4 mx-4 shadow-lg" >
          <Menu/>
        </div>
        <div className="flex flex-col min-h-screen w-full items-center justify-center bg-linear-to-r from-zinc-950 from-55% to-zinc-900 to-45%">
          <div className="flex flex-col items-center text-center absolute left-1/2 -translate-x-1/2 text-white gap-2 select-none bg-center p-16" style={{backgroundImage: `url(${nuvem.src})`}}>
            <h1 className="text-8xl font-bold">alann.ti</h1>
            <span className="text-2xl font-bold">
              <Typewriter
                options={{
                  strings: ['Técnico em T.I | Desenvolvedor Web'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mt-auto pb-10 select-none float scroll-indicator">
            <p className="text-white text-xs">Deslize para baixo para mais informações</p>
            <FaAngleDown size={20} className="text-white" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <section id="sobre" className="flex min-h-screen justify-center items-center">
            <SobrePage />
          </section>
        </div>
        <div>
          <Rodape />
        </div>
      </main>
    </div>
  );
}
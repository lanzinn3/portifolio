import Menu from "./components/menu";
import SobrePage from "./components/sobre";
import nuvem from "./image/nuvem.png";
import Rodape from "./components/rodape";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-montserrat items-center justify-center bg-zinc-800 overflow-hidden">
      <main>
        <div className="flex fixed top-0 z-10 p-4 m-4 shadow-lg w-screen" >
          <Menu/>
        </div>
        <div className="h-screen w-screen flex items-center justify-center bg-linear-to-r from-zinc-950 from-55% to-zinc-900 to-45%">
          <div className="flex flex-col items-center text-center text-white gap-2 bg-center p-16 bg-no-repeat" style={{backgroundImage: `url(${nuvem.src})`}}>
            <h1 className="text-8xl font-bold">alann.ti</h1>
            <p className="text-2xl">Técnico em T.I / Dev. Web</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <section id="#sobre" className="flex min-h-screen justify-center items-center">
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

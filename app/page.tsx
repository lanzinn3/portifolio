import Menu from "./components/menu/page";
import nuvem from "./image/nuvem.png";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-montserrat items-center justify-center bg-zinc-800">
      <main>
        <div >
          <Menu/>
        </div>
        <div className="h-screen w-screen flex items-center justify-center bg-linear-to-r from-zinc-950 from-55% to-zinc-900 to-45%">
          <div className="flex flex-col items-center text-center text-white gap-2 bg-center p-16 bg-no-repeat" style={{backgroundImage: `url(${nuvem.src})`}}>
            <h1 className="text-7xl font-bold">Alan Sousa Mendes</h1>
            <p className="text-2xl">Técnico em T.I / Dev. Web</p>
          </div>
        </div>
      </main>
    </div>
  );
}

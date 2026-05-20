import Menu from "@/app/components/menu/page";


export default function SobrePage() {
  return (
    <div className=" bg-zinc-800 text-white">
      <Menu />
      <main className="flex flex-1 items-center justify-center text-center">
        <div className="">
            <h1 className="m-0"> Seja bem-vindo</h1>
            <h1 className="m-0"> Alan Sousa Mendes</h1>
            <p className="m-0">Desenvolvedor Full Stack</p>
            <p className="m-0">Técnico em Informática</p>
            <p className="m-0">Bacharelado em Sistema de Informação</p>
        </div>

      </main>
    </div>
  );
}

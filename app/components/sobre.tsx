import Image from "next/image";
import Alan from "@/app/image/alanformal.png";

export default function SobrePage() {
  return (
    <div className="w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6D28D9] to-purple-600 rounded-2xl blur-md opacity-50"></div>
            <Image 
              src={Alan} 
              alt="Alan Sousa Mendes" 
              className="relative w-70 h-70 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl border-2 border-zinc-700"
            />
          </div>
        </div>
        
        <div className="flex-1 text-white font-montserrat space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Sobre <span className="text-[#6D28D9]">mim</span>
          </h2>
          
          <div className="space-y-4 text-zinc-300 text-lg leading-relaxed">
            <p>
              Prazer, me chamo <strong className="text-white">Alan Sousa Mendes</strong>. Sou desenvolvedor Full Stack e Bacharel em Sistemas de Informação pela UNIFRAN. Minha trajetória na tecnologia começou com uma base sólida em hardware e infraestrutura.
            </p>
            <p>
              Desde 2022, atuo na Prefeitura Municipal de São Joaquim da Barra (SP), onde gerenciava redes e realizava manutenções de sistemas complexos. Essa vivência prática me deu uma visão profunda sobre como a tecnologia funciona além do código, me tornando um profissional muito mais analítico.
            </p>
            <p>
              Hoje, aplico todo esse conhecimento de infraestrutura no desenvolvimento web, criando aplicações robustas, escaláveis e focadas em solucionar problemas reais. Estou pronto e em constante evolução para integrar equipes de desenvolvimento e gerar impacto desde o primeiro dia.
            </p>
          </div>
          
          <div className="h-1 w-32 bg-gradient-to-r from-[#6D28D9] to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

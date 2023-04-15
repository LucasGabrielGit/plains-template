import { Info } from "lucide-react";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="md:h-screen flex justify-center items-center xl:flex-row max-md:gap-8 max-md:flex-col md:gap-6 max-md:my-8">
      <div className="shadow-md bg-gray-50 rounded-xl border border-gray-200 px-8 py-12 flex flex-col justify-center w-80 hover:border-purple-500 transition gap-y-12">
        <div className="flex flex-col gap-2 ">
          <span className="text-xs uppercase text-purple-600 font-semibold">
            Para você começar
          </span>
          <div className="flex items-end justify-between w-full">
            <strong className="text-gray-800 font-bold text-2xl">
              Essentials
            </strong>
            <div className="flex items-baseline">
              <small className="text-gray-800 font-normal text-sm">R$</small>
              <div className="flex items-baseline font-bold justify-end text-gray-800">
                <span className="text-xl">19,97</span>
                <small>/mês</small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="w-full py-4 px-2 border border-gray-800 flex items-center justify-center rounded-s rounded-r text-sm font-bold hover:bg-gray-800 transition hover:text-white">
            Assinar agora
          </button>
        </div>
        <div className="w-full border-b border-gray-200"></div>
        <div className="flex flex-col justify-stretch gap-2 text-xs h-36">
          <div className="flex justify-between flex-row">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>Até 3 usuários</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>Autoatendimento</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-50 shadow-md rounded-xl border border-gray-200 px-8 py-12 flex flex-col justify-center w-80 hover:border-purple-500 transition gap-y-12 relative">
        <div className="bg-orange-400 absolute w-2/4 text-center right-20 -top-3 py-2 rounded-md">
          <span className="text-sm font-bold">Mais vantajoso</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs uppercase text-purple-600 font-semibold">
            Para você decolar
          </span>
          <div className="flex items-end justify-between w-full">
            <strong className="text-gray-50 font-bold text-2xl">
              Ultimate
            </strong>
            <div className="flex items-baseline">
              <small className="font-normal text-sm">R$</small>
              <div className="flex items-baseline font-bold justify-end ">
                <span className="text-xl">29,97</span>
                <small>/mês</small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="py-4 px-2 bg-purple-600 flex items-center justify-center rounded-s rounded-r text-sm font-bold hover:brightness-90 transition hover:text-white w-full">
            Assinar agora
          </button>
        </div>
        <div className="w-full border-b border-gray-200"></div>
        <div className="flex flex-col gap-2 h-36 text-xs">
          <div className="flex justify-between flex-row">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>Usuários ilimitados</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>Suporte 24/7</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>CSM Dedicado</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
              <Check size={20} className="text-green-600" />
              <span>Treinamentos</span>
            </div>
            <Info size={18} className="text-zinc-400" />
          </div>
        </div>
      </div>
      <div className="shadow-md bg-gray-50 rounded-xl border border-gray-200 px-8 py-12 flex flex-col justify-center w-80 hover:border-purple-500 transition gap-y-12 gap-4">
        <div>
          <span className="text-xs uppercase text-purple-600 font-semibold mb-3">
            Para sua empresa
          </span>
          <div className="flex items-end justify-between w-full">
            <strong className="text-gray-800 font-bold text-2xl">
              Enterprise
            </strong>
          </div>
        </div>
        <div>
          <button className="w-full py-4 px-2 border  flex items-center justify-center rounded-s rounded-r text-sm font-bold hover:bg-gray-800 transition hover:text-white">
            Fale com a gente
          </button>
        </div>
        <div className="w-full border-b border-gray-200"></div>
        <div className="flex flex-col gap-2 text-xs h-36">
          <div className="flex justify-evenly flex-row gap-2 items-center">
            <Check size={20} className="text-green-600 w-16" />
            <span className="text-justify text-xs">
              Plano customizado especialmente para a necessidade de seu negocio
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

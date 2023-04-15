import { Info } from "lucide-react";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center flex-row gap-6">
      <div className="shadow-md rounded-xl border border-gray-200 px-8 py-12 flex flex-col justify-center">
        <span className="text-xl uppercase text-purple-600 font-semibold mb-3">
          Para você começar
        </span>
        <div className="flex items-end justify-between space-x-8">
          <strong className="text-gray-800 font-bold text-4xl">
            Essentials
          </strong>
          <div className="flex items-baseline">
            <small className="text-gray-800 font-normal text-sm">R$</small>
            <div className="flex items-baseline font-bold justify-end text-gray-800">
              <span className="text-2xl">19,97</span>
              <small>/mês</small>
            </div>
          </div>
        </div>
        <button className="py-4 px-2 border border-gray-800 mt-8 flex items-center justify-center rounded-md text-sm font-bold">
          Assinar agora
        </button>
        <div className="w-full border-b border-gray-200 my-8"></div>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            <Check size={20} className="text-green-600" />
            <span>Até 3 usuários</span>
          </div>
          <Info size={18} className="text-zinc-400" />
        </div>
        <div>
          <div>
            <Check size={20} className="text-green-600" />
            <span>Autoatendimento</span>
          </div>
          <Info size={18} className="text-zinc-400" />
        </div>
      </div>
      <div>Ultimate</div>
      <div>Enterprise</div>
    </main>
  );
}

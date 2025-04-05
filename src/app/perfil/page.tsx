import { Label } from "@/components/ui/label";

export default function Perfil_Usuario() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-violet-600 to-white">
      <main className="max-w-6xl mx-auto px-4 py-8">

        <div className="text-left mb-12">

          <h1 className="text-4xl md:text-4xl font-bold bg-gray-800text-blue-600 mb-4">
            SEU PERFIL SUPERINCRIVEL
          </h1>
        </div>

        <div className="space-y-8 w-full md:w-[600px]">
          
          <div className="relative h-32">
            <input
              type="text"
              value="Nome do Jogador"
              readOnly
              className="absolute left-0 top-0 w-full md:w-[500px] px-4 py-2 rounded-lg border-2
                       border-black focus:outline-none focus:border-black focus:ring-2
                       focus:ring-black transition-all shadow-sm placeholder:text-black
                       text-black bg-white cursor-default"
              aria-label="Nome do jogador cadastrado"
            />
          </div>

          <div className="relative h-32">
            <input
              type="text"
              value="Nome do time"
              readOnly
              className="absolute left-0 top-0 w-full md:w-[500px] px-4 py-2 rounded-lg border-2
                       border-black focus:outline-none focus:border-black focus:ring-2
                       focus:ring-black transition-all shadow-sm placeholder:text-black
                       text-black bg-white cursor-default"
              aria-label="Nome do jogador cadastrado"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="relative">
            
                <Label className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 bg-white border-2 
                           border-black px-2 py-1 rounded-full text-xs z-10">
                  Personagem
                </Label>

                <div className="p-4 aspect-square border-2 border-black rounded-lg bg-amber-50" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
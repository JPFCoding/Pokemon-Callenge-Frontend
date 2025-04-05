import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";//a importação do shadcn/ui que preciso (componentização, somente repito o componente já importado)
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-violet-600 to-white">
      <main className="max-w-6xl mx-auto px-4 py-8">

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gray-800text-blue-600 mb-4">
            BEM VINDO AO POKEMON CHALLENGE!
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Button asChild className="h-24">
            <Link href="/cadastro-jogador">Cadastrar</Link>

          </Button>
          
          <Link href="/personagens" legacyBehavior passHref>
            <Button 
              variant="outline" className="h-24 w-full rounded-2xl border-black" asChild 
            >
              <a>Ver algumas personagens</a>
            </Button>
          </Link>
          <Link href="/login" legacyBehavior passHref>
            <Button 
              variant="outline" className="h-24 w-full rounded-2xl border-black" asChild 
            >
              <a>Fazer login</a>
            </Button>
          </Link>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Nome do time</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input 
                type="text"
                placeholder="Digite o nome do time..."
                className="w-full border-2 border-black focus:border-black"
              />
        
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Ver personagens</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              // 
              <Card key={item} className="p-4 aspect-square flex items-center justify-center">
                <span className="text-gray-500">Personagem {item}</span>

              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
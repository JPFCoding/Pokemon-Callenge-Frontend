import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-violet-600 to-white">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Cabeçalho */}
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-4xl font-bold bg-gray-800text-blue-600 mb-4">
            ALGUMAS PERSONAGENS
          </h1>
        </div>

        {/* Container principal dos grids */}
        <div className="flex flex-col gap-8">
          
          {/* Primeiro Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative">
                <Label className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 bg-white border-2 border-black px-2 py-1 rounded-full text-xs z-10">
                  Personagem
                </Label>
                <div className="p-4 aspect-square border-2 border-black rounded-lg bg-amber-50" />
              </div>
            ))}
          </div>

          {/* Segundo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative">
                <Label className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 bg-white border-2 border-black px-2 py-1 rounded-full text-xs z-10">
                  Personagem
                </Label>
                <div className="p-4 aspect-square border-2 border-black rounded-lg bg-amber-50" />
              </div>
            ))}
          </div>

          {/* Terceiro Grid */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="relative">
                <Label className="absolute -top-3 left-1/2 -translate-x-1/2 w-40 bg-white border-2 border-black px-2 py-1 rounded-full text-xs z-10">
                  Personagem
                </Label>
                <div className="p-4 aspect-square border-2 border-black rounded-lg bg-amber-50" />
              </div>
            ))}
          </div>
          
        </div>
      </main>
    </div>
  )
}
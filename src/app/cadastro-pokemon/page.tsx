import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center  bg-gradient-to-b bg-violet-600 to-white">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6 ml-[150px]">

            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Selecione seu personagem!</h1>
              <p className="text-gray-500 mt-2">Bem vindo ao nosso desafio!</p>
            </div>
      
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="character">Digite o nome do personagem</Label>
                    <Input id="character" type="text" required />
                    
                    <Label className="block mt-4">Imagem do personagem</Label>
                    <div className="w-[380px] h-[376px] bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Arraste ou clique para enviar</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <Button className="w-full" type="submit">
                      Selecionar
                    </Button>
                    <Button className="w-full" type="submit">
                      Excluir do time
                    </Button>
                </div>
              
            </form>
        </div>
    </div>
  )
}
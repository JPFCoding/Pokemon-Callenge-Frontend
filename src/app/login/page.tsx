import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
  
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b bg-violet-600 to-white">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Faça login aqui! </h1>
              <p className="text-gray-500 mt-2">Bem vinda(o) ao nosso desafio!</p>
            </div>
            
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Coloque seu email aqui, futuro caçador de pokemons!</Label>
                <Input id="email" type="email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">sua senha super secreta!</Label>
                <Input id="password" type="password" required />
              </div>
              
              <Button className="w-full" type="submit">
                Entrar
              </Button>
            </form>
        </div>
    </div>
  )
}
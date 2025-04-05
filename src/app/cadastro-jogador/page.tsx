import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CadastrarJogador() {
    return (
        <div className="min-h-screen bg-gradient-to-b bg-violet-600 to-white">
            <main className="max-w-6xl mx-auto px-4 py-8">
                <div className="text-left mb-24">
                    <h1 className="text-4xl md:text-4xl font-bold text-black mb-4">
                        BEM VINDO(A) AO POKEMON CHALLENGE!
                    </h1>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Coluna Esquerda */}
                    <div className="space-y-8 w-full">
                        <div className="space-y-4">
                            <Label htmlFor="nome" className="text-black font-medium">
                                Nome completo
                            </Label>
                            <Input
                                id="nome"
                                type="text"
                                placeholder="Qual o seu nome?"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="email" className="text-black font-medium">
                                E-mail
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Qual o seu email?"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="apelido" className="text-black font-medium">
                                Apelido
                            </Label>
                            <Input
                                id="apelido"
                                type="text"
                                placeholder="Algum apelido?"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>
                    </div>

                    <div className="space-y-8 w-full">
                        <div className="space-y-4">
                            <Label htmlFor="telefone" className="text-black font-medium">
                                Celular
                            </Label>
                            <Input
                                id="telefone"
                                type="tel"
                                placeholder="Tem celular?"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="senha" className="text-black font-medium">
                                Senha
                            </Label>
                            <Input
                                id="senha"
                                type="password"
                                placeholder="Digite uma senha, por favor"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="confirmarSenha" className="text-black font-medium">
                                Confirmar Senha
                            </Label>
                            <Input
                                id="confirmarSenha"
                                type="password"
                                placeholder="Confirme essa senha, certo?"
                                className="w-full md:w-[500px] px-4 py-2 rounded-lg border-2 border-black
                                       focus:outline-none focus:border-black focus:ring-2 focus:ring-black
                                       transition-all shadow-sm placeholder:text-black-700 text-black"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2 flex justify-center mt-12">
                        <Button
                            type="submit"
                            className="bg-black text-white px-12 py-6 rounded-full hover:bg-gray-900
                                   transition-colors text-lg font-bold"
                        >
                            Cadastrar
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    )
}
import type { Metadata } from "next";
import { Inter } from "next/font/google"; //fonte principal do layout que vou usar.
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Challenge Frontend",//title estava Meu Projeto Login
  description: "Páginas responsivas usando oque me pediram",// description estava Página de login responsiva
};

// Define o componente RootLayout como o layout base da aplicação
// Este componente geralmente é usado em frameworks como Next.js para envolver todo o conteúdo da página
export default function RootLayout({
  children, // Recebe conteúdo filho que será renderizado dentro do layout
}: Readonly<{ // Tipo das props - garante imutabilidade
  children: React.ReactNode; // Aceita qualquer conteúdo React válido (componentes, elementos JSX, etc.)
}>) {
  return (
    // Define a estrutura HTML básica com idioma português do Brasil
    <html lang="pt-BR">
      {/* Corpo do documento com classe de estilo aplicada */}
      <body className={inter.className}> 
        {children} {/* Renderiza o conteúdo filho passado para o layout */}
      </body>
    </html>
  );
}

{/*export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}*/}
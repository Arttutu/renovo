import { Ubuntu } from "next/font/google";
import "./globals.css";
import Menu from "./Componentes/Menu";
import BotaoCima from "./Componentes/BotaoCima";
import Rodape from "./Componentes/Rodape";


const fonte = Ubuntu({ subsets: ["latin"] , weight:"400" }, );


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${fonte.className} bg-[url('/assets/img/body-bg.png')] bg-repeat`}
      >
        <Menu />
        <BotaoCima />
        {children}
        <Rodape />
      </body>
    </html>
  );
}

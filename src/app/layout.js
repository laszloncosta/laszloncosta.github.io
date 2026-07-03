import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio Acadêmico",
  description: "Pesquisador na Universidade Federal do Ceará",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased text-gray-900 bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}

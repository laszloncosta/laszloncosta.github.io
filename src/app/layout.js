import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prof. Laszlon Costa - Academic Portfolio",
  description: "Professor and Researcher at the Federal University of Cariri (UFCA)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased text-gray-900 bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}

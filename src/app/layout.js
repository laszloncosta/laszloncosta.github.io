import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prof. Laszlon Costa - Academic Portfolio",
  description: "Professor and Researcher at the Federal University of Cariri (UFCA). Research focuses on 5G/6G, O-RAN, and Massive MIMO.",
  openGraph: {
    title: "Prof. Laszlon Costa - Academic Portfolio",
    description: "Professor and Researcher at the Federal University of Cariri (UFCA)",
    url: "https://laszloncosta.github.io",
    siteName: "Prof. Laszlon Costa",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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

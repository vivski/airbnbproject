import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./componentes/navbar/Navbar";
import ClientOnly from "./componentes/ClientOnly";
import RegisterModal from "./componentes/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";


const font = Nunito({ subsets: ["latin"] }); 

export const metadata: Metadata = {
  title: "Airbnb",
  description: "meu airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider />
      {/* <RegisterModal /> */}
         <Navbar /> 
      </ClientOnly>
      {children} 
      </body>
    </html>
  );
}

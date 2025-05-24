import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sigmar_One, Agbalumo, Rubik_Doodle_Shadow, Dosis, Joti_One, Radley, Gwendolyn, Borel } from "next/font/google";

const borel = Borel({
  variable: "--font-borel",
  subsets: ["latin"],
  weight: "400",
});

const gwendolyn = Gwendolyn({
  variable: "--font-gwendolyn",
  subsets: ["latin"],
  weight: "400",
});

const radley = Radley({
  variable: "--font-radley",
  subsets: ["latin"],
  weight: "400",
});

const jotiOne = Joti_One({
  variable: "--font-joti-one",
  subsets: ["latin"],
  weight: "400",
});

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const rubikDoodleShadow = Rubik_Doodle_Shadow({
  variable: "--font-rubik-doodle-shadow",
  subsets: ["latin"],
  weight: "400",
});

const sigmar = Sigmar_One({
  variable: "--font-sigmar",
  subsets: ["latin"],
  weight: "400",
});

const agbalumo = Agbalumo({
  variable: "--font-agbalumo",
  subsets: ["latin"],
  weight: "400",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cachaça Nogueira",
  description: "Cachaça artesanal de Viçosa do Ceará",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" >
      <body
        className={`
          ${geistSans.variable}
         ${geistMono.variable}
          ${sigmar.variable}
           ${agbalumo.variable} 
           ${rubikDoodleShadow.variable}
           ${dosis.variable}
          ${jotiOne.variable}
          ${radley.variable}
          ${gwendolyn.variable}
          ${borel.variable}
           antialiased`}
      >
        {children}
      </body>
    </html >
  );
}

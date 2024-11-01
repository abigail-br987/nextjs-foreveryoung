import type { Metadata } from "next";
import "./globals.css"; 
import Footer from "@/components/sections/Footer";
export const metadata: Metadata = {
  title: "ForeverYoung Voluntariado",
  description: "Organización",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&family=Zain:wght@200;300;400;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased overflow-x-hidden flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <Footer className="opacity-0"/>
        <Footer className="fixed bottom-0 left-0"/>
      </body>
    </html>
  );
}

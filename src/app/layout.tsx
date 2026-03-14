import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "CebanBarber — Precision Cuts. Timeless Style.",
    template: "%s | CebanBarber",
  },
  description:
    "New York's premier barbershop. Expert haircuts, beard trims, hot towel shaves, and more. Walk-ins welcome.",
  keywords: ["barbershop", "haircut", "beard trim", "New York", "CebanBarber"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

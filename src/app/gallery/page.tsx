import type { Metadata } from "next";
import GalleryPageContent from "@/components/pages/GalleryPageContent";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galeria CebanBarber — skin fade-uri precise, tunsori clasice, bărbi sculptate și mai mult. Inspiră-te din lucrările noastre din Chișinău.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}

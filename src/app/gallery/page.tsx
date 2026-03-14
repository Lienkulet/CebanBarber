import type { Metadata } from "next";
import GalleryPageContent from "@/components/pages/GalleryPageContent";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse CebanBarber's gallery — precision fades, classic cuts, beard sculpts, and more.",
};

export default function GalleryPage() {
  return <GalleryPageContent />;
}

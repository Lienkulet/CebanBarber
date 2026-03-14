import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Descoperă toate serviciile CebanBarber — tunsori, contur barbă, bărbierit cu prosop fierbinte, skin fade și multe altele. Prețuri accesibile în Chișinău.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

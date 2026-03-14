import type { Metadata } from "next";
import ServicesPageContent from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore CebanBarber's full menu — haircuts, beard trims, hot towel shaves, fades, and more.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}

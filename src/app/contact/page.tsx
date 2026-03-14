import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează CebanBarber — adresă, telefon, program de lucru și hartă. Str. Ion Doncev 2, Chișinău. Suntem deschiși zilnic.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}

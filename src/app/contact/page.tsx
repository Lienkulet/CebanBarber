import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find CebanBarber — address, phone, hours of operation, and map.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}

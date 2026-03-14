import type { Metadata } from "next";
import HomePageContent from "@/components/pages/HomePageContent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomePageContent />;
}

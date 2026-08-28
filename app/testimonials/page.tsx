import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import TestimonialsHero from "./components/TestimonialsHero";
import {
  CapitalIndustrialHighlight,
  MarquetteHighlight,
} from "./components/LinkedInHighlights";
import InTheRoom from "./components/InTheRoom";
import CaseStudies from "./components/CaseStudies";

export const metadata = {
  title: "Testimonials | ZPT Partners",
  description:
    "LinkedIn highlights, photos from the room, and case studies from the teams ZPT works with.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        <TestimonialsHero />
        <CapitalIndustrialHighlight />
        <MarquetteHighlight />
        <InTheRoom />
        <CaseStudies />
        <SubPageFinalCta backgroundImage="/landing_page/Our Work.webp" />
      </main>
      <Footer />
    </>
  );
}

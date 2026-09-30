import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import TestimonialsHero from "./components/TestimonialsHero";
import {
  CapitalIndustrialHighlight,
  MarquetteHighlight,
  NewVintageHighlight,
} from "./components/LinkedInHighlights";
import InTheRoom from "./components/InTheRoom";
import OurWorkTeaser from "./components/OurWorkTeaser";

export const metadata = {
  title: "Testimonials | ZPT Partners",
  description:
    "Client quotes, LinkedIn highlights, and photos from the room with the teams ZPT works with.",
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
        <NewVintageHighlight />
        <MarquetteHighlight />
        <CapitalIndustrialHighlight />
        <InTheRoom />
        <OurWorkTeaser />
        <SubPageFinalCta backgroundImage="/landing_page/Our Work.webp" />
      </main>
      <Footer />
    </>
  );
}

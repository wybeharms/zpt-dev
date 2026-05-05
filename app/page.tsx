import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  TrustedBy,
  OurApproach,
  HowWeWork,
  WatchZpt,
  WhyZpt,
  IsZptRight,
  TeamPreview,
  FinalCta,
} from "./components/Sections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <OurApproach />
        <HowWeWork />
        <WatchZpt />
        <WhyZpt />
        <IsZptRight />
        <TeamPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

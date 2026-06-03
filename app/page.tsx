import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  TrustedBy,
  OurApproach,
  WatchZpt,
  WhyZpt,
  IsZptRight,
  TeamPreview,
  FinalCta,
} from "./components/Sections";
import Footer from "./components/Footer";

export const metadata = {
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ZPT Partners",
  url: "https://www.zptpartners.com",
  logo: "https://www.zptpartners.com/apple-touch-icon.png",
  description:
    "ZPT builds a custom AI directory for your company. Your team uses it through Claude, ChatGPT, or any compatible app. You own everything.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <OurApproach />
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

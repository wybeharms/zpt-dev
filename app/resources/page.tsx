import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import ResourcesHero from "./components/ResourcesHero";
import OnePagerDownload from "./components/OnePagerDownload";
import Recordings from "./components/Recordings";
import EmailSignup from "./components/EmailSignup";

export const metadata = {
  title: "Resources | ZPT Partners",
  description:
    "Documents, recordings, and references for teams exploring or starting a ZPT engagement.",
  alternates: {
    canonical: "/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <main>
        <ResourcesHero />
        <OnePagerDownload />
        <Recordings />
        <EmailSignup />
        <SubPageFinalCta backgroundImage="/landing_page/What You Get page.webp" />
      </main>
      <Footer />
    </>
  );
}

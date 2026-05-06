import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import HowItWorksHero from "./components/HowItWorksHero";
import EntryPoints from "./components/EntryPoints";
import ToolsSetup from "./components/ToolsSetup";
import BeyondDefaults from "./components/BeyondDefaults";
import WhatYouGet from "./components/WhatYouGet";

export const metadata = {
  title: "How It Works | ZPT Partners",
  description:
    "How a ZPT engagement comes together. Pick an entry point, get the tools set up, and grow from there.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        <HowItWorksHero />
        <EntryPoints />
        <ToolsSetup />
        <BeyondDefaults />
        <WhatYouGet />
        <SubPageFinalCta backgroundImage="/landing_page/How It Works page.png" />
      </main>
      <Footer />
    </>
  );
}

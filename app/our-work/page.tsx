import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import OurWorkHero from "./components/OurWorkHero";
import FiveSteps from "./components/FiveSteps";
import ExampleWorkflows from "./components/ExampleWorkflows";

export const metadata = {
  title: "Our Work | ZPT Partners",
  description:
    "The five-phase process behind every ZPT engagement, plus example workflows we have shipped.",
};

export default function OurWorkPage() {
  return (
    <>
      <Header />
      <main>
        <OurWorkHero />
        <FiveSteps />
        <ExampleWorkflows />
        <SubPageFinalCta backgroundImage="/landing_page/How It Works page.webp" />
      </main>
      <Footer />
    </>
  );
}

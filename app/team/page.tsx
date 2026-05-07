import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import TeamHero from "./components/TeamHero";
import TeamGrid from "./components/TeamGrid";
import JoinUs from "./components/JoinUs";

export const metadata = {
  title: "The Team | ZPT Partners",
  description:
    "A small, talented, distributed team of AI experts shipping across 10+ organizations.",
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <TeamHero />
        <TeamGrid />
        <JoinUs />
        <SubPageFinalCta />
      </main>
      <Footer />
    </>
  );
}

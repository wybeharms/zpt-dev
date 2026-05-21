import Header from "../components/Header";
import Footer from "../components/Footer";
import SubPageFinalCta from "../components/SubPageFinalCta";
import TechnologyHero from "./components/TechnologyHero";
import AgentConcept from "./components/AgentConcept";
import AgentInPractice from "./components/AgentInPractice";
import AgentArchitecture from "./components/AgentArchitecture";
import AgentHome from "./components/AgentHome";

export const metadata = {
  title: "Technology | ZPT Partners",
  description:
    "What an agent is, what's inside it, and where it runs. The architecture in plain terms.",
};

export default function TechnologyPage() {
  return (
    <>
      <Header />
      <main>
        <TechnologyHero />
        <AgentConcept />
        <AgentInPractice />
        <AgentArchitecture />
        <AgentHome />
        <SubPageFinalCta backgroundImage="/landing_page/Technology.webp" />
      </main>
      <Footer />
    </>
  );
}

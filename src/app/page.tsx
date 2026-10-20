import Plofil from "@/components/plofil"
import Herosection from "@/components/hero-section";
import Aboutsection from "@/components/about-section";
import Journeysection from "@/components/journey-section";
import Skillssection from "@/components/skills-section";
import Portfoliosection from "@/components/portfolio-section";
import Contactsection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:flex px-5 mb-20">
    <Plofil />
    <main>
      <Herosection />
      <Aboutsection />
      <Journeysection />
      <Skillssection />
      <Portfoliosection />
      <Contactsection />
    </main>
    </div>
  );
}

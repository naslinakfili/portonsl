import Plofil from "@/components/plofil";
import Herosection from "@/components/hero-section";
import Aboutsection from "@/components/about-section";
import Journeysection from "@/components/journey-section";
import Skillssection from "@/components/skills-section";
import Portfoliosection from "@/components/portfolio-section";
import Contactsection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="relative w-full max-w-full overflow-x-hidden px-5 sm:px-[5vw] flex flex-col lg:flex-row justify-start items-center lg:items-start min-h-screen">
      <aside className="w-full lg:w-[350px] lg:shrink-0 lg:fixed lg:left-[5vw] lg:top-0 lg:h-screen lg:flex lg:items-center lg:z-20 my-10 lg:my-0 flex justify-center">
        <Plofil />
      </aside>
      <main className="w-full max-w-full lg:max-w-3xl xl:max-w-4xl lg:ml-[390px] xl:ml-[420px] pb-24">
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

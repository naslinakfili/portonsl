import Plofil from "@/components/plofil"
import Herosection from "@/components/hero-section";
import Aboutsection from "@/components/about-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center md:flex px-5">
    <Plofil />
    <main>
      <Herosection />
      <Aboutsection />
    </main>
    </div>
  );
}

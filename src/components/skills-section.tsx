import { FaCss3Alt } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiShadcnui,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React JS", icon: SiReact },
  { name: "Next JS", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Figma", icon: SiFigma },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "Node JS", icon: SiNodedotjs },
  { name: "Supabase", icon: SiSupabase },
];

export default function Skillssection() {
  return (
    <section id="Skills" className="py-16 sm:py-[68px]">
      <h4 className="flex justify-center items-center w-fit border border-bor rounded-3xl px-5 py-2 text-[12px] uppercase tracking-wider mb-10 sm:mb-[53px]">
        MY SKILLS
      </h4>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-10">
        My <span className="text-hiju">Expertise</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3.5 sm:gap-5">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="transin flex justify-center items-center flex-col gap-2 border-2 border-ex aspect-square p-2 sm:p-3 rounded-[20px] text-[11px] sm:text-[13px] group hover:border-hiju text-expertise hover:text-hiju"
          >
            <Icon
              role="img"
              aria-label={name}
              className="transin text-3xl sm:text-4xl group-hover:scale-110"
            />
            <p className="transin text-center font-medium leading-tight">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

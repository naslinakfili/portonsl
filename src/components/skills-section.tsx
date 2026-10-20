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
    <section>
      <h4 className="flex justify-center items-center w-fit border rounded-3xl px-4 py-2.25 text-[12px]">
        MY JOURNEY
      </h4>
      <div className="text-[48px] leading-15">
        My <span className="text-hiju">Expertise</span>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,104px)] justify-between gap-4">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="transin flex justify-center items-center flex-col gap-1 border-2 border-ex w-26 h-26 p-3 rounded-[20px] text-[12px] group hover:border-hiju text-expertise"
          >
            <Icon
              role="img"
              aria-label={name}
              size="4em"
              className="transin group-hover:text-hiju group-hover:scale-110"
            />
            <p className="transin group-hover:text-hiju">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

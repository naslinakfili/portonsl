export default function Journeysection() {
  return (
    <section id="Resume" className="py-16 sm:py-[68px]">
      <div>
        <h4 className="flex justify-center items-center w-fit border border-bor rounded-3xl px-5 py-2 text-[12px] uppercase tracking-wider mb-10 sm:mb-[53px]">
          MY JOURNEY
        </h4>
        <div className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-12">
          A foundation built <span className="text-hiju">by doing</span>
        </div>

        <div className="relative pl-8 sm:pl-10 space-y-12 border-l border-neutral-700 ml-3">
          {/* Item 1: Experience */}
          <div className="relative group">
            <span
              aria-hidden="true"
              className="absolute -left-[39px] sm:-left-[47px] top-1.5 size-3 sm:size-3.5 rounded-full bg-neutral-500 group-hover:bg-hiju transition-colors duration-300"
            />
            <p className="text-xs uppercase tracking-wider text-hiju font-medium mb-1">
              EXPERIENCE
            </p>
            <div className="text-xl sm:text-2xl font-light text-white mb-2">
              Frontend Developer
            </div>
            <div className="text-sm sm:text-base text-tex leading-relaxed max-w-2xl">
              Built responsive pages and reusable components from Figma designs,
              with Next.js routing, product search, and Supabase authentication for Website VEXOR e-commerce.
            </div>
          </div>

          {/* Item 2: Education */}
          <div className="relative group">
            <span
              aria-hidden="true"
              className="absolute -left-[39px] sm:-left-[47px] top-1.5 size-3 sm:size-3.5 rounded-full bg-neutral-500 group-hover:bg-hiju transition-colors duration-300"
            />
            <p className="text-xs uppercase tracking-wider text-hiju font-medium mb-1">
              EDUCATION
            </p>
            <div className="text-xl sm:text-2xl font-light text-white mb-2">
              MAN 3 Pidie
            </div>
            <div className="text-sm sm:text-base text-tex leading-relaxed max-w-2xl">
              Graduated in 2026. Continuing to build practical frontend skills
              through personal projects and independent learning.
            </div>
          </div>

          {/* Item 3: Training */}
          <div className="relative group">
            <span
              aria-hidden="true"
              className="absolute -left-[39px] sm:-left-[47px] top-1.5 size-3 sm:size-3.5 rounded-full bg-neutral-500 group-hover:bg-hiju transition-colors duration-300"
            />
            <p className="text-xs uppercase tracking-wider text-hiju font-medium mb-1">
              TRAINING
            </p>
            <div className="text-xl sm:text-2xl font-light text-white mb-2">
              ROADMAP.SH
            </div>
            <div className="text-sm sm:text-base text-tex leading-relaxed max-w-2xl">
              Following the frontend roadmap on roadmap.sh and applying what I
              learn through hands-on projects.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Herosection() {
  return (
    <section id="Introduce" className="py-16 sm:py-[68px]">
      <div className="block">
        <h4 className="flex justify-center items-center w-fit border border-bor rounded-3xl px-5 py-2 text-[12px] uppercase tracking-wider mb-10 sm:mb-[53px]">
          INTRODUCE
        </h4>
        <div className="text-3xl sm:text-5xl lg:text-6xl font-light leading-tight sm:leading-[1.15] mb-8">
          Hi, I&apos;m
          <span className="text-hiju"> Naslin</span>
        </div>

        <div className="text-base sm:text-lg text-tex leading-relaxed mb-10 max-w-2xl">
          a frontend developer
          turning Figma designs into responsive web experiences.
          One thoughtful component at a time.
        </div>

        <a
          href="#Portfolio"
          className="transin inline-flex justify-center items-center border border-bor hover:border-hiju text-white hover:text-hiju px-8 py-3 rounded-full text-xs uppercase tracking-wider"
        >
          EXPLORE MY WORK
        </a>
      </div>
    </section>
  );
}

export default function Journeysection() {
  return (
    <section>
      <div>
        <h4 className="flex justify-center items-center w-fit border rounded-3xl px-4 py-2.25 text-[12px]">
          MY JOURNEY
        </h4>
        <div className="text-[48px] leading-15">
          A foundation built by doing
        </div>

        <div className="relative pl-10">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-2.5 top-3 w-px -translate-x-1/2 bg-neutral-700"
          />
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-10 top-1/2 size-5 -translate-y-1/2 rounded-full bg-neutral-500"
            />
            <p className="text-[14px]" >EXPERIENCE</p>
          </div>
          <div className="text-[24px]">Frontend Developer</div>
          <div className="text-[14px] text-tex">
            Built responsive pages and reusable components from Figma designs,
            with Next.js routing, product search, and Supabase authentication.
            Website VEXOR e-commerce
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-10 top-1/2 size-5 -translate-y-1/2 rounded-full bg-neutral-500"
            />
            <p className="text-[14px]">EDUCATION</p>
          </div>
          <div className="text-[24px]">MAN 3 Pidie</div>
          <div className="text-[14px] text-tex">
            Graduated in 2026. Continuing to build practical frontend skills
            through personal projects and independent learning.
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-10 top-1/2 size-5 -translate-y-1/2 rounded-full bg-neutral-500"
            />
            <p className="text-[14px]">TRAINING</p>
          </div>
          <div className="text-[24px]">ROADMAP.SH</div>
          <div className="text-[14px] text-tex">
            Following the frontend roadmap on roadmap.sh and applying what I
            learn through hands-on projects.
          </div>
        </div>
      </div>
    </section>
  );
}

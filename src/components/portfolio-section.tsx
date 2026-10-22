import Img from "next/image";
import vexornsl from "@/../public/vexornsl.png";

export default function Portfoliosection() {
  return (
    <section id="Portfolio" className="py-16 sm:py-[68px]">
      <h4 className="flex justify-center items-center w-fit border border-bor rounded-3xl px-5 py-2 text-[12px] uppercase tracking-wider mb-10 sm:mb-[53px]">
        PORTFOLIO
      </h4>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-10">
        Featured <span className="text-hiju">Portfolio</span>
      </div>

      <div className="flex flex-col gap-10">
        <div className="group">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://vexornsl.vercel.app"
            className="block overflow-hidden rounded-[20px] border border-bor group-hover:border-hiju transin"
          >
            <Img
              src={vexornsl}
              alt="vexorweb"
              className="w-full h-auto transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            />
          </a>
          <h2 className="text-xl sm:text-2xl font-light text-white mt-4">
            Vexor nsl - demo live website
          </h2>
        </div>
      </div>
    </section>
  );
}

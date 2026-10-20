import Img from "next/image";
import vexornsl from "@/../public/vexornsl.png"

export default function Portfoliosection() {
  return (
    <section>
      <h4 className="flex justify-center items-center w-fit border rounded-3xl px-4 py-2.25 text-[12px]">
        PORTFOLIO
      </h4>
      <div className="text-[48px] leading-15">
        Featured <span className="text-hiju">Portfolio</span>
      </div>
      
      <a target="_blank" href="https://vexornsl.vercel.app">
        <div className="group overflow-hidden rounded-[20px]">
            <Img src={vexornsl} alt="vexorweb" className="transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"></Img>
        </div>
      </a>

      <h2 className="text-[24px]">Vexor nsl - demo live website</h2>
    </section>
  );
}

export default function Herosection() {
  return (
    <section id="Introduce">
      <div className="block">
        <h4 className="flex justify-center items-center w-fit border rounded-3xl px-4 py-2.25 text-[12px]">
          INTRODUCE
        </h4>
        <div className="text-[44px]">Hi, I'm
          <span className="text-hiju">{" "}Naslin{" "}</span>A frontend developer turning Figma designs into
          responsive web experiences — one thoughtful component at a time.
        </div>

        <button type="button" className="border">
          EXPLORE MY WORK
        </button>
      </div>
    </section>
  );
}

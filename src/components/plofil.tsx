import Image from "next/image";
import naslin from "@/../public/naslin123.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Plofil() {
  return (
    <div className="w-full max-w-[350px]">
      <div className="flex flex-col border-2 border-bor p-6 sm:p-7.5 gap-6 sm:gap-7.5 rounded-[30px] bg-background">
        <header className="flex justify-between items-center">
          <h1 className="text-[30px] font-bold">NASLIN</h1>
          <span className="text-[14px] text-tex max-w-[130px] text-right">Frontend Developer</span>
        </header>

        <div className="flex justify-center">
          <Image
            src={naslin}
            alt="NASLIN profile icon"
            className="w-full max-w-[260px] h-55 object-cover object-top rounded-[30px]"
            priority
          />
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-[16px] break-all">naslinakfili1@gmail.com</span>
          <span className="text-[20px] text-tex mt-1">Base in Aceh, ID</span>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transin flex justify-center items-center group border-2 border-bor hover:border-hiju rounded-full p-2 w-12.5 h-12.5"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="transin text-tex group-hover:text-hiju" size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transin flex justify-center items-center group border-2 border-bor hover:border-hiju rounded-full p-2 w-12.5 h-12.5"
            aria-label="GitHub profile"
          >
            <FaGithub className="transin text-tex group-hover:text-hiju" size={20} />
          </a>
        </div>

        <a
          href="#contact"
          className="transin flex justify-center items-center border-2 border-hiju bg-hiju text-black font-medium p-3.5 w-full rounded-[30px] hover:bg-transparent hover:text-hiju uppercase tracking-wide text-sm"
        >
          Let&apos;s Talk
        </a>

        <footer className="flex justify-center text-center">
          <span className="text-tex text-xs">© 2026 Naslin Akfili. All Rights Reserved</span>
        </footer>
      </div>
    </div>
  );
}

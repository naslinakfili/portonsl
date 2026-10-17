import Image from "next/image";
import naslin from "@/../public/naslin123.png";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Plofil() {
  return (
    <main className="flex justify-center mb-10 mt-20">
      <div className="flex flex-col border-2 p-7.5 gap-7.5 rounded-[30px]">
        <header className="flex justify-between items-center">
          <h1 className="text-[30px]">NASLIN</h1>
          <span className="text-[14px]">Frontend Developer</span>
        </header>

        <div className="flex justify-center">
          <Image src={naslin} alt="NASLIN profile icon" className="w-65 h-55 object-cover object-top rounded-[30px]"/>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-[16px]">naslinakfili1@gmail.com</span>
          <span className="text-[20px]">Base in Aceh, ID</span>
        </div>

        <div className="flex gap-4 justify-center">
          <a href="#" className="transin flex justify-center items-center group border-2 border-bor hover:border-hiju   rounded-full p-2 w-12.5 h-12.5 ">
            <FaLinkedin className="transin text-tex group-hover:text-hiju " size={20} />
          </a>
          <a href="#" className="transin flex justify-center items-center group border-2 border-bor hover:border-hiju   rounded-full p-2 w-12.5 h-12.5 ">
            <FaGithub className="transin text-tex group-hover:text-hiju " size={20} />
          </a>
        </div>

        <button type="button" className="transin flex justify-center items-center border-2 border-hiju bg-hiju p-3.75 w-full rounded-[30px] hover:bg-transparent">Let,s Talk</button>

        <footer className="flex justify-center">
          <span className="text-tex">© 2026 Naslin Akfili. All Rights Reserved</span>
        </footer>
      </div>
    </main>
  );
}

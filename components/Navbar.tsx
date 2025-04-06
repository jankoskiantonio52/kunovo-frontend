"use client";

import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import NavDivider from "./NavDivider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1080) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full max-h-[7.5vh] h-[80px] fixed top-0 z-[1000] max-w-[2560px] ${
          scrolled ? "bg-[#0ABB08] text-white" : "bg-[#ffffffde] text-[#0ABB08]"
        } transition-all duration-300 xl:block hidden`}
      >
        <div className="w-auto h-full flex justify-center items-center align-middle gap-x-[7.5%]">
          <NavButton href="/" name="Дома"></NavButton>
          <NavDivider></NavDivider>
          <NavButton href="/" name="Новости"></NavButton>
          <NavDivider></NavDivider>
          <NavButton href="/" name="За Куново"></NavButton>
          <NavDivider></NavDivider>
          <NavButton href="/" name="Контактирај нѐ"></NavButton>
        </div>
      </div>
      <div className="w-full max-h-[7.5vh] h-[7.5vh] bg-[#0ABB08] text-white">test</div>
    </>
  );
}

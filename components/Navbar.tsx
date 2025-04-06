"use client";

import { useEffect, useState } from "react";
import NavButton from "./NavButton";
import NavDivider from "./NavDivider";
import { usePathname } from "next/navigation";

export function Overlay() {
  return;
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [overlayTransform, setOverlayTransform] = useState("translateX(0)");
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

  useEffect(() => {
    if (sideMenuOpen) {
      setOverlayTransform("translateX(100vw)");
    } else {
      setTimeout(() => {
        setOverlayTransform("translateX(-100vw)");
      }, 300);
    }
  }, [sideMenuOpen]);

  const style = `w-full max-h-[7.5vh] h-[80px] fixed top-0 z-[100] max-w-[2560px] ${
    scrolled ? "bg-[#0ABB08] text-white" : "bg-[#ffffffde] text-[#0ABB08]"
  } transition-all duration-300 xl:block hidden`;
  const styleStatic = `w-full max-h-[7.5vh] h-[80px] fixed top-0 z-[100] max-w-[2560px] transition-all duration-300 xl:block hidden bg-[#0ABB08] text-white`;
  return (
    <>
      <div className={pathname === "/" ? style : styleStatic}>
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
      <>
        <div className="w-full max-h-[7.5vh] h-[7.5vh] bg-[#0ABB08] text-white fixed top-0 z-[100] xl:hidden flex items-center px-5">
          <div
            onClick={() => setSideMenuOpen(!sideMenuOpen)}
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <img src="/menu.svg"></img>
          </div>
        </div>
        <div
          className={`w-[75vw] h-screen z-[100] bg-blue-400 fixed top-[7.5vh] text-white ${
            !sideMenuOpen ? "translate-x-[-75vw]" : "translate-x-0"
          } transition-transform duration-300 ease-in-out xl:hidden block`}
        ></div>
        <div
          style={{ transform: overlayTransform }}
          onClick={() => setSideMenuOpen(false)}
          className={`bg-black ${
            sideMenuOpen ? "opacity-40" : "opacity-0"
          } w-screen h-screen fixed top-0 left-[-100vw] transition-opacity duration-300 ease-in-out xl:hidden block`}
        ></div>
      </>
    </>
  );
}

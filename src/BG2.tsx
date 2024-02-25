"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
export function BG2() {
  const controls = useAnimation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     if (scrollY > 100) {
  //       controls.start({
  //         opacity: 1,
  //         scale: 1.1,
  //         transition: { duration: 0.3 },
  //       });
  //     } else {
  //       controls.start({ opacity: 1, scale: 1, transition: { duration: 0.3 } });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [controls]);

  return (
    <div className="h-[52.1rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Put video here     */}
    </div>
  );
}

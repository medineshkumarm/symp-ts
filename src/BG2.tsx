"use client";
import { SparklesCore } from "./components/effects/sparkles";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import CountDown from "./UI/CountDown";

import {Button} from './components/ui/button'


const AnimatedTitle = motion.h1;
export function BG2() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold and animation properties as needed
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        controls.start({
          opacity: 1,
          scale: 1.1,
          transition: { duration: 0.3 },
        });
      } else {
        controls.start({ opacity: 1, scale: 1, transition: { duration: 0.3 } });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="h-[52rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <AnimatedTitle
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20"
      >
        PEC Symposium
      </AnimatedTitle>
      <p>Gather at panimalar for excitiing events</p>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        <Button className='text-white text-2xl bg-black border-[.1px] hover:bg-amber-200 hover:text-black px-60 py-8 rounded m-2'>Register Now</Button>
        <CountDown/>
      </div>
    </div>
  );
}

// export function BG1() {
//   return (
//     <div className="h-[40rem] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <div className="w-full absolute inset-0 h-screen">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.2}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>
//       <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
//         Build great products
//       </h1>
//     </div>
//   );
// }

import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
  const [isSplineLoaded, setIsSplineLoaded] = React.useState(false);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={isSplineLoaded ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={isSplineLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4 mt-24 md:mt-0 order-1"
      >
        <h1 className="text-[28px] sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word">
          Integrated mRNA Development.<br/>
          Built for Preclinical Execution.
        </h1>
        
        <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
          Kevda Bioworks is a premium wet-lab CRO supporting biotech and biopharma teams across molecular biology, cell-based assays, protein characterization, and mRNA/LNP delivery.
        </p>

        <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl whitespace-pre-wrap">
          {`Boston, MA     |     Bangalore, India`}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
            Start a Confidential Discussion
          </Link>
          <Link href="/capabilities" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
            Explore Capabilities
          </Link>
        </div>
      </motion.div>

      {/* Background Graphic */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isSplineLoaded ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative md:absolute md:inset-0 pointer-events-none w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0"
      >
        <Suspense fallback={<div className="w-full h-full bg-white" />}>
          <Spline 
            scene="/spline/home.splinecode" 
            onLoad={() => setIsSplineLoaded(true)}
            className="w-full h-full object-cover md:pl-40 lg:pl-80 xl:pl-160 md:scale-105 lg:scale-115 xl:scale-130"
          />
        </Suspense>
      </motion.div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </motion.section>
  );
}

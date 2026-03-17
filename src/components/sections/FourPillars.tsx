"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
interface Pillar {
  id: string;
  title: string;
  img: string;
  desc: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    id: "01",
    title: "Molecular Biology & Vector Engineering",
    img: "/imgs/index/pilars/molecular.png",
    desc: "Precision cloning and validated constructs built for downstream success.",
    href: "/capabilities/molecular-biology"
  },
  {
    id: "02",
    title: "Cell Engineering & Functional Analysis",
    img: "/imgs/index/pilars/cell.png",
    desc: "Structured transfection, knockdown, and IC50 workflows designed for decisions.",
    href: "/capabilities/cell-engineering"
  },
  {
    id: "03",
    title: "Protein Characterization & Immunoassays",
    img: "/imgs/index/pilars/protein.png",
    desc: "Quantitative and visual confirmation of target biology",
    href: "/capabilities/protein-characterization"
  },
  {
    id: "04",
    title: "Specialized RNA & Advanced Delivery",
    img: "/imgs/index/pilars/specialized.png",
    desc: "IVT mRNA (1–100 mg), microfluidic LNP formulation, and analytical profiling.",
    href: "/capabilities/rna-delivery"
  }
];

export function FourPillars() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate horizontal translation
  // By using a function, framer-motion evaluates the exact calc() string dynamically
  // at every scroll tick, rather than trying (and failing) to interpolate complex CSS units,
  // which prevents the jumping behavior.
  const x = useTransform(scrollYProgress, (pos) => `calc(-${pos * 100}% + ${pos * 100}vw)`);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }} 
      ref={targetRef} 
      className="relative md:h-[600vh] py-20 md:py-0 bg-white"
    >
      <div className="md:sticky top-0 md:h-screen flex flex-col justify-center overflow-visible">
        <div className="w-full max-w-[1600px] mx-auto mb-12 md:mb-8 px-6 md:px-10 lg:px-16 shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[45px] font-medium text-black">
            Four pillars. One execution system.
          </h2>
        </div>

        <div className="relative w-full grow flex items-center">
          {/* Mobile Layout */}
          <div className="flex flex-col md:hidden gap-12 px-6 w-full">
            {pillars.map((p, i) => (
              <PillarCardMobile key={i} pillar={p} index={i} />
            ))}
          </div>
          {/* Desktop Layout */}
          <motion.div style={{ x }} className="hidden md:flex gap-12 lg:gap-24 items-center md:px-[calc(50vw-210px)] w-max">
            {pillars.map((p, i) => {
              return (
                <PillarCard key={i} pillar={p} index={i} scrollYProgress={scrollYProgress} />
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function PillarCardMobile({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <Link href={pillar.href} className="w-full block group/card">
      <div className="flex flex-col gap-4 w-full">
        {/* Header Box */}
        <div className="w-full bg-[#eeeeee] rounded-xl px-6 py-3 flex items-center justify-between min-h-[56px]">
          <span className="text-black/60 font-medium text-lg">{pillar.id}</span>
          <div className="flex items-center gap-3">
            <span className="text-black/80 font-medium text-base group-hover/card:text-[#084d43] transition-colors">Visit</span>
            <ArrowUpRight className="w-5 h-5 text-black/40 transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-[#084d43] transition-all" />
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#eeeeee] p-4 rounded-[32px] flex flex-col gap-3">
          <div className="bg-white rounded-[24px] h-[220px] relative overflow-hidden flex items-center justify-center p-8">
            <div className="relative w-full h-full opacity-80">
              <Image 
                src={pillar.img} 
                alt={pillar.title} 
                fill 
                className="object-contain grayscale brightness-110" 
              />
            </div>
          </div>
          
          <div className="px-3 py-2">
            <h3 className="text-xl font-medium text-[#242424] leading-tight">
              {pillar.title}
            </h3>
          </div>
        </div>

        {/* Footer / Description Box */}
        <div className="w-full bg-[#eeeeee] rounded-2xl p-5 min-h-[100px] flex items-center">
          <p className="text-black/60 text-base font-normal leading-snug">
            {pillar.desc}
          </p>
        </div>
      </div>
    </Link>
  );
}

function PillarCard({ pillar, index, scrollYProgress }: { pillar: Pillar; index: number; scrollYProgress: MotionValue<number> }) {
  const step = 1 / (pillars.length - 1);
  const center = index * step;

  // Opacity for the whole card container
  const containerOpacity = useTransform(
    scrollYProgress,
    (pos) => {
      const dist = Math.abs(pos - center);
      if (dist >= step) return 0.3;
      return 1 - (dist / step) * 0.7;
    }
  );

  // Detail visibility (header and footer)
  const detailOpacity = useTransform(
    scrollYProgress,
    (pos) => {
      const dist = Math.abs(pos - center);
      const limit = step / 1.5;
      if (dist >= limit) return 0;
      return 1 - (dist / limit);
    }
  );

  // Icon opacity
  const iconOpacity = useTransform(
    scrollYProgress,
    (pos) => {
      const dist = Math.abs(pos - center);
      const limit = step / 1.5;
      if (dist >= limit) return 0.1;
      return 1 - (dist / limit) * 0.9;
    }
  );

  return (
    <Link href={pillar.href} className="shrink-0 block group/card">
      <motion.div 
        style={{ opacity: containerOpacity }}
        className="flex flex-col gap-4 w-[320px] md:w-[420px]"
      >
        {/* Header Box */}
        <motion.div 
          style={{ opacity: detailOpacity }}
          className="w-full bg-[#eeeeee] rounded-xl px-6 py-3 flex items-center justify-between min-h-[56px]"
        >
          <span className="text-black/60 font-medium text-lg">{pillar.id}</span>
          <div className="flex items-center gap-3">
            <span className="text-black/80 font-medium text-base group-hover/card:text-[#084d43] transition-colors">Visit</span>
            <ArrowUpRight className="w-5 h-5 text-black/40 transform group-hover/card:translate-x-1 group-hover/card:-translate-y-1 group-hover/card:text-[#084d43] transition-all" />
          </div>
        </motion.div>

      {/* Main Card */}
      <div className="bg-[#eeeeee] p-3 md:p-4 rounded-[32px] flex flex-col gap-3">
        {/* White Inner Card - Reduced height for laptop compatibility */}
        <div className="bg-white rounded-[24px] h-[220px] md:h-[300px] relative overflow-hidden flex items-center justify-center p-8">
          <motion.div style={{ opacity: iconOpacity }} className="relative w-full h-full">
            <Image 
              src={pillar.img} 
              alt={pillar.title} 
              fill 
              className="object-contain grayscale brightness-110" 
            />
          </motion.div>
        </div>
        
        {/* Title area */}
        <div className="px-3 py-2">
          <h3 className="text-xl md:text-2xl font-medium text-[#242424] leading-tight">
            {pillar.title}
          </h3>
        </div>
      </div>

      {/* Footer / Description Box - Reduced height */}
      <motion.div 
        style={{ opacity: detailOpacity }}
        className="w-full bg-[#eeeeee] rounded-2xl p-5 min-h-[100px] flex items-center"
      >
        <p className="text-black/60 text-base md:text-lg font-normal leading-snug">
          {pillar.desc}
        </p>
        </motion.div>
      </motion.div>
    </Link>
  );
}


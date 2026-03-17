"use client";
import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero3() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="relative w-full min-h-screen flex items-center  pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
      {/* Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <Image
          src="/assets/430447ba7d13ef5f78f602ef48a9df820f8b829b.png"
          alt="DNA Background"
          fill
          className="object-cover md:object-contain object-right"
          priority
        />
      </div>

      <div className="relative z-20 w-full max-w-full flex flex-col gap-6 sm:gap-8 md:gap-12 mt-16 md:mt-24">
        <h1 className="text-[28px] sm:text-5xl md:text-6xl lg:text-[64px] leading-tight sm:leading-[1.1] font-medium text-black wrap-break-word max-w-full lg:max-w-4xl">
          Molecular Biology &<br />
          Vector Engineering
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-normal text-black w-full max-w-3xl">
          Foundational build work for discovery and genetic medicine — executed
          with tight controls, verified validation, and downstream-ready
          documentation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-transform hover:scale-105 flex items-center justify-center text-center whitespace-normal">
            Start a Confidential Discussion
          </Link>
          <Link href="/contact" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-transform hover:scale-105 flex items-center justify-center text-center whitespace-normal">
            Discuss a Molecular Biology Scope
          </Link>
        </div>
        <div className="flex items-center gap-2 bg-[#e3d5b8] w-fit px-3 py-1 rounded-lg mt-2">
          <span className="text-xs text-[#6e4515]">
            NDA available upon request.
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b] z-20">
        <ArrowDown size={24} className="stroke-[1.5px]" />
        <span className="font-light text-base">Scroll for more</span>
      </div>
    </motion.section>
  );
}

"use client";
import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, MapPin } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameAbout() {
  const sideNavItems = [
    { label: "Intro", sectionId: "about-hero" },
    { label: "Our Story", sectionId: "about-story" },
    { label: "Philosophy", sectionId: "about-philosophy" },
    { label: "Footprint", sectionId: "about-footprint" },
    { label: "Contact", sectionId: "about-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="about-hero" className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4 mt-24 md:mt-0 order-1"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-5xl lg:text-[64px] leading-[1.1] font-medium text-black wrap-break-word"
          >
            About Us
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-normal text-black w-full max-w-2xl"
          >
            Kevda supports biotech and biopharma teams with end-to-end wet-lab execution — combining scientific leadership with operational rigor.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
          >
            <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Start a Confidential Discussion
            </Link>
            <Link href="/capabilities" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Explore Capabilities
            </Link>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 mt-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#d3b582] opacity-50"></div>
            <span className="text-xs text-gray-400 font-medium">NDA available upon request.</span>
          </motion.div>
        </motion.div>

        {/* Background Graphic */}
        <div className="relative md:absolute md:inset-0 pointer-events-none opacity-80 w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0">
          <Suspense fallback={<div className="w-full h-full bg-white" />}>
            <Spline 
              scene="/spline/home.splinecode" 
              className="w-full h-full object-cover md:pl-40 lg:pl-80 xl:pl-160 md:scale-105 lg:scale-115 xl:scale-130"
            />
          </Suspense>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
          <ArrowDown size={24} className="stroke-[1.5px]" />
          <span className="font-light text-base">Scroll for more</span>
        </div>
      </motion.section>

      {/* Who We Are */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="about-story" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 aspect-4/5 bg-[#f5efe4] rounded-[40px] border-[#d3b582] border-2 overflow-hidden relative shadow-sm">
            <Image src="/assets/abstract_2.jpg" alt="Lab Work" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
            <h2 className="text-3xl md:text-5xl font-medium text-black">Who We Are</h2>
            <p className="text-lg md:text-xl font-normal text-black/70 leading-relaxed">
             Kevda operates as an extension of client R&D teams, focused on execution-heavy work requiring tight process control.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Operating Philosophy */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="about-philosophy" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-24">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
              <h2 className="text-3xl md:text-5xl font-medium text-black">Operating Philosophy</h2>
              <p className="text-lg md:text-xl font-normal text-black/70 leading-relaxed">
                Speed matters only when results are defensible. Repeatable workflows. Explicit controls. Reporting built to hold up under scrutiny.
              </p>
            </div>
            <div className="w-full lg:w-1/2 aspect-4/5 bg-[#eef2f2] rounded-[40px] border-[#d3b582] border-2 overflow-hidden relative shadow-sm">
              <Image src="/assets/abstract_1.jpg" alt="Strategy" fill className="object-cover" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-0 mt-12 max-w-[1400px] mx-auto">
             {[
               { title: "Scope", img: "/imgs/about/about icons/scope.png" },
               { title: "Controls", img: "/imgs/about/about icons/controls.png" },
               { title: "Execution", img: "/imgs/about/about icons/execution.png" },
               { title: "Reporting", img: "/imgs/about/about icons/reporting.png" }
             ].map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center flex-1 w-full max-w-[300px]">
                    <div className="bg-[#f7f7f7] rounded-[32px] p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                        <div className="relative w-22 h-22 md:w-24 md:h-24 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                           <div className="relative w-full h-full">
                             <Image src={step.img} alt={step.title} fill className="object-contain" />
                           </div>
                       </div>
                       <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                         {step.title}
                       </div>
                    </div>
                 </div>
                 
                 {/* Horizontal dashed connector with circles */}
                 {i < 3 && (
                    <div className="hidden md:flex items-center justify-center grow max-w-[100px]">
                       <div className="relative flex items-center w-full h-16">
                          <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white absolute left-0 z-10" style={{ bottom: i % 2 === 0 ? '0' : 'auto', top: i % 2 === 0 ? 'auto' : '0' }} />
                          <svg className="w-full h-full absolute inset-0 py-1" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {i % 2 === 0 ? (
                              <path d="M 0 100 L 40 100 Q 50 100 50 90 L 50 10 Q 50 0 60 0 L 100 0" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 1" vectorEffect="non-scaling-stroke" />
                            ) : (
                              <path d="M 0 0 L 40 0 Q 50 0 50 10 L 50 90 Q 50 100 60 100 L 100 100" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="6 1" vectorEffect="non-scaling-stroke" />
                            )}
                          </svg>
                          <div className="w-2.5 h-2.5 rounded-full border-2 border-slate-300 bg-white absolute right-0 z-10" style={{ top: i % 2 === 0 ? '0' : 'auto', bottom: i % 2 === 0 ? 'auto' : '0' }} />
                       </div>
                    </div>
                 )}
               </React.Fragment>
             ))}
          </div>
        </div>
      </motion.section>

      {/* Footprint */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="about-footprint" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10 flex flex-col items-center group">
        <div className="w-full max-w-[1600px] flex flex-col items-center gap-16">
          <h2 className="text-3xl md:text-6xl font-medium text-black text-center">Footprint</h2>
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-auto md:aspect-[21/9] rounded-[40px] overflow-hidden shadow-sm flex items-center justify-center bg-[#f6f6f6]">
             <div className="absolute inset-0 pointer-events-none opacity-40">
                <Image src="/imgs/about/footprint.png" alt="Map BG" fill className="object-cover object-center grayscale brightness-110" />
             </div>
             
             <div className="relative w-full h-full">
                {/* Marker 1: Arlington, MA */}
                <div className="absolute top-[35%] left-[20%] md:left-[25%] flex flex-col items-center gap-2 md:gap-3 transform -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-90 md:scale-100">
                   <div className="bg-[#084d43] text-white p-1.5 md:p-2 rounded-full shadow-lg">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" fill="white" />
                   </div>
                   <div className="bg-[#084d43] text-white px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg text-sm md:text-lg font-medium shadow-sm whitespace-nowrap">
                      Boston, MA
                   </div>
                 </div>

                {/* Marker 2: Bangalore, India */}
                <div className="absolute top-[65%] left-[80%] md:left-[70%] flex flex-col items-center gap-2 md:gap-3 transform -translate-x-1/2 -translate-y-1/2 scale-75 sm:scale-90 md:scale-100">
                   <div className="bg-[#084d43] text-white p-1.5 md:p-2 rounded-full shadow-lg">
                      <MapPin className="w-5 h-5 md:w-6 md:h-6" fill="white" />
                   </div>
                   <div className="bg-[#084d43] text-white px-4 md:px-6 py-1.5 md:py-2.5 rounded-lg text-sm md:text-lg font-medium shadow-sm whitespace-nowrap">
                      Bangalore, India
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.section>

      <div id="about-contact">
        <UnifiedCTA 
          title={<>Start a confidential scope discussion. Tell us what you&apos;re building <span className="text-black/40">and what you need executed. We&apos;ll respond with scope questions and next steps.</span></>}
          secondaryButtonText="Explore Capabilities" 
          secondaryButtonHref="/capabilities" 
        />
      </div>
    </PageWrapper>
  );
}

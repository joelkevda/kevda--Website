"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, LucideProps } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "motion/react";

export default function FrameCareers() {
  const sideNavItems = [
    { label: "Intro", sectionId: "careers-hero" },
    { label: "Culture", sectionId: "careers-culture" },
    { label: "Note", sectionId: "careers-note" },
    { label: "Contact", sectionId: "careers-contact" },
  ];

  const pillars: { title: string; icon: string | React.ComponentType<LucideProps> }[] = [
    { title: "Rigor and reproducibility", icon: "/imgs/careers/Rigor.png" },
    { title: "Clear communication", icon: "/imgs/careers/communication.png" },
    { title: "Ownership and accountability", icon: "/imgs/careers/Ownership.png" },
    { title: "Process discipline and continuous improvement", icon: "/imgs/careers/Process.png" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="careers-hero" className="relative w-full pt-32 md:pt-48 pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
        <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4">
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word">
            Careers
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Join a team built for disciplined execution, scientific integrity, and high-accountability delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Contact Recruiting
            </Link>
            <Link href="/about" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Learn About Kevda
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Pillars Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="careers-culture" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
            {pillars.map((pillar, i) => (
              <div 
                key={i} 
                className="rounded-[32px] p-12 flex flex-col items-center justify-center text-center gap-6 bg-[#f7f7f7] border border-gray-50 group hover:shadow-xl hover:scale-[1.02] transition-all min-h-[320px]"
              >
                {typeof pillar.icon === 'string' ? (
                  <div className="relative w-40 h-40 opacity-100">
                    <Image src={pillar.icon} alt={pillar.title} fill className="object-contain" />
                  </div>
                ) : (
                  <div className="text-gray-300">
                     <pillar.icon size={64} strokeWidth={1} />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-black leading-snug">
                  {pillar.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Note Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="careers-note" className="bg-white w-full py-20 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1400px] border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm mx-auto">
           <div className="px-10 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-medium text-gray-800">How to Apply</h2>
           </div>
           
           <div className="p-8 lg:p-12">
               <div className="bg-[#EBF4F2] border border-[#C8DDD9] rounded-[24px] p-8 lg:p-12 relative flex items-center gap-6">
                  <div className="text-[#004D43]/40">
                     <Zap size={24} />
                  </div>
                  <p className="text-xl text-[#2D3748] leading-relaxed font-normal italic">
                     If you&apos;re interested in joining Kevda, send your resume and a brief note describing your experience and availability.
                  </p>
               </div>
            </div>
        </div>
      </motion.section>

      <div id="careers-contact">
         <UnifiedCTA />
      </div>
    </PageWrapper>
  );
}

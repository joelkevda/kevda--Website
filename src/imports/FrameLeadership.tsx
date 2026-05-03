"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion } from "motion/react";

export default function FrameLeadership() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sideNavItems = [
    { label: "Intro", sectionId: "leadership-hero" },
    { label: "Team", sectionId: "leadership-team" },
    { label: "Contact", sectionId: "leadership-contact" },
  ];

  const leaders = [
    {
      name: "Joel Deutsch",
      title: "Co-Founder & CEO",
      bio: "Joel Deutsch leads Kevda Bioworks, drawing on nearly a decade of operations leadership at F5 Hiring Solutions. He oversees strategy, hiring, infrastructure, vendor management, and day-to-day execution — ensuring reliable timelines, structured communication, and disciplined delivery.",
      image: "/assets/Joel.jpeg"
    },
    {
      name: "Aaron Larsen",
      title: "Senior Strategic Advisor",
      bio: "Aaron Larsen advises Kevda on scientific direction and execution standards. He brings deep experience from world's leading biotech companies and research universities — with focus on molecular biology, RNA platforms, delivery systems, and analytical workflows.",
      image: "/assets/Aaron.jpeg"
    }
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="leadership-hero" className="relative w-full pt-32 md:pt-48 pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
        <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4">
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word">
            Leadership
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Scientific standards and operational discipline — owned at the top.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
                <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-10 py-3 md:py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center text-center whitespace-normal">
                  Start a Confidential Discussion
                </Link>
                <Link href="/contact" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center justify-center text-center whitespace-normal">
                  Initiate a Project
                </Link>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d3b582] opacity-50"></div>
            <span className="text-xs text-gray-400 font-medium">NDA available upon request.</span>
          </div>
        </div>
      </motion.section>

      {/* Executives Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="leadership-team" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col gap-24 md:gap-32">
           {leaders.map((leader, i) => (
             <div key={i} className={`flex flex-col-reverse ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-left">
                   <div className="flex flex-col gap-1">
                      <h2 className="text-3xl md:text-[50px] font-medium text-black">{leader.name}</h2>
                      <p className="text-xl text-black/90 font-medium">{leader.title}</p>
                   </div>
                   <p className="text-lg md:text-xl text-black/70 leading-relaxed">
                      {leader.bio}
                   </p>
                </div>
                <div
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                  className={`w-full lg:w-[500px] aspect-square relative rounded-[40px] overflow-hidden ${activeIndex === i ? "" : "grayscale"} hover:grayscale-0 transition-all duration-1000 shadow-xl cursor-pointer`}
                >
                   <Image 
                     src={leader.image} 
                     alt={leader.name} 
                     fill 
                     className="object-cover" 
                   />
                   <div className="absolute bottom-8 left-8 z-20">
                      <h3 className="text-white text-4xl md:text-5xl font-medium drop-shadow-2xl">{leader.name}</h3>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </motion.section>

      <div id="leadership-contact">
        <UnifiedCTA secondaryButtonText="Initiate a Project" />
      </div>
    </PageWrapper>
  );
}

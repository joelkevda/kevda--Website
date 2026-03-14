import { motion } from "motion/react";
import Spline from "@splinetool/react-spline";
import React, { Suspense } from "react";
import Image from "next/image";
import { ArrowDown, CheckCircle2, Zap } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameQuality() {
  const sideNavItems = [
    { label: "Intro", sectionId: "quality-hero" },
    { label: "Process", sectionId: "quality-process" },
    { label: "Standards", sectionId: "quality-standards" },
    { label: "Execution", sectionId: "quality-execution" },
    { label: "Contact", sectionId: "quality-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="quality-hero" className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 overflow-hidden bg-white">
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
            className="text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] font-medium text-black wrap-break-word"
          >
            Quality
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-normal text-black w-full max-w-2xl"
          >
            Disciplined execution, explicit controls, and structured documentation designed to stand up to scientific and investor scrutiny.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
          >
            <button className="bg-[#d3b582] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Start a Confidential Discussion
            </button>
            <button className="bg-[#084d43] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer">
              Request a Quality Overview
            </button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 mt-2"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#d3b582] opacity-50"></div>
            <span className="text-xs text-gray-400 font-medium">NDA available upon request</span>
          </motion.div>
        </motion.div>

        {/* Background Graphic */}
        <div className="relative md:absolute md:inset-0 pointer-events-none opacity-80 overflow-hidden w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0">
          <Suspense fallback={<div className="w-full h-full bg-white transition-opacity duration-500" />}>
            <Spline 
              scene="/spline/home.splinecode" 
              className="w-full h-full object-cover md:pl-160 md:scale-130"
            />
          </Suspense>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
          <ArrowDown size={24} className="stroke-[1.5px]" />
          <span className="font-light text-base">Scroll for more</span>
        </div>
      </motion.section>

      {/* Process Section - Align, Execute, Deliver */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
        id="quality-process"
        className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10"
      >
        <div className="w-full max-w-[1600px] flex flex-col">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">
              Our Process
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-4 items-center justify-center w-full max-w-7xl mx-auto">
            {[
              {
                title: "Align",
                desc: "Define scope, controls, and timeline.",
                img: "/imgs/quality/align.png",
              },
              {
                title: "Execute",
                desc: "Controlled workflows with checkpoints.",
                img: "/imgs/quality/execute.png",
              },
              {
                title: "Deliver",
                desc: "Verified data, protocols, and constructs.",
                img: "/imgs/quality/deliver.png",
              },
            ].map((step, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center flex-1 w-full max-w-[320px]">
                  <div className="bg-[#f7f7f7] rounded-3xl p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                    <div className="relative w-22 h-22 md:w-26 md:h-26 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                      {step.title}
                    </div>
                    <p className="text-center text-black/60 font-normal leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

            {/* Horizontal dashed connector with circles */}
            {i < 2 && (
              <div className="hidden md:flex items-center justify-center grow max-w-[120px]">
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

      {/* Standards Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
        id="quality-standards"
        className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10"
      >
        <div className="w-full max-w-[1600px] flex flex-col items-center">
          <div className="w-full max-w-md bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl">
            <div className="bg-[#084d43] px-10 py-3 text-center">
              <span className="text-white text-[10px] tracking-[4px] font-bold">
                REPORTS
              </span>
            </div>
            <div className="p-10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-black">Briefing</h3>
              <div className="flex flex-col gap-4">
                {[
                  "Clear scope and acceptance criteria",
                  "Defined controls",
                  "Structured checkpoints",
                  "Consistent execution discipline",
                  "Reporting built for interpretation and review",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-md bg-[#084d43] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span className="text-gray-600 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Execution Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
        id="quality-execution"
        className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10"
      >
        <div className="w-full max-w-[1400px] mx-auto border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm">
          <div className="px-10 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-medium text-gray-800">
              Outputs/Notes
            </h2>
            <p className="text-sm text-gray-400">
              Here&apos;s a preview of what exactly you will receive
            </p>
          </div>
          <div className="p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 bg-[#dbe4e4] rounded-[32px] p-6 md:p-8 lg:p-12 relative flex items-start md:items-center gap-6">
              <div className="absolute top-4 right-4 text-[#8a9b9b]">
                <Zap size={20} />
              </div>
              <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 shadow-sm w-full">
                <Zap size={24} className="text-[#a0c5c1] shrink-0" />
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
                  Eligible workflows may include CoA-style summaries — residual
                  DNA, endotoxin, and stability — aligned to scope and client
                  requirements
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[400px] flex flex-col gap-6">
              {[
                {
                  title: "Report Package Outline",
                  tag: "PDF",
                  type: "lines",
                  highlight: true,
                  color: "#FDF8EE",
                },
                {
                  title: "Checklist Summary",
                  tag: "PDF",
                  type: "checklist",
                  color: "#ffffff",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className={`border border-gray-100 rounded-[24px] overflow-hidden bg-[#fafaf6] shadow-sm ${card.highlight ? "border-t-[2.5px] border-t-[#d4b57c]" : ""}`}
                >
                  <div
                    className="px-6 py-3 flex items-center justify-between border-b border-gray-100"
                    style={{ backgroundColor: card.color }}
                  >
                    <span className="text-[11px] font-medium text-gray-700 tracking-tight">
                      {card.title}
                    </span>
                    <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    {card.type === "lines" ? (
                      <div className="flex flex-col gap-1.5 mt-1">
                        {[...Array(5)].map((_, j) => (
                          <div
                            key={j}
                            className={`h-1.5 rounded-full bg-[#E4E4DC] ${j % 2 === 0 ? "w-full" : "w-[72%]"}`}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 mt-1">
                        {[80, 100, 60].map((w, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 border border-[#004D43] rounded-[2px] shrink-0" />
                            <div
                              className="h-1.5 rounded-full bg-[#E4E4DC] flex-1"
                              style={{ width: `${w}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <div id="quality-contact">
        <UnifiedCTA
          secondaryButtonText="Request a Quality Overview"
          secondaryButtonHref="/contact"
        />
      </div>
    </PageWrapper>
  );
}

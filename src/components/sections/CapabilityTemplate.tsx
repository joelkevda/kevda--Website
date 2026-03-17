"use client";
import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import { ArrowDown, Zap, LucideProps } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { SideNavItem } from "@/components/sections/SideNav";
import { PageWrapper } from "@/components/layout/PageWrapper";
import Link from "next/link";

interface WorkflowStep {
  title: string;
  icon: React.ComponentType<LucideProps> | string;
  desc?: string;
}

interface CapabilityItem {
  text: string;
  icon?: React.ComponentType<LucideProps> | string;
}

interface OutputCard {
  title: string;
  color: string;
  type?: "chart" | "table" | "trace" | "note" | "blot" | "image" | "checklist" | "location" | "lines";
  tag?: string;
  highlight?: boolean;
}

const MockLines = ({ count = 3 }: { count?: number }) => (
  <div className="flex flex-col gap-1.5 mt-1">
    {[...Array(count)].map((_, i) => (
      <div 
        key={i} 
        className={`h-1.5 rounded-full bg-[#E4E4DC] ${i === 0 ? 'w-full' : i === 1 ? 'w-[72%]' : 'w-[48%]'}`} 
      />
    ))}
  </div>
);

const MockGrid = ({ tealRows = 2, totalRows = 4 }: { tealRows?: number, totalRows?: number }) => (
  <div className="grid grid-cols-2 gap-1 mt-1">
    {[...Array(totalRows)].map((_, i) => (
      <div 
        key={i} 
        className={`h-4 rounded-sm ${i < tealRows ? 'bg-[#EBF4F2] border border-[#C8DDD9]' : 'bg-[#E4E4DC]'}`} 
      />
    ))}
  </div>
);

const CurveBox = ({ type = "ic50" }: { type?: "ic50" | "dls" }) => (
  <svg className="w-full h-12 mt-1" viewBox="0 0 236 46" fill="none">
    <line x1="0" y1="42" x2="236" y2="42" stroke="#E2E2D8" strokeWidth="0.5"/>
    <line x1="0" y1="0" x2="0" y2="42" stroke="#E2E2D8" strokeWidth="0.5"/>
    {type === "ic50" ? (
      <>
        <path d="M0 41 C20 41 40 40 60 36 C80 30 90 16 110 8 C130 2 148 3 170 5 C192 7 210 7 236 7" stroke="#D4B57C" strokeWidth="1.8" fill="none"/>
        <path d="M0 41 C20 41 40 40 60 36 C80 30 90 16 110 8 C130 2 148 3 170 5 C192 7 210 7 236 7 L236 42 L0 42Z" fill="#D4B57C" fillOpacity="0.08"/>
      </>
    ) : (
      <>
        <path d="M0 41 C40 41 70 41 100 18 C118 4 118 4 136 18 C166 41 196 41 236 41" stroke="#D4B57C" strokeWidth="1.8" fill="none"/>
        <path d="M0 41 C40 41 70 41 100 18 C118 4 118 4 136 18 C166 41 196 41 236 41 L236 42 L0 42Z" fill="#D4B57C" fillOpacity="0.1"/>
      </>
    )}
  </svg>
);

const TraceBox = () => (
  <svg className="w-full h-12 mt-1" viewBox="0 0 236 46" fill="none">
    <line x1="0" y1="42" x2="236" y2="42" stroke="#E2E2D8" strokeWidth="0.5"/>
    <path d="M0 40 L28 40 L42 8 L56 40 L96 40 L112 4 L128 40 L195 40 L210 14 L224 40 L236 40" stroke="#004D43" strokeWidth="1.4" fill="none"/>
  </svg>
);

const BlotBars = () => (
  <div className="flex items-end gap-1.5 h-10 mt-1">
    {[
      { h: "90%", o: 0.85 },
      { h: "28%", o: 0.25 },
      { h: "75%", o: 0.65 },
      { h: "16%", o: 0.20 },
      { h: "55%", o: 0.45 },
      { h: "10%", o: 0.15 }
    ].map((b, i) => (
      <div 
        key={i} 
        style={{ height: b.h, backgroundColor: `rgba(212,181,124,${b.o})` }}
        className="flex-1 rounded-t-sm"
      />
    ))}
  </div>
);

const ChecklistMock = () => (
  <div className="flex flex-col gap-2 mt-1">
    {[80, 100, 60].map((w, i) => (
      <div key={i} className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 border border-[#004D43] rounded-[2px] shrink-0" />
        <div className="h-1.5 rounded-full bg-[#E4E4DC] flex-1" style={{ width: `${w}%` }} />
      </div>
    ))}
  </div>
);

const LocationMock = ({ city }: { city: string }) => (
  <div className="flex flex-col gap-2 mt-1">
    <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-[#004D43]" />
      <span className="text-[10px] font-medium text-black">{city}</span>
    </div>
    <div className="h-1 rounded-full bg-[#E4E4DC] w-[72%]" />
    <div className="h-1 rounded-full bg-[#E4E4DC] w-[48%]" />
  </div>
);

interface CapabilityProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  splineScene?: string;
  workflowSteps?: WorkflowStep[];
  capabilities: CapabilityItem[];
  outputPoints: string[];
  outputCards: OutputCard[];
  sideNavItems: SideNavItem[];
  secondaryButtonText?: string;
}

import { motion } from "motion/react";

export const CapabilityTemplate: React.FC<CapabilityProps> = ({
  title,
  subtitle,
  heroImage = "/assets/008d4cd5bfb647abbdba3681ada3b89d350124b8.png",
  splineScene,
  workflowSteps,
  capabilities,
  outputPoints,
  outputCards,
  sideNavItems,
  secondaryButtonText = "Initiate a Project",
}) => {
  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Standardized to Homepage Style */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id={sideNavItems[0]?.sectionId} className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
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
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-[1.1] wrap-break-word"
          >
            {title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-normal text-black w-full max-w-2xl"
          >
            {subtitle}
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
            <Link href="/contact" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              {secondaryButtonText}
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

        <div className="relative md:absolute md:inset-0 pointer-events-none opacity-80 bg-white w-full h-[400px] md:h-full order-2 md:order-0 mt-12 md:mt-0">
          {splineScene ? (
            <Suspense fallback={<div className="w-full h-full bg-white transition-opacity duration-500" />}>
              <Spline 
                scene={splineScene} 
                className="w-full h-full object-cover md:pl-40 lg:pl-80 xl:pl-140 md:scale-105 lg:scale-115 xl:scale-120"
              />
            </Suspense>
          ) : (
            <Image
              src={heroImage}
              alt="Hero Visual"
              fill
              className="object-cover object-left bg-white"
              priority
            />
          )}
        </div>

        <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
          <ArrowDown size={24} className="stroke-[1.5px]" />
          <span className="font-light text-base">Scroll for more</span>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id={sideNavItems[1]?.sectionId} className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] flex flex-col pt-12 mx-auto">
          <div className="w-full mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-black">Capabilities</h2>
          </div>
          
          <div className={`grid grid-cols-1 ${capabilities.some(c => c.icon) ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 w-full max-w-5xl mx-auto`}>
            {capabilities.map((item, i) => (
              <div 
                key={i} 
                className={`rounded-[30px] p-8 md:p-12 flex flex-col items-center justify-center text-center group transition-transform hover:scale-[1.02] ${
                   capabilities.some(c => c.icon) ? "bg-[#f6f6f6]" : (i % 4 === 0 || i % 4 === 3 ? "bg-[#eef2f2]" : "bg-[#f5efe4]")
                }`}
              >
                {item.icon && (
                  <div className="mb-6 flex justify-center w-full">
                     {typeof item.icon === 'string' ? (
                       <div className="relative w-28 h-28">
                         <Image src={item.icon} alt={item.text} fill className="object-contain" />
                       </div>
                     ) : (
                       <div className="text-[#9a9a9a]">
                         <item.icon size={64} strokeWidth={1} />
                       </div>
                     )}
                  </div>
                )}
                <p className={`font-medium text-black leading-snug ${item.icon ? 'text-sm md:text-base' : 'text-xl md:text-2xl'}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      {workflowSteps && workflowSteps.length > 0 && (
        <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id={sideNavItems[2]?.sectionId} className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
           <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-0 max-w-[1600px] mx-auto">
              {workflowSteps.map((step, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center flex-1 w-full max-w-[280px]">
                     <div className="bg-[#f7f7f7] rounded-3xl p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                        <div className="relative w-22 h-22 md:w-26 md:h-26 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                         {typeof step.icon === 'string' ? (
                           <div className="relative w-full h-full">
                             <Image src={step.icon} alt={step.title} fill className="object-contain" />
                           </div>
                         ) : (
                           <step.icon size={44} strokeWidth={1} className="text-[#084d43]" />
                         )}
                      </div>
                        <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                          {step.title}
                        </div>
                        {step.desc && <p className="text-center text-black/60 font-normal leading-tight">{step.desc}</p>}
                     </div>
                  </div>
                  
                  {/* Horizontal dashed connector with circles */}
                  {i < workflowSteps.length - 1 && (
                    <>
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
                      <div className="md:hidden flex items-center justify-center py-4 text-slate-300">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                         </svg>
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
           </div>
        </motion.section>
      )}

      {/* Outputs / Notes Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id={sideNavItems[3]?.sectionId} className="bg-white w-full py-20 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1400px] border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm mx-auto">
           <div className="px-10 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-medium text-gray-800">Outputs/Notes</h2>
              <p className="text-sm text-gray-400">Here&apos;s a preview of what exactly you will receive</p>
           </div>
           
           <div className="p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Left Content List */}
              <div className="flex-1 bg-[#dbe4e4] rounded-[32px] p-6 lg:p-12 relative flex flex-col gap-4">
                 <div className="absolute top-4 right-4 text-[#8a9b9b]">
                    <Zap size={20} />
                 </div>
                 {outputPoints.map((point, i) => (
                   <div key={i} className="bg-white rounded-2xl px-6 py-4 flex items-center gap-4 shadow-sm">
                      <Zap size={18} className="text-[#a0c5c1]" />
                      <span className="text-lg text-gray-600">{point}</span>
                   </div>
                 ))}
              </div>

              {/* Right Output Cards */}
              <div className="w-full lg:w-[400px] flex flex-col gap-6">
                 {outputCards.map((card, i) => (
                   <div key={i} className={`border border-gray-100 rounded-[24px] overflow-hidden bg-[#fafaf6] shadow-sm ${card.highlight ? 'border-t-[2.5px] border-t-[#d4b57c]' : ''}`}>
                      <div 
                        className="px-6 py-3 flex items-center justify-between border-b border-gray-100"
                        style={{ backgroundColor: card.color || '#ffffff' }}
                      >
                         <span className="text-[11px] font-medium text-gray-700 tracking-tight">{card.title}</span>
                         {card.tag && <span className="text-[9px] font-bold text-gray-400 tracking-wider uppercase">{card.tag}</span>}
                      </div>
                      <div className="p-6">
                         {card.type === "table" && <MockGrid />}
                         {card.type === "chart" && <CurveBox />}
                         {card.type === "trace" && <TraceBox />}
                         {card.type === "blot" && <BlotBars />}
                         {card.type === "image" && <MockGrid tealRows={4} totalRows={2} />}
                         {card.type === "checklist" && <ChecklistMock />}
                         {card.type === "location" && <LocationMock city={card.title} />}
                         {(card.type === "lines" || !card.type) && <MockLines />}
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </motion.section>

      <div id={sideNavItems[sideNavItems.length - 1]?.sectionId}>
         <UnifiedCTA />
      </div>
    </PageWrapper>
  );
};

"use client";
import { motion } from "motion/react";
import React from "react";
import Image from "next/image";
import { ArrowDown, LucideProps } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function FrameSecurity() {
  const sideNavItems = [
    { label: "Intro", sectionId: "security-hero" },
    { label: "Approach", sectionId: "security-approach" },
    { label: "Notes", sectionId: "security-notes" },
    { label: "Contact", sectionId: "security-contact" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="security-hero" className="relative w-full min-h-screen flex flex-col md:flex-row md:items-center pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
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
            className="text-[28px] sm:text-5xl lg:text-[64px] leading-[1.1] font-medium text-black wrap-break-word"
          >
            Security &<br/>Confidentiality
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl font-normal text-black w-full max-w-2xl"
          >
            We treat sensitive sequences, programs, and experimental outcomes as a core operating responsibility.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4"
          >
            <button className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer text-center whitespace-normal">
              Start a Confidential Discussion
            </button>
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
          <Image 
            src="/assets/Security.png" 
            alt="Security Background Graphic"
            fill
            className="object-contain md:object-cover -ml-12 md:ml-0 md:pl-40 lg:pl-90 xl:pl-180"
            priority
          />
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-12 right-[10%] items-center gap-2 text-[#8b8b8b]">
          <ArrowDown size={24} className="stroke-[1.5px]" />
          <span className="font-light text-base">Scroll for more</span>
        </div>
      </motion.section>

      {/* Approach Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="security-approach" className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col">
          <div className="w-full mb-16">
            <h2 className="text-4xl md:text-5xl font-medium text-black">Approach</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {(
              [
                { text: "NDA-friendly engagement", icon: "/imgs/security/approach/nda.png" },
                { text: "Controlled access to files and outputs", icon: "/imgs/security/approach/controlled.png" },
                { text: "Clear collaboration norms", icon: "/imgs/security/approach/collaborations.png" },
                { text: "Professional handling of documentation and deliverables", icon: "/imgs/security/approach/handling.png" }
              ] as { text: string; icon: string | React.ComponentType<LucideProps> }[]
            ).map((item, i) => (
              <div 
                key={i} 
                className="rounded-[12px] p-8 bg-[#f7f7f7] border border-gray-100 flex flex-col items-center justify-center text-center gap-6 group hover:shadow-md transition-all min-h-[220px]"
              >
                {typeof item.icon === 'string' ? (
                  <div className="relative w-32 h-20 opacity-40">
                    <Image src={item.icon} alt={item.text} fill className="object-contain grayscale" />
                  </div>
                ) : (
                  <div className="text-gray-300">
                     <item.icon size={56} strokeWidth={1} />
                  </div>
                )}
                <p className="text-sm font-normal text-black/60 leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blue Note Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="security-notes" className="bg-white w-full py-12 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="bg-[#EBF4F2] border border-[#C8DDD9] rounded-[8px] p-6 relative flex items-center justify-center gap-4 text-center">
            <div className="w-5 h-5 rounded-full border border-[#084d43] flex items-center justify-center shrink-0">
               <div className="w-2 h-2 rounded-full bg-[#084d43]"></div>
            </div>
            <p className="text-sm text-[#2D3748] font-normal">
              If preferred, we can begin under NDA before any program details are shared.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Process Section - NDA, Scope, Execution, Delivery */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-20 md:py-32 px-6 md:px-10 lg:px-16 relative z-10">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-0 max-w-[1400px] mx-auto">
             {[
               { title: "NDA", icon: "/imgs/security/nda.png" },
               { title: "Scope", icon: "/imgs/security/scope.png" },
               { title: "Execution", icon: "/imgs/security/Execution.png" },
               { title: "Delivery", icon: "/imgs/security/Delivery.png" }
             ].map((step, i) => (
               <React.Fragment key={i}>
                 <div className="flex flex-col items-center flex-1 w-full max-w-[300px]">
                    <div className="bg-[#f7f7f7] rounded-[32px] p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                        <div className="relative w-22 h-22 md:w-26 md:h-26 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                           <div className="relative w-full h-full opacity-100">
                             <Image src={step.icon} alt={step.title} fill className="object-contain" />
                           </div>
                       </div>
                       <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                         {step.title}
                       </div>
                    </div>
                 </div>
                 
                 {/* Horizontal dashed connector with circles */}
                 {i < 3 && (
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
        </div>
      </motion.section>

      <div id="security-contact">
         <UnifiedCTA 
          title={<>Start a confidential scope discussion. Tell us what you&apos;re building <span className="text-black/40">and what you need executed. We&apos;ll respond with scope questions and next steps.</span></>}
          secondaryButtonText="Contact"
          secondaryButtonHref="/contact" 
        />
      </div>
    </PageWrapper>
  );
}

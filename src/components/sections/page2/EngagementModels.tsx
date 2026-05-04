"use client";
import React from "react";
import Image from "next/image";
import { LucideProps } from "lucide-react";
import { motion } from "motion/react";

export function EngagementModels() {
  const models: { title: string; desc: string; icon: string | React.ComponentType<LucideProps> }[] = [
    { title: "Defined scope", desc: "Fixed deliverables. Clear acceptance criteria.", icon: "/imgs/capabilities/engagement model/discover.png" },
    { title: "Pilot → scale", desc: "Start small. Scale when it works.", icon: "/imgs/capabilities/engagement model/pilot.png" },
    { title: "Ongoing bandwidth", desc: "Embedded capacity. Retained on your timeline.", icon: "/imgs/capabilities/engagement model/ongoing.png" }
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="p2-engagement" className="bg-white w-full py-16 md:py-32 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
       <div className="w-full max-w-[1600px] flex flex-col">
          <div className="mb-12 md:mb-20 w-full text-left">
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black break-words">Engagement Models</h2>
          </div>
                    <div className="flex flex-col md:flex-row gap-8 lg:gap-4 items-center justify-center w-full max-w-7xl mx-auto">
              {models.map((model, i) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col items-center flex-1 w-full max-w-[320px]">
                     <div className="bg-[#f7f7f7] rounded-3xl p-6 md:p-7 flex flex-col items-center gap-6 w-full relative group hover:shadow-xl transition-all">
                        <div className="relative w-22 h-22 md:w-26 md:h-26 flex items-center justify-center transform group-hover:scale-105 transition-transform">
                           {typeof model.icon === 'string' ? (
                             <div className="relative w-full h-full overflow-visible opacity-100">
                               <Image src={model.icon} alt={model.title} fill className="object-contain" />
                             </div>
                           ) : (
                             <model.icon size={44} strokeWidth={1} className="text-[#084d43]" />
                           )}
                        </div>
                        <div className="bg-white px-8 py-3 rounded-xl text-xl md:text-2xl font-medium text-black text-center shadow-sm relative z-10 w-full">
                          {model.title}
                        </div>
                        <p className="text-center text-black/60 font-normal leading-relaxed">{model.desc}</p>
                     </div>
                  </div>
                  
                  {/* Horizontal dashed connector with circles */}
                  {i < models.length - 1 && (
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
  );
}

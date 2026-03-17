"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Zap, CheckCircle2 } from "lucide-react";
import { UnifiedCTA } from "@/components/sections/UnifiedCTA";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { motion, AnimatePresence } from "motion/react";

export default function FrameContact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  const sideNavItems = [
    { label: "Intro", sectionId: "contact-hero" },
    { label: "Form", sectionId: "contact-form" },
    { label: "Next Steps", sectionId: "contact-next" },
    { label: "Contact", sectionId: "contact-cta" },
  ];

  return (
    <PageWrapper sideNavItems={sideNavItems}>
      {/* Hero Section - Matching Homepage Style */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="contact-hero" className="relative w-full pt-32 md:pt-48 pb-16 px-6 md:px-10 lg:px-16 bg-white overflow-visible">
        <div className="relative z-10 w-full max-w-3xl flex flex-col gap-8 md:gap-4">
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-black wrap-break-word">
            Contact
          </h1>
          
          <p className="text-lg md:text-xl font-normal text-black w-full max-w-2xl">
            Share what you&apos;re building, what you need executed, and your target timeline. We&apos;ll respond with scope questions and next steps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
            <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Start a Confidential Discussion
            </Link>
            <Link href="/contact" className="bg-[#084d43] w-full sm:w-auto text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-normal transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer flex items-center justify-center text-center whitespace-normal">
              Request a Scope Proposal
            </Link>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#d3b582] opacity-50"></div>
            <span className="text-xs text-gray-400 font-medium">NDA available upon request.</span>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="contact-form" className="bg-white w-full mt-24 py-20 px-6 md:px-10 lg:px-16 relative z-10 border border-gray-100 rounded-[40px] max-w-[1400px] mx-auto mb-32 shadow-sm">
         <AnimatePresence mode="wait">
           {!isSubmitted ? (
             <motion.form 
               key="form"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onSubmit={handleSubmit}
             >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                   <input type="text" placeholder="Name" required className="bg-[#f2f2f2] rounded-xl px-8 py-4 outline-none border-none text-gray-700" />
                   <input type="text" placeholder="Title" className="bg-[#f2f2f2] rounded-xl px-8 py-4 outline-none border-none text-gray-700" />
                </div>
                <input type="text" placeholder="Company" required className="w-full bg-[#f2f2f2] rounded-xl px-8 py-4 mb-4 outline-none border-none text-gray-700" />
                <input type="email" placeholder="Email" required className="w-full bg-[#f2f2f2] rounded-xl px-8 py-4 mb-4 outline-none border-none text-gray-700" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                   <div className="relative">
                      <select required className="w-full bg-[#f2f2f2] rounded-xl px-8 py-4 outline-none border-none text-gray-700 appearance-none cursor-pointer">
                         <option value="" disabled selected>Service Interest</option>
                         <option value="molecular-biology">Molecular Biology</option>
                         <option value="cell-engineering">Cell Engineering</option>
                         <option value="protein-characterization">Protein Characterization</option>
                         <option value="rna-delivery">RNA & Delivery</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                         <Zap size={16} />
                      </div>
                   </div>
                   <input type="text" placeholder="Target Timeline" className="bg-[#f2f2f2] rounded-xl px-8 py-4 outline-none border-none text-gray-700" />
                </div>
                <textarea placeholder="Message" required className="w-full bg-[#f2f2f2] rounded-xl px-8 py-4 mb-8 outline-none border-none text-gray-700 h-[250px] resize-none"></textarea>
                
                <div className="flex items-center gap-4 mb-12">
                   <input type="checkbox" id="nda-request" className="w-5 h-5 accent-[#084d43]" />
                   <label htmlFor="nda-request" className="text-sm text-gray-400 cursor-pointer">Request NDA before sharing program details</label>
                </div>

                <button type="submit" className="bg-[#d3b582] w-full sm:w-auto text-white px-12 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:brightness-110 active:scale-[0.98] cursor-pointer text-center whitespace-normal">
                  Start a Confidential Discussion
                </button>
             </motion.form>
           ) : (
             <motion.div 
               key="success"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="flex flex-col items-center justify-center py-20 text-center gap-6"
             >
                <div className="w-20 h-20 bg-[#084d43] rounded-full flex items-center justify-center text-white mb-4">
                   <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-medium text-black">Form Submitted</h3>
                <p className="text-xl text-gray-600 max-w-xl">
                  You&apos;ll receive a follow-up with scope-alignment questions and recommended next steps.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[#084d43] font-medium hover:underline"
                >
                  Send another message
                </button>
             </motion.div>
           )}
         </AnimatePresence>
      </motion.section>

      {/* What Happens Next Section */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} id="contact-next" className="bg-white w-full py-20 px-6 md:px-10 lg:px-16 relative z-10 mx-auto max-w-[1600px]">
        <div className="w-full border border-gray-100 rounded-[40px] overflow-hidden bg-white shadow-sm">
           <div className="px-10 py-6 border-b border-gray-100">
              <h2 className="text-2xl font-medium text-gray-800">What Happens Next</h2>
           </div>
           
           <div className="p-8 lg:p-12 flex flex-col lg:flex-row gap-12">
              <div className="flex-1 bg-[#eef2f2] rounded-[32px] p-8 lg:p-12 relative flex flex-col gap-6 justify-center">
                 <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#084d43] flex items-center justify-center shrink-0 mt-1">
                       <Zap size={14} className="text-white" />
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                       You&apos;ll receive a follow-up with scope-alignment questions and recommended next steps.
                    </p>
                 </div>
                 <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#084d43] flex items-center justify-center shrink-0 mt-1">
                       <Zap size={14} className="text-white" />
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed font-medium">
                       Boston, MA &nbsp;|&nbsp; Bangalore, India
                    </p>
                 </div>
              </div>

              <div className="w-full lg:w-[400px] flex flex-col gap-6">
                 {[
                   { city: "Boston, MA", tag: "Primary Office" },
                   { city: "Bangalore, India", tag: "Exec. Facility" }
                 ].map((loc, i) => (
                   <div key={i} className={`border border-gray-100 rounded-[24px] overflow-hidden bg-[#fafaf6] shadow-sm ${i === 0 ? 'border-t-[2.5px] border-t-[#d4b57c]' : ''}`}>
                      <div className="px-6 py-3 flex items-center justify-between bg-white border-b border-gray-100">
                         <span className="text-sm font-medium text-gray-700">{loc.city}</span>
                         <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">{loc.tag}</span>
                      </div>
                      <div className="p-6 flex flex-col gap-3">
                         <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#084d43]"></div>
                            <span className="text-xs font-bold text-gray-800">{loc.city}</span>
                         </div>
                         <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                         <div className="w-2/3 h-1 bg-gray-200 rounded-full"></div>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </motion.section>

      <div id="contact-cta">
         <UnifiedCTA secondaryButtonText="Request a Scope Proposal" />
      </div>
    </PageWrapper>
  );
}

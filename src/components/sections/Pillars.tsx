"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function Pillars() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 md:py-32 overflow-x-clip px-6 md:px-10 lg:px-16">
       <div className="w-full">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">Built for rigor and clarity</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/imgs/index/built-for-rigor.png" alt="Scope Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Milestone-based scopes</p>
            </div>
            {/* Card 2 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/imgs/index/how we work/execute.png" alt="Workflow Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Disciplined workflows</p>
            </div>
            {/* Card 3 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/imgs/security/nda.png" alt="QC Docs Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">QC and CoA-style documentation (where applicable)</p>
            </div>
            {/* Card 4 */}
            <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 flex flex-col items-start gap-4">
               <div className="relative w-16 h-16 md:w-20 md:h-20">
                 <Image src="/imgs/security/Delivery.png" alt="Logistics Icon" fill className="object-contain" />
               </div>
               <p className="text-[#666] text-lg md:text-xl font-medium leading-tight">Turnkey execution from sequence to data</p>
            </div>
          </div>
       </div>
    </motion.section>
  );
}


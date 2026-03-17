"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface UnifiedCTAProps {
  title?: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonHref?: string;
}

export function UnifiedCTA({
  title,
  primaryButtonText = "Start a Confidential Discussion",
  secondaryButtonText = "Explore Capabilities",
  primaryButtonHref = "/contact",
  secondaryButtonHref = "/capabilities",
}: UnifiedCTAProps) {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 md:py-24 px-6 md:px-10 lg:px-16 relative z-10">
      <div className="relative w-full rounded-[40px] overflow-hidden min-h-[400px] md:min-h-[500px] flex flex-col lg:flex-row items-center p-8 sm:p-16 lg:p-24 bg-[#f6f6f6] shadow-sm border border-gray-50">
        {/* Background image overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
          <Image
            src="/assets/0e18b8ec2472ed719583ad65571944b72e974749.png"
            alt="Contact BG"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start w-full justify-between">
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium leading-[1.3] text-black">
              {title || (
                <>
                  Start a confidential scope discussion. Tell us what
                  you&apos;re building{" "}
                  <span className="text-black/40">
                    and what you need executed. We&apos;ll respond with scope
                    questions and next steps.
                  </span>
                </>
              )}
            </h2>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-end gap-6 justify-center">
            <Link
              href={primaryButtonHref}
              className="bg-[#d3b582] w-full sm:w-auto text-black rounded-full px-8 py-4 sm:px-10 sm:py-6 max-w-[360px] flex justify-center items-center gap-4 text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 active:scale-[0.98] font-medium text-center z-20 cursor-pointer whitespace-normal"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="bg-[#084d43] w-full sm:w-auto text-white rounded-full px-8 py-4 sm:px-10 sm:py-6 max-w-[360px] flex justify-center items-center gap-4 text-base sm:text-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:brightness-110 active:scale-[0.98] font-medium text-center z-20 cursor-pointer whitespace-normal"
            >
              {secondaryButtonText}
            </Link>
            <div className="bg-[#e3d5b8] text-[#6e4515] px-4 py-2 rounded-lg text-xs mt-2 w-fit relative z-20">
              NDA available upon request.
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

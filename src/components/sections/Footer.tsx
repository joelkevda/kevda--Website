"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#084d43] relative z-50 py-12 px-10 flex flex-col items-start overflow-hidden">
      <div className="relative z-10 w-full flex flex-col gap-12">
        {/* Main Box */}
        <div className="bg-white rounded-[40px] p-8 md:p-14 flex flex-col lg:flex-row gap-12 md:gap-16 justify-between items-start w-full">
           
           <div className="flex flex-col gap-2 max-w-[400px]">
              <Link href="/" className="flex items-center gap-3 group">
                 <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
                    <Image src="/assets/799bf25d4a8cf43f03f498d4978b69fb6a4059a1.png" alt="Logo" fill className="object-cover" />
                 </div>
                 <span className="text-xl md:text-2xl text-black font-normal group-hover:opacity-70 transition-opacity">Kevda Bioworks</span>
              </Link>
              <p className="text-[#727272] font-normal leading-relaxed mt-4">
                Integrated mRNA Development.<br/>Built for Preclinical Execution.
              </p>
           </div>

           <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
              <div className="flex flex-col gap-4 font-normal text-[#1b1819]">
                <p className="text-xs uppercase tracking-widest text-[#727272] mb-1">Company</p>
                <Link href="/about" className="hover:text-[#d3b582] transition-colors">About</Link>
                <Link href="/leadership" className="hover:text-[#d3b582] transition-colors">Leadership</Link>
                <Link href="/careers" className="hover:text-[#d3b582] transition-colors">Careers</Link>
                <Link href="/contact" className="hover:text-[#d3b582] transition-colors">Contact</Link>
              </div>
              <div className="flex flex-col gap-4 font-normal text-[#1b1819]">
                <p className="text-xs uppercase tracking-widest text-[#727272] mb-1">Capabilities</p>
                <Link href="/capabilities" className="hover:text-[#d3b582] transition-colors">Overview</Link>
                <Link href="/capabilities/molecular-biology" className="hover:text-[#d3b582] transition-colors">Molecular Biology</Link>
                <Link href="/capabilities/cell-engineering" className="hover:text-[#d3b582] transition-colors">Cell Engineering</Link>
                <Link href="/capabilities/protein-characterization" className="hover:text-[#d3b582] transition-colors">Protein Characterization</Link>
                <Link href="/capabilities/rna-delivery" className="hover:text-[#d3b582] transition-colors">RNA & Delivery</Link>
              </div>
           </div>

           <div className="flex flex-col items-start lg:items-end gap-12 w-full lg:w-auto h-full justify-between lg:col-span-1">
              <Link href="/contact" className="bg-[#d3b582] w-full sm:w-auto px-6 py-4 rounded-full text-black font-medium hover:scale-105 transition-transform flex items-center justify-center text-center gap-3 shadow-lg shadow-[#d3b582]/30 whitespace-normal">
                Start a Confidential Discussion
              </Link>

              <div className="flex flex-col items-start lg:items-end gap-16 text-sm text-[#1b1819]">
                 <div className="flex items-center gap-2 text-gray-500 font-medium text-sm md:text-base">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <span>Boston, MA | Bangalore, India</span>
            </div>
              </div>
           </div>
        </div>

        {/* Bottom text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-white/80 text-xs gap-4 font-light">
           <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
             <p>© 2026 Kevda Bioworks LLC. All rights reserved.</p>
             <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
           </div>
           <p className="md:text-right">All services are for research use unless otherwise specified.</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center w-full text-white/80 text-xs gap-4">
           <p>Kevda Bioworks LLC is a Delaware limited liability company.</p>
        </div>
      </div>
    </footer>
  );
}

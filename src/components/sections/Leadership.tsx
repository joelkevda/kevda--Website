"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const leaders = [
  {
    name: "Aaron Larsen",
    role: "leads scientific direction and execution quality.",
    img: "/assets/Aaron.jpeg",
  },
  {
    name: "Joel Deutsch",
    role: "leads operations, infrastructure, and delivery reliability.",
    img: "/assets/Joel.jpeg",
  },
];

export function Leadership() {
  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 md:py-20 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
      <div className="w-full flex flex-col gap-6 md:gap-10">
        {/* Section header */}
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-medium text-black">
            Leadership
          </h2>
          <p className="text-base md:text-lg font-normal text-black">
            Scientific standards and operational discipline — owned at the top.
          </p>
        </div>

        {/* Leader cards */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
          {leaders.map((leader, i) => (
            <div key={i} className="flex flex-col gap-4 flex-1">
              {/* Photo */}
              <div className="relative w-full max-w-[435px] aspect-9/10 rounded-[28px] overflow-hidden bg-gray-100">
                <Image
                  src={leader.img}
                  alt={leader.name}
                  fill
                  className="object-cover w-full h-fit"
                />
                <div className="absolute inset-0 bg-black/5 rounded-[28px]" />
                <div className="absolute bottom-6 left-6 z-20 md:hidden">
                   <h3 className="text-white text-2xl font-medium drop-shadow-md">{leader.name}</h3>
                </div>
              </div>

              {/* Name pill + description */}
              <div className="bg-[#f7f6f7] rounded-full flex items-center gap-3 px-2 py-2 w-full">
                <span className="bg-[#d3b582] text-black rounded-full px-4 py-2 text-base font-normal backdrop-blur-md shrink-0 text-center whitespace-normal">
                  {leader.name}
                </span>
                <p className="text-[#5e5e5e] font-normal text-sm md:text-base leading-snug flex-1">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


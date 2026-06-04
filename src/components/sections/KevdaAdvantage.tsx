"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function KevdaAdvantage() {
  const cards = [
    {
      title: "Scientific standards",
      desc: "Shaped by leading research and platform biotech environments.",
      bg: "bg-[#d4c29c]",
      img: "/imgs/index/Kevda advantage/scientific1.png",
    },
    {
      title: "Strategic efficiency",
      desc: "Extend R&D runway without compromising data integrity.",
      bg: "bg-[#d4c29c]",
      img: "/imgs/index/Kevda advantage/strategic1.png",
    },
    {
      title: "QC-forward reporting",
      desc: "Structured outputs built for internal and investor review.",
      bg: "bg-[#d4c29c]",
      img: "/imgs/index/Kevda advantage/qc1.png",
    },
    {
      title: "End-to-end logistics",
      desc: "Procurement through reporting managed seamlessly.",
      bg: "bg-[#d4c29c]",
      img: "/imgs/index/Kevda advantage/end1.png",
    },
  ];

  return (
    <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }} className="bg-white w-full py-16 md:py-20 overflow-hidden px-6 md:px-10 lg:px-16 relative z-10">
      <div className="w-full">
        {/* Dark wrapper */}
        <div className="bg-[#084d43] rounded-[24px] py-6 md:py-8 px-4 sm:px-8 md:px-14 flex flex-col items-start w-full relative overflow-hidden">
          {/* Title */}
          <div className="flex items-center justify-between w-full mb-4 md:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-[48px] font-medium text-white leading-tight">
              The Kevda Advantage
            </h2>
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`${card.bg} rounded-xl p-5 md:p-6 flex flex-col gap-3 items-start group hover:scale-[1.01] transition-transform`}
              >
                <div className="relative w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-lg">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 leading-normal">
                  <h3 className="font-medium text-xl md:text-2xl text-black">
                    {card.title}
                  </h3>
                  <p className="font-normal text-lg md:text-xl text-black/70">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button bottom right */}
          <div className="flex justify-end w-full mt-8 md:mt-16">
            <button className="bg-[#d3b582] w-full sm:w-auto text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-normal backdrop-blur-md transition-transform hover:scale-105 text-center whitespace-normal">
              Start a Confidential Discussion
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


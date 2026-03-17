"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export function SiteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Derive state from pathname change synchronously during render
  // This prevents the "flash" of new content before the loader covers the screen
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsLoading(true);
  }

  useEffect(() => {
    // Start the timeout to hide the loader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds fixed delay

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="universal-loader" 
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1.2, ease: "easeInOut" } 
          }}
          style={{ zIndex: 99999 }}
          className="fixed inset-0 bg-white flex items-center justify-center p-8 pointer-events-auto"
        >
          <div className="relative flex flex-col items-center gap-12">
            {/* Main Visual Container */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
              {/* Decorative Pulsing Ring */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 border border-[#d3b582] rounded-full"
              />
              
              {/* Logo Zoom Animation */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ 
                  scale: [0.5, 1.05, 1],
                  opacity: 1 
                }}
                transition={{ 
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                  times: [0, 0.7, 1]
                }}
                className="relative w-24 h-24 md:w-32 md:h-32"
              >
                <Image 
                  src="/assets/799bf25d4a8cf43f03f498d4978b69fb6a4059a1.png" 
                  alt="Kevda Logo" 
                  fill 
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>

            {/* Typography Container */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <h2 className="text-2xl md:text-3xl font-normal tracking-[0.2em] text-black uppercase">
                Kevda Bioworks
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gray-200"></div>
                <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d3b582] font-medium">
                  Advancing Precision
                </span>
                <div className="w-8 h-px bg-gray-200"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

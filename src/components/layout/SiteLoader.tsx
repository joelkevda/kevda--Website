"use client";
import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENES = [
  "/spline/home.splinecode",
  "/spline/capabilities.splinecode",
  "/spline/molecular.splinecode",
  "/spline/cell.splinecode",
  "/spline/protein.splinecode",
  "/spline/specialized.splinecode"
];

export function SiteLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Check if this is the first site load in the session
    const hasSeenLoader = sessionStorage.getItem("kevda_site_loaded");
    
    if (!hasSeenLoader) {
      setIsLoading(true);
      setShouldRender(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
        // Mark as loaded so it doesn't show again in this session
        sessionStorage.setItem("kevda_site_loaded", "true");
        
        // Clean up the preloader after fade out
        setTimeout(() => setShouldRender(false), 2000);
      }, 5000); // 5 seconds for a full preload

      return () => clearTimeout(timer);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      {/* Background Preloader for Spline Scenes */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-0 overflow-hidden" 
        style={{ zIndex: -1, width: 1, height: 1 }}
      >
        <Suspense fallback={null}>
          {SPLINE_SCENES.map((scene) => (
            <div key={scene} className="absolute inset-0">
              <Spline scene={scene} />
            </div>
          ))}
        </Suspense>
      </div>

      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="initial-site-loader"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] } 
            }}
            style={{ zIndex: 99999 }}
            className="fixed inset-0 bg-white flex items-center justify-center p-8 pointer-events-auto"
          >
            <div className="relative flex flex-col items-center gap-12">
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                {/* Decorative Pulsing Ring */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ 
                    duration: 2.5,
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
                    duration: 2.5,
                    ease: "easeOut",
                    times: [0, 0.7, 1]
                  }}
                  className="relative w-24 h-24 md:w-32 md:h-32"
                >
                  <Image 
                    src="/brand/kevda-mark-black.svg"
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
                transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-normal tracking-[0.2em] text-black uppercase">
                  Kevda Bioworks
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gray-200"></div>
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#d3b582] font-medium">
                    Initializing Infrastructure
                  </span>
                  <div className="w-8 h-px bg-gray-200"></div>
                </div>
              </motion.div>

              {/* Loading Bar simulation */}
              <div className="w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden mt-4">
                <motion.div 
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 5, ease: "easeInOut" }}
                  className="w-full h-full bg-[#d3b582]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

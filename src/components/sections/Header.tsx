
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCapabilitiesOpen, setIsCapabilitiesOpen] = React.useState(false);

  const capabilities = [
    { label: "Overview", href: "/capabilities" },
    { label: "Molecular Biology and Vector Engineering", href: "/capabilities/molecular-biology" },
    { label: "Cell Engineering and Functional Analysis", href: "/capabilities/cell-engineering" },
    { label: "Protein Characterization and Immunoassays", href: "/capabilities/protein-characterization" },
    { label: "Specialized RNA and Advanced Delivery", href: "/capabilities/rna-delivery" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 md:px-8 xl:px-16 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100/50 transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
          <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden bg-cover">
            <Image src="/assets/799bf25d4a8cf43f03f498d4978b69fb6a4059a1.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-xl lg:text-2xl font-normal text-black font-space-grotesk whitespace-nowrap group-hover:opacity-70 transition-opacity">Kevda Bioworks</span>
        </Link>
        
        <div className="flex items-center gap-6 lg:gap-10">
          {/* Capabilities Dropdown in Main Header */}
          <div 
            className="hidden lg:block relative"
            onMouseEnter={() => setIsCapabilitiesOpen(true)}
            onMouseLeave={() => setIsCapabilitiesOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-black font-medium hover:opacity-70 transition-opacity py-2">
              Capabilities
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isCapabilitiesOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isCapabilitiesOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-[320px] bg-white shadow-2xl rounded-xl p-4 mt-2 border border-gray-100"
                >
                  <div className="flex flex-col gap-1">
                    {capabilities.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded-lg transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            href="/contact" 
            className="hidden md:block bg-[#d3b582] text-white px-6 py-3 rounded-full text-sm lg:text-base font-medium transition-all duration-300 hover:scale-[1.05] hover:shadow-lg cursor-pointer text-center whitespace-normal"
          >
            Start a Confidential Discussion
          </Link>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center gap-3 group"
          >
            <div className="flex flex-col gap-1.5 items-end">
              <div className="w-8 lg:w-12 h-[2px] bg-black group-hover:w-6 transition-all"></div>
              <div className="w-6 lg:w-8 h-[2px] bg-black group-hover:w-12 transition-all"></div>
            </div>
            <span className="font-medium text-black text-sm lg:text-lg">Menu</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function MenuOverlay({ onClose }: { onClose: () => void }) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) ? prev.filter(i => i !== label) : [...prev, label]
    );
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { 
      label: "Capabilities", 
      href: "/capabilities",
      subItems: [
        { label: "Overview", href: "/capabilities" },
        { label: "Molecular Biology and Vector Engineering", href: "/capabilities/molecular-biology" },
        { label: "Cell Engineering and Functional Analysis", href: "/capabilities/cell-engineering" },
        { label: "Protein Characterization and Immunoassays", href: "/capabilities/protein-characterization" },
        { label: "Specialized RNA and Advanced Delivery", href: "/capabilities/rna-delivery" },
      ]
    },
    { label: "Quality", href: "/quality" },
    { label: "Security and Confidentiality", href: "/security" },
    { label: "Leadership", href: "/leadership" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-80 bg-white flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side: Image/Visual (matching screenshot style) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="hidden md:flex md:w-2/5 p-8 relative overflow-hidden bg-[#f1f1f1]"
      >
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image 
            src="/assets/fdbad05637fd6c756813f49888b2a9121970e37b.png" 
            alt="Scientific visualization" 
            fill 
            className="object-cover blur-sm opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <h2 className="text-4xl lg:text-6xl font-light text-black/20 font-space-grotesk text-center leading-tight">
              ADVANCING <br /> PRECISION <br /> MEDICINE
            </h2>
          </div>
        </div>
      </motion.div>

      {/* Right Side: Menu Items */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-between overflow-y-auto bg-white"
      >
        <div className="flex justify-between items-start mb-8">
          <div className="text-xs font-medium uppercase tracking-widest text-gray-400">Navigation</div>
          <button 
            onClick={onClose}
            className="flex items-center gap-3 text-black hover:opacity-70 transition-opacity"
          >
            <span className="text-lg font-medium">Close</span>
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute w-full h-[2px] bg-black rotate-45"></div>
              <div className="absolute w-full h-[2px] bg-black -rotate-45"></div>
            </div>
          </button>
        </div>

        <nav className="flex flex-col gap-6 md:gap-8">
          {menuItems.map((item) => (
            <div key={item.label} className="group flex flex-col">
              <div className="flex items-center justify-between">
                <Link 
                  href={item.href}
                  onClick={(e) => {
                    if (item.subItems) {
                      e.preventDefault();
                      toggleExpand(item.label);
                    } else {
                      onClose();
                    }
                  }}
                  className={`text-2xl md:text-4xl lg:text-5xl font-normal text-black hover:pl-4 transition-all duration-300 flex items-baseline py-2 md:py-3 gap-4 ${item.subItems ? 'cursor-pointer' : ''}`}
                >
                  {item.label}
                  {!item.subItems && <div className="w-2 h-2 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>}
                </Link>
                {item.subItems && (
                  <button 
                    onClick={() => toggleExpand(item.label)}
                    className="p-2 md:p-4 text-black hover:opacity-50 transition-opacity"
                  >
                    <ChevronDown className={`w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 ${expandedItems.includes(item.label) ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>
              
              <AnimatePresence>
                {item.subItems && expandedItems.includes(item.label) && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 ml-4 md:ml-8 flex flex-col gap-3 pb-4">
                      {item.subItems.map((sub) => (
                        <Link 
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="text-lg md:text-xl text-gray-500 hover:text-black transition-colors flex items-center gap-2 py-2 md:py-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

      
    
      </motion.div>
    </motion.div>
  );
}


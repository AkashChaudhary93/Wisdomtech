'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Search, Menu, X, Share2, Globe, Camera, Briefcase, PlaySquare, GraduationCap, ChevronDown, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const navItems = [
    { title: 'HOME', link: '/' },
    { 
      title: 'ABOUT US', 
      subItems: ['HISTORY', 'MISSION & VISION', 'PRINCIPAL\'S MESSAGE', 'TEACHING STAFF', 'NON TEACHING STAFF'] 
    },
    { 
      title: 'ACADEMICS', 
      subItems: ['UG', 'PG', 'EDUCATION', 'ADMISSION COMMITTEE', 'LIBRARY ADVISORY COMMITTEE', 'RULES AND REGULATIONS', 'PROSPECTUS', 'SUBJECT OUTCOMES', 'RESEARCH', 'FACILITIES'] 
    },
    { 
      title: 'STUDENT ZONE', 
      subItems: ['STUDENT FEEDBACK', 'NOTICE BOARD', 'NSS/NCC', 'ADMISSION', 'FEE STRUCTURE', 'ANTI RAGGING', 'GRIEVANCE REDRESSAL', 'CAREER COUNSELLING', 'WOMEN CELL', 'ECO CLUB', 'ONLINE STUDY'] 
    },
    { 
      title: 'NAAC', 
      subItems: ['MEMBERS', 'AQAR REPORT', 'SSR', 'MENUTES OF MEETING', 'ACADEMIC CALENDER', 'BEST PRACTICES', 'RUSA', 'REPORT'] 
    },
    { 
      title: 'ALUMNI', 
      subItems: ['ALUMNIs'] 
    },
    { 
      title: 'GALLERY', 
      subItems: ['PHOTO GALLERY', 'VIDEO GALLERY'] 
    },
    { 
      title: 'ACCOUNT', 
      subItems: ['LOGIN', 'REGISTER'] 
    },
    { title: 'CONTACT', link: '#' }
  ];

  return (
    <header className="w-full bg-white relative z-50 shadow-md">
      {/* Top Bar */}
      <div className="bg-slate-900 text-slate-300 text-[10px] md:text-xs py-2 px-4 md:px-8 flex justify-between items-center overflow-hidden">
        <div className="flex items-center gap-4 md:gap-6 whitespace-nowrap overflow-x-auto no-scrollbar">
          <span className="flex items-center gap-1.5 shrink-0"><Mail size={12} className="text-orange-500" /> support@wisdom.edu.in</span>
          <span className="flex items-center gap-1.5 shrink-0"><Phone size={12} className="text-orange-500" /> +91 123 456 7890</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <Share2 size={12} className="cursor-pointer hover:text-white transition-colors" />
          <Globe size={12} className="cursor-pointer hover:text-white transition-colors" />
          <PlaySquare size={12} className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 md:py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <GraduationCap size={20} className="md:size-24" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-extrabold tracking-tight font-display text-slate-900 leading-none">WISDOM</h1>
            <p className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-slate-500">Technology</p>
          </div>
        </div>

        {/* Links - Desktop */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 flex-1 justify-center px-4">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <a 
                href={item.link || "#"} 
                className="text-[11px] xl:text-xs font-bold text-slate-700 hover:text-orange-600 focus:text-orange-600 uppercase tracking-wide transition-colors flex items-center gap-1 py-4 whitespace-nowrap"
              >
                {item.title}
                {item.subItems && <ChevronDown size={14} className="text-slate-400 group-hover:text-orange-600 group-hover:-rotate-180 transition-all duration-300" />}
              </a>
              
              {/* Dropdown Menu */}
              {item.subItems && (
                <div className="absolute top-[52px] -left-4 w-60 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] border border-slate-100">
                  <div className="py-2">
                    {item.subItems.map((subItem) => (
                      <a 
                        key={subItem} 
                        href="#" 
                        className="block px-5 py-2.5 text-[12px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-orange-600 transition-colors uppercase tracking-wider whitespace-nowrap"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="relative hidden xl:block">
            <input type="text" placeholder="Search..." className="pl-3 pr-8 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-orange-500 w-32 focus:w-48 transition-all" />
            <Search size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors active:scale-95"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[90] lg:hidden"
              />
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white z-[100] shadow-2xl lg:hidden flex flex-col pt-20 pb-10 overflow-hidden"
              >
                <div className="flex-1 overflow-y-auto px-6 no-scrollbar">
                  {navItems.map((item, idx) => (
                    <div key={item.title} className="mb-2">
                      <div 
                        onClick={() => {
                          if (item.subItems) {
                            setActiveAccordion(activeAccordion === idx ? null : idx);
                          } else {
                            setIsOpen(false);
                          }
                        }}
                        className="flex items-center justify-between py-3 border-b border-slate-50 cursor-pointer"
                      >
                        <span className={`text-sm font-black tracking-wider uppercase ${activeAccordion === idx ? 'text-orange-600' : 'text-slate-800'}`}>
                          {item.title}
                        </span>
                        {item.subItems && (
                          <ChevronRight 
                            size={18} 
                            className={`text-slate-400 transition-transform duration-300 ${activeAccordion === idx ? 'rotate-90 text-orange-600' : ''}`} 
                          />
                        )}
                      </div>
                      
                      {item.subItems && activeAccordion === idx && (
                        <div className="bg-slate-50/50 rounded-xl mt-1 overflow-hidden">
                          {item.subItems.map((sub) => (
                            <a 
                              key={sub} 
                              href="#" 
                              onClick={() => setIsOpen(false)}
                              className="block px-6 py-2.5 text-[11px] font-bold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-widest border-l-2 border-transparent hover:border-orange-500"
                            >
                              {sub}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="px-6 mt-8">
                  <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-xs tracking-widest uppercase shadow-lg shadow-slate-900/20 active:scale-95 transition-transform">
                    Student Login
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Scrolling Marquee */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-[10px] md:text-xs font-bold py-1 overflow-hidden relative flex shrink-0">
        <div className="bg-red-700 px-3 md:px-4 py-1 z-10 whitespace-nowrap shadow-[5px_0px_10px_rgba(0,0,0,0.2)] flex items-center">
          LATEST NEWS
        </div>
        <div className="flex-1 overflow-hidden flex items-center pr-4 relative w-full h-6">
          <marquee className="w-full flex" scrollamount="4">
            <span className="mr-10">Welcome to Wisdom Technology. Admission Open for batch 2026-2027.</span>
            <span className="mr-10 text-yellow-300">New: RUSA report published.</span>
            <span className="mr-10">Mid-term exam dates shortly.</span>
          </marquee>
        </div>
      </div>
    </header>
  );
}

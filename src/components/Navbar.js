'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, Search, Menu, Share2, Globe, Camera, Briefcase, PlaySquare, GraduationCap, ChevronDown } from 'lucide-react';

export default function Navbar() {
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
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center sm:hidden md:flex">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Mail size={14} className="text-orange-500" /> support@wisdom.edu.in</span>
          <span className="flex items-center gap-2"><Phone size={14} className="text-orange-500" /> +91 (123) 456-7890</span>
        </div>
        <div className="flex items-center gap-4">
          <Share2 size={14} className="cursor-pointer hover:text-white transition-colors" />
          <Globe size={14} className="cursor-pointer hover:text-white transition-colors" />
          <Camera size={14} className="cursor-pointer hover:text-white transition-colors" />
          <Briefcase size={14} className="cursor-pointer hover:text-white transition-colors" />
          <PlaySquare size={14} className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-lg">
            <GraduationCap size={24} />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-extrabold tracking-tight font-display text-slate-900 leading-none">WISDOM</h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Technology</p>
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
        <div className="flex items-center gap-3 shrink-0">
          <div className="relative hidden xl:block">
            <input type="text" placeholder="Search..." className="pl-3 pr-8 py-1.5 text-xs rounded border border-slate-300 focus:outline-none focus:border-orange-500 w-32 focus:w-48 transition-all" />
            <Search size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
          <button className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-md transition-colors">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-xs font-bold py-1 overflow-hidden relative flex">
        <div className="bg-red-700 px-4 py-1 z-10 whitespace-nowrap shadow-[5px_0px_10px_rgba(0,0,0,0.2)]">
          LATEST NEWS
        </div>
        <div className="flex-1 overflow-hidden flex items-center pr-4 relative w-full">
          {/* Note: In production you'd use a CSS animation or library for continuous scroll. Using a simple marquee here for structural pairing. */}
          <marquee className="w-full flex" style={{ paddingLeft: '20px' }} scrollamount="6">
            <span className="mr-20">Welcome to Wisdom Technology, where tradition meets innovation. Our curriculum is designed to empower the next generation of leaders.</span>
            <span className="mr-20 text-yellow-300">Admission Open for the batch 2026-2027. Apply Now!</span>
            <span className="mr-20">Dates for Mid-Term examination will be published shortly on the Notice Board.</span>
          </marquee>
        </div>
      </div>
    </header>
  );
}

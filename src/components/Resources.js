'use client';
import { Award, Target, BookOpen, GraduationCap, Laptop, Globe } from 'lucide-react';

export default function Resources() {
  const logos = [
    { title: "UGC", icon: <Award size={32} /> },
    { title: "AICTE", icon: <Target size={32} /> },
    { title: "NAAC", icon: <BookOpen size={32} /> },
    { title: "NPTEL", icon: <Laptop size={32} /> },
    { title: "SWAYAM", icon: <GraduationCap size={32} /> },
    { title: "MOOC", icon: <Globe size={32} /> }
  ];

  return (
    <section className="bg-white py-12 border-t border-slate-100">
      <h2 className="text-2xl font-display text-slate-800 text-center mb-8 tracking-tight">Resources</h2>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {logos.map((logo, i) => (
            <div key={i} className="flex flex-col items-center gap-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
              <div className="w-16 h-16 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-colors shadow-sm">
                {logo.icon}
              </div>
              <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">{logo.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

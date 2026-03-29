'use client';
import { motion } from 'framer-motion';
import { Monitor, Library, Zap, Activity } from 'lucide-react';

export default function Sections() {
  const facilities = [
    { name: 'Hi-Tech Labs', desc: 'Cutting-edge computing and research environments.', icon: <Monitor /> },
    { name: 'Smart Library', desc: 'Over 50K+ digital and physical academic resources.', icon: <Library /> },
    { name: 'Smart Classrooms', desc: 'Interactive learning with 4k projection systems.', icon: <Zap /> },
    { name: 'Sports Arena', desc: 'Wide range of indoor and outdoor sports facilities.', icon: <Activity /> },
  ];

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        {/* Facilities */}
        <div>
          <div className="mb-12"><h2 className="text-4xl font-extrabold tracking-tight font-display text-slate-900 mb-4">World-Class Facilities</h2><p className="text-slate-500 font-medium">We provide everything necessary for a comprehensive and successful education.</p></div>
          <div className="grid sm:grid-cols-2 gap-6">
            {facilities.map((fac, i) => (
              <motion.div key={i} whileHover={{ x: 10 }} className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all transform group-hover:rotate-12">{fac.icon}</div>
                <div><h4 className="text-lg font-bold text-slate-900 mb-1">{fac.name}</h4><p className="text-xs text-slate-500 font-medium leading-relaxed">{fac.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col justify-center">
          <div className="glass p-10 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-display font-black shadow-lg">"</div>
            <div className="space-y-8">
              <p className="text-xl text-slate-700 font-medium italic leading-relaxed">"The four years I spent at Wisdom Technology completely transformed my career path. The faculty's mentorship and the industry-ready labs provided me with an edge during the recruitment process. I am now at a top-tier tech firm, all thanks to Wisdom."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                  <h5 className="text-lg font-bold text-slate-900">Anika Sharma</h5>
                  <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest">Alumni, Class of 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors">←</button>
            <button className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-white transition-colors">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

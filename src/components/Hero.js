'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Users, Star } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="pt-12 md:pt-16 pb-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-bold text-xs uppercase tracking-widest shadow-sm">
              <Star size={14} fill="currentColor" /> A NAAC Accredited College
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Fueling <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Ambition</span>,<br />
              Igniting Excellence.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 max-w-xl leading-relaxed">
              Welcome to Wisdom Technology, where tradition meets innovation. Our curriculum is designed to empower the next generation of leaders.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button className="glow-btn flex items-center gap-2 shadow-indigo-600/20">
                Explore Programs <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 rounded-xl border-2 border-slate-200 font-bold text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Apply Now
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200/60">
              <div><p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 font-display">12K+</p><p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Students</p></div>
              <div><p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 font-display">150+</p><p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Faculty</p></div>
              <div><p className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-slate-600 font-display">A++</p><p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Accredited</p></div>
            </motion.div>
          </motion.div>

          {/* Featured Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] blur-3xl opacity-20 animate-pulse-slow"></div>

            <div className="glass p-8 relative z-10 shadow-2xl border-white/60">
              <div className="flex gap-6 items-start mb-6">
                <div className="w-20 h-20 rounded-2xl bg-slate-200 overflow-hidden shrink-0 border-4 border-white shadow-lg"></div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Dr. S. K. Wisdom</h3>
                  <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest">Principal's Message</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-6">"Our mission is to foster an environment where creativity and curiosity are the primary fuels for academic excellence. We believe in providing every student with the tools to change the world."</p>
              <button className="text-sm font-bold text-indigo-600 flex items-center gap-1 hover:underline">Read Full Message <ArrowRight size={14} /></button>
            </div>

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 -right-6 glass p-4 shadow-xl z-20 flex items-center gap-3 border-orange-100">
              <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><Trophy size={18} /></div>
              <p className="text-xs font-bold whitespace-nowrap">Gold Medal in AI Research</p>
            </motion.div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute -bottom-6 -left-6 glass p-4 shadow-xl z-20 flex items-center gap-3 border-emerald-100">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Users size={18} /></div>
              <p className="text-xs font-bold whitespace-nowrap">500+ Students Placed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

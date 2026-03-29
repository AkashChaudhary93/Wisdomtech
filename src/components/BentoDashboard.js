'use client';
import { motion } from 'framer-motion';
import { Bell, FileText, CheckCircle, Download, BookOpen, Clock, AlertCircle, Calendar } from 'lucide-react';

export default function BentoDashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const rules = [
    "Anti-Ragging Committee", "Library Committee", "Grievance Redressal", "Student Profile Info", "SC / ST Cell"
  ];

  const materials = [
    "Computer Science", "Business Studies", "English Literature", "Mathematics - II"
  ];

  return (
    <section className="py-24 relative z-10 px-4 max-w-7xl mx-auto -mt-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-12 gap-6"
      >
        {/* Main Notifications Center */}
        <motion.div variants={itemVariants} className="md:col-span-4 glass-heavy p-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500 rounded-l-2xl"></div>
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shadow-inner shadow-indigo-200/50">
              <Bell size={24} className="group-hover:animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display tracking-tight text-slate-800">Notifications</h3>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Live Updates</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start p-3 hover:bg-indigo-50/50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-indigo-100">
                <div className="w-2 h-2 mt-2 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <div className="flex-1">
                  <h4 className="text-sm font-extrabold text-slate-700 capitalize">Important Notice {i}</h4>
                  <p className="text-xs font-semibold text-slate-500 mt-1 line-clamp-1">Detailed description for the latest important alert...</p>
                </div>
                {i <= 2 && <span className="text-[9px] font-black uppercase tracking-widest bg-red-100 text-red-600 px-2 py-0.5 rounded shadow-sm">New</span>}
              </div>
            ))}
            <button className="w-full text-center text-xs font-bold text-indigo-600 hover:text-indigo-800 pt-3">
              + View All Notifications
            </button>
          </div>
        </motion.div>

        <div className="md:col-span-8 flex flex-col gap-6">
          <div className="grid md:grid-cols-2 gap-6 flex-1">
            {/* Committee Rules */}
            <motion.div variants={itemVariants} className="glass p-8 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100/50">
                <div className="p-2.5 bg-orange-100 text-orange-600 rounded-lg"><CheckCircle size={20} /></div>
                <h3 className="text-lg font-bold font-display text-slate-800 tracking-tight">Committee Rules</h3>
              </div>
              <ul className="space-y-3">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-center justify-between group/item">
                    <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 transition-colors uppercase tracking-tight">{rule}</span>
                    <button className="text-[10px] bg-slate-100 text-slate-600 font-extrabold px-3 py-1 rounded-full group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all shadow-sm">View</button>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            {/* Study Materials */}
            <motion.div variants={itemVariants} className="glass p-8 group hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100/50">
                <div className="p-2.5 bg-green-100 text-green-600 rounded-lg"><BookOpen size={20} /></div>
                <h3 className="text-lg font-bold font-display text-slate-800 tracking-tight">Study Materials</h3>
              </div>
              <ul className="space-y-3">
                {materials.map((mat, i) => (
                  <li key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors group/item cursor-pointer">
                    <div className="flex items-center gap-3">
                      <FileText size={16} className="text-slate-400 group-hover/item:text-indigo-500" />
                      <span className="text-sm font-bold text-slate-600 group-hover/item:text-slate-900 uppercase tracking-tight">{mat}</span>
                    </div>
                    <Download size={14} className="text-slate-400 group-hover/item:text-indigo-600" />
                  </li>
                ))}
              </ul>
              <button className="w-full text-center text-xs font-bold text-green-600 hover:text-green-800 mt-4">Browse Directory</button>
            </motion.div>
          </div>

          {/* Quick Action Cards (Restored from Row 3 of screenshot) */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
            {/* Admission */}
            <div className="glass p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col relative z-10">
                <h4 className="text-sm font-extrabold text-slate-800">Admission Portal</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Pay fees & Dues</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center relative z-10"><Clock size={16} /></div>
            </div>

            {/* NSS/NCC */}
            <div className="glass p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col relative z-10">
                <h4 className="text-sm font-extrabold text-slate-800">NSS / NCC</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Service & Activity</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center relative z-10"><AlertCircle size={16} /></div>
            </div>

            {/* Online Exam */}
            <div className="glass p-5 rounded-2xl flex items-center justify-between group cursor-pointer hover:-translate-y-1 hover:shadow-xl transition-all overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex flex-col relative z-10">
                <h4 className="text-sm font-extrabold text-slate-800">Online Exams</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Internal Portals</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center relative z-10"><Calendar size={16} /></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

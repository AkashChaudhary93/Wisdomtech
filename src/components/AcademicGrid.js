'use client';
import { motion } from 'framer-motion';
import { Megaphone, Users, Image as ImageIcon, PlaySquare, ShieldAlert, CheckCircle, UploadCloud, UserPlus, BookOpen, Presentation } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

export default function AcademicGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  const resources = [
    { title: "Notice Board", color: "from-blue-500 to-indigo-600", icon: <Megaphone size={32} /> },
    { title: "ERP Portal", color: "from-indigo-500 to-purple-600", icon: <Users size={32} /> },
    { title: "Photo Gallery", color: "from-purple-500 to-pink-600", icon: <ImageIcon size={32} /> },
    { title: "Video Gallery", color: "from-pink-500 to-rose-600", icon: <PlaySquare size={32} /> },
    { title: "Anti Ragging", color: "from-rose-500 to-red-600", icon: <ShieldAlert size={32} /> },
    { title: "Grievance Redressal", color: "from-red-500 to-orange-600", icon: <CheckCircle size={32} /> },
    { title: "Online Application", color: "from-orange-500 to-amber-600", icon: <UploadCloud size={32} /> },
    { title: "Alumni Reg", color: "from-amber-500 to-yellow-600", icon: <UserPlus size={32} /> },
    { title: "Syllabus", color: "from-yellow-500 to-green-600", icon: <BookOpen size={32} /> },
    { title: "Online Study", color: "from-green-500 to-emerald-600", icon: <Presentation size={32} /> },
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-[-10%] w-[30vw] h-[30vw] rounded-full bg-blue-400/10 filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-slate-800 tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900">
            Student Operations
          </h2>
          <p className="text-sm tracking-widest uppercase font-bold text-slate-500">
            Quick access to digital portals
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
        >
          {resources.map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={400} tiltReverse={true} className="h-full">
                <div className="glass p-6 h-full group cursor-pointer shadow-sm shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden rounded-[24px]">
                  {/* Subtle hover gradient wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} p-[1.5px] shadow-sm transform-gpu transition-all duration-300 relative`}>
                    <div className="w-full h-full bg-white group-hover:bg-transparent rounded-[14px] flex items-center justify-center transition-all duration-300 relative z-10">
                      <div className="text-slate-600 group-hover:text-white transition-colors duration-300 transform-gpu group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

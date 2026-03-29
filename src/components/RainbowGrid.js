'use client';
import { Megaphone, Users, UserPlus, Image, FileText, CheckCircle, Upload, ShieldX, PlaySquare, BookOpen } from 'lucide-react';

export default function RainbowGrid() {
  const items = [
    { title: "Notice Board", icon: <Megaphone size={32} /> },
    { title: "ERP Portal", icon: <Users size={32} /> },
    { title: "Photo Gallery", icon: <Image size={32} /> },
    { title: "Video Gallery", icon: <PlaySquare size={32} /> },
    { title: "Anti Ragging", icon: <ShieldX size={32} /> },
    { title: "Grievance Redressal", icon: <CheckCircle size={32} /> },
    { title: "Online Application", icon: <Upload size={32} /> },
    { title: "Alumni Reg", icon: <UserPlus size={32} /> },
    { title: "Syllabus", icon: <FileText size={32} /> },
    { title: "Online Study", icon: <BookOpen size={32} /> },
  ];

  return (
    <section className="bg-white">
      {/* NAAC Banner */}
      <div className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600 py-12 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden shadow-inner">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-widest font-display drop-shadow-lg mb-2 z-10">A NAAC ACCREDITED COLLEGE</h2>
        <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl mb-6 z-10">Empowering Students for Tomorrow's World with Innovation</p>
        <button className="bg-white text-indigo-700 font-extrabold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform z-10">
          + KNOW MORE
        </button>
      </div>

      {/* Rainbow Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item, i) => (
            <div 
              key={i} 
              className="group relative h-32 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center justify-center border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-green-500 to-yellow-500 opacity-90 group-hover:opacity-100 transition-opacity z-0 blur-[2px] group-hover:blur-0 mix-blend-multiply"></div>
              {/* Premium overlay to avoid harsh classic rainbow */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                <span className="drop-shadow-md bg-white/20 p-3 rounded-full backdrop-blur-sm group-hover:bg-white/40 transition-colors">
                  {item.icon}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-wide text-center leading-tight drop-shadow-md px-2">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';
import { Share2, Globe, PlaySquare, Camera, Briefcase, GraduationCap } from 'lucide-react';

export default function Footer() {
  const links = ['Home', 'About Us', 'Admission', 'Student Profile', 'Downloads'];
  const departments = ['Computer Science', 'Electronic Engg', 'Business Studies', 'Science & Arts', 'Law', 'Medicine'];
  const usefulLinks = ['Alumni Registration', 'Feedback', 'Grievance Redressal', 'Student Verification', 'Online Classes'];
  const naac = ['Guidelines', 'DVV', 'SSR', 'Student Satisfaction', 'Best Practices'];

  const Column = ({ title, items }) => (
    <div className="space-y-6">
      <h4 className="text-sm font-black uppercase tracking-widest text-indigo-400">{title}</h4>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <a href="#" className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors group">
              <span className="text-indigo-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-transform">▸</span> {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-slate-900 text-white relative pt-20 border-t border-indigo-900/50 overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute -top-1/2 -left-1/4 w-[50vw] h-[50vw] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 relative z-10">
        
        {/* Visitor & Brand */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <GraduationCap size={24} />
            </div>
            <h2 className="text-xl font-extrabold tracking-tight font-display">WISDOM</h2>
          </div>

          <div className="space-y-3 bg-slate-800/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Total Visitor Tracker</h4>
            <div className="flex gap-1 justify-start">
              {['1','3','0','0','5'].map((digit, i) => (
                <span key={i} className="bg-slate-800 border border-slate-700 text-white font-mono font-bold px-3 py-1.5 text-lg rounded shadow-sm shadow-black/50">
                  {digit}
                </span>
              ))}
            </div>
            <div className="text-[10px] text-slate-400 font-bold space-y-1.5 pt-2">
              <p className="flex justify-between"><span>Of Today:</span> <span className="text-indigo-300">1212</span></p>
              <p className="flex justify-between"><span>Unique:</span> <span className="text-indigo-300">1399</span></p>
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <Column title="QUICK LINKS" items={links} />
        <Column title="DEPARTMENTS" items={departments} />
        <Column title="USEFUL LINKS" items={usefulLinks} />
        <Column title="NAAC" items={naac} />
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Wisdom Technology. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"><Share2 size={14} /></a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"><Globe size={14} /></a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"><PlaySquare size={14} /></a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"><Camera size={14} /></a>
            <a href="#" className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:-translate-y-1 hover:shadow-lg transition-all"><Briefcase size={14} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

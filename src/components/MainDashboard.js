'use client';
import { motion } from 'framer-motion';
import { Download, ChevronRight, PlayCircle, Link as LinkIcon, ExternalLink, Calendar, Plus, Eye, User, Image, Video } from 'lucide-react';

export default function MainDashboard() {
  const HeaderStrip = ({ title }) => (
    <div className="bg-red-700 text-white text-center font-bold text-sm py-2 mb-4 drop-shadow-md">
      {title}
    </div>
  );

  return (
    <section className="py-8 bg-slate-50 relative z-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Recent Activity */}
          <div className="bg-white shadow-lg border border-slate-200">
            <HeaderStrip title="RECENT ACTIVITY" />
            <div className="p-4">
              <div className="w-full h-40 bg-zinc-200 overflow-hidden mb-3 relative group">
                {/* Fallback pattern for missing image */}
                <div className="absolute inset-0 bg-green-900/40 pattern-diagonal-lines sm flex items-center justify-center">
                  <span className="text-white/60 font-bold text-xs uppercase tracking-widest">Image Placeholder</span>
                </div>
              </div>
              <h3 className="text-green-700 font-bold text-lg leading-tight mb-2">NEW DEMO ACTIVITY</h3>
              <p className="text-xs text-slate-600 mb-4 line-clamp-3">
                This is the body content of current activity block. This component is handy if you need to display short bits of information...
              </p>
              <div className="flex justify-between items-center text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar size={12} /> 12/Oct/2026</span>
                <span className="flex items-center gap-1"><User size={12} /> Author</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold hover:bg-blue-700">Read more</button>
              </div>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-white shadow-lg border border-slate-200 flex flex-col">
            <HeaderStrip title="PRINCIPAL'S MESSAGE" />
            <div className="p-4 flex-1 flex flex-col">
              <div className="w-full h-40 bg-slate-900 relative flex items-center justify-center mb-4 overflow-hidden group">
                   <div className="absolute inset-0 bg-indigo-900/50 mix-blend-overlay"></div>
                   <h2 className="text-3xl font-black text-white mix-blend-overlay absolute font-display tracking-widest text-shadow drop-shadow-2xl">DEMO</h2>
                   <PlayCircle size={40} className="text-white z-10 opacity-80 group-hover:scale-110 transition-transform cursor-pointer" />
              </div>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed text-center flex-1">
                "Our mission is to foster an environment where creativity and curiosity are the primary fuels for academic excellence. We believe in providing every student with the tools to change the world. The future demands innovators."
              </p>
              <button className="w-full bg-blue-800 text-white font-bold py-2 text-xs hover:bg-blue-900 transition-colors">
                Know More
              </button>
            </div>
          </div>

          {/* Important Links */}
          <div className="bg-white shadow-lg border border-slate-200">
            <HeaderStrip title="IMPORTANT LINKS" />
            <div className="p-4">
              <ul className="space-y-3">
                {[
                  { title: "Student Login", icon: <User size={14} /> },
                  { title: "Student Feed", icon: <ExternalLink size={14} /> },
                  { title: "Notice Board", icon: <Calendar size={14} /> },
                  { title: "Photo Gallery", icon: <Image size={14} /> },
                  { title: "Video Gallery", icon: <Video size={14} /> }
                ].map((item, i) => (
                  <li key={i} className="flex flex-col">
                    <a href="#" className="flex items-center gap-2 text-sm font-bold text-indigo-700 hover:text-orange-600 transition-colors uppercase tracking-tight py-1">
                      <span className="text-green-600 bg-green-100 p-1 rounded-full">{item.icon}</span> {item.title}
                    </a>
                    {i !== 4 && <div className="h-px bg-slate-100 w-full mt-2" />}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Committee Rules */}
          <div className="bg-white shadow-lg border border-slate-200">
            <HeaderStrip title="COMMITTEE RULES" />
            <div className="overflow-x-auto p-4">
              <table className="w-full text-xs text-left">
                <tbody>
                  {[
                    "Anti-Ragging Committee",
                    "Library Committee",
                    "Grievance Redressal...",
                    "Student Profile Info...",
                    "Anti Sexual Harras...",
                    "SC / ST Cell"
                  ].map((rule, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-2 font-bold text-slate-500 w-8">{i + 1}</td>
                      <td className="py-3 px-2 font-bold text-slate-700 uppercase">{rule}</td>
                      <td className="py-3 px-2 text-right">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded shadow-sm hover:bg-blue-700 hover:shadow transition-all text-xs font-bold leading-none">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white shadow-lg border border-slate-200 flex flex-col">
            <HeaderStrip title="NOTIFICATIONS" />
            <div className="p-6 flex-1 text-sm font-bold text-blue-700 space-y-4 tracking-tight">
              {[1,2,3,4,5,6].map(num => (
                <div key={num} className="flex items-center gap-2 cursor-pointer hover:underline decoration-orange-500">
                   <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                   <span className="uppercase">NOTIC {num}</span>
                   {num < 3 && <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/New_icon.gif" alt="New" className="h-[10px] ml-1 opacity-80" />}
                </div>
              ))}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <a href="#" className="flex items-center gap-1 text-xs text-indigo-600 hover:text-orange-600"><Plus size={12} /> View All Notifications</a>
              </div>
            </div>
          </div>

          {/* Study Material */}
          <div className="bg-white shadow-lg border border-slate-200">
            <HeaderStrip title="STUDY MATERIAL" />
            <div className="overflow-x-auto p-4">
              <table className="w-full text-[11px] text-left">
                <thead className="bg-slate-900 text-white uppercase font-bold tracking-wider">
                  <tr><th className="py-2 px-2">S.No</th><th className="py-2 px-2">Sub Name</th><th className="py-2 px-2 text-center">File</th></tr>
                </thead>
                <tbody>
                  {[
                    "Computer Science",
                    "Business Studies",
                    "English Literature",
                    "Mathematics - II",
                    "Computer Network 3"
                  ].map((sub, i) => (
                    <tr key={i} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="py-3 px-2 font-bold text-slate-500">{i + 1}</td>
                      <td className="py-3 px-2 font-bold text-slate-700 uppercase truncate max-w-[120px]">{sub}</td>
                      <td className="py-3 px-2 text-center">
                        <button className="text-red-600 border border-red-200 bg-red-50 hover:bg-red-600 hover:text-white px-2 py-1 rounded inline-flex items-center gap-1 transition-colors whitespace-nowrap font-bold">
                          <Download size={10} /> Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center mt-4">
                 <button className="bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded">1</button>
                 <button className="text-slate-500 hover:bg-slate-100 px-3 py-1 text-xs font-bold rounded">▶</button>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 3 - Colored Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Admission Card */}
          <div className="bg-white rounded-xl shadow-lg border border-red-100 overflow-hidden flex relative group cursor-pointer">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600 group-hover:w-full transition-all duration-500 z-0"></div>
            <div className="p-6 relative z-10 flex gap-4 w-full">
               <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-md text-white group-hover:bg-red-700 group-hover:text-red-100 transition-colors">
                  <User size={24} />
               </div>
               <div className="flex flex-col justify-center group-hover:text-white transition-colors">
                 <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-white leading-none mb-1">Admission</h3>
                 <p className="text-[10px] text-slate-500 group-hover:text-red-100 font-bold uppercase leading-tight">Click here to pay regular admission fees / fines and other dues.</p>
                 <button className="mt-2 text-[10px] bg-red-600 text-white px-3 py-1 rounded font-bold w-fit hover:bg-white hover:text-red-600 transition-colors inline-flex items-center gap-1">Know More <ChevronRight size={10} /></button>
               </div>
            </div>
          </div>

          {/* NSS/NCC Card */}
          <div className="bg-white rounded-xl shadow-lg border border-yellow-100 overflow-hidden flex relative group cursor-pointer">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500 group-hover:w-full transition-all duration-500 z-0"></div>
            <div className="p-6 relative z-10 flex gap-4 w-full">
               <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-md text-slate-800 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                  <Plus size={24} />
               </div>
               <div className="flex flex-col justify-center group-hover:text-white transition-colors">
                 <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-white leading-none mb-1">NSS/NCC</h3>
                 <p className="text-[10px] text-slate-500 group-hover:text-yellow-100 font-bold uppercase leading-tight">National Service Scheme & National Cadet Corps Activity Portal.</p>
                 <button className="mt-2 text-[10px] bg-yellow-500 text-white px-3 py-1 rounded font-bold w-fit hover:bg-white hover:text-yellow-600 transition-colors inline-flex items-center gap-1">Know More <ChevronRight size={10} /></button>
               </div>
            </div>
          </div>

          {/* Online Exam Card */}
          <div className="bg-white rounded-xl shadow-lg border border-emerald-100 overflow-hidden flex relative group cursor-pointer">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-600 group-hover:w-full transition-all duration-500 z-0"></div>
            <div className="p-6 relative z-10 flex gap-4 w-full">
               <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-md text-white group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Calendar size={24} />
               </div>
               <div className="flex flex-col justify-center group-hover:text-white transition-colors">
                 <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-white leading-none mb-1">Online Exam</h3>
                 <p className="text-[10px] text-slate-500 group-hover:text-emerald-100 font-bold uppercase leading-tight">Systematic Portal for all Internal and Mid-Term Examinations.</p>
                 <button className="mt-2 text-[10px] bg-emerald-600 text-white px-3 py-1 rounded font-bold w-fit hover:bg-white hover:text-emerald-600 transition-colors inline-flex items-center gap-1">Know More <ChevronRight size={10} /></button>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

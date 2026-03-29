'use client';
import { BookOpen, MonitorPlay, Trophy } from 'lucide-react';

export default function Facilities() {
  const sections = [
    { title: "Library", desc: "The campus houses a well stocked library with books, journals...", icon: <BookOpen size={24} /> },
    { title: "Computer Lab", desc: "Equipped with modern desktops, broadband connection.", icon: <MonitorPlay size={24} /> },
    { title: "Sports", desc: "Indoor & outdoor facilities for all-round development.", icon: <Trophy size={24} /> }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4">
      {/* Empty Administration Title Placeholder */}
      <h2 className="text-3xl tracking-tight text-slate-800 text-center mb-16 font-display">Administration</h2>
      
      {/* Facilities Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl tracking-tight text-slate-800 text-center mb-10 font-display">Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sect, i) => (
            <div key={i} className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 border border-slate-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg mb-6">
                {sect.icon}
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-slate-800 mb-3">{sect.title}</h3>
              <p className="text-xs text-slate-500 font-bold leading-relaxed">{sect.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Empty Students Title Placeholder */}
      <h2 className="text-3xl tracking-tight text-slate-800 text-center mb-10 font-display">What Our Students Say</h2>
    </section>
  );
}

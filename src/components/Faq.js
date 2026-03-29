'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Book } from 'lucide-react';

export default function Faq() {
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: "What is your syllabus for B.Tech CS?", a: "The syllabus includes Data Structures, Algorithms, OS, DBMS, and advanced courses." },
    { q: "How to complete online admission process?", a: "Visit the Admission portal by clicking the main red button on the site." },
    { q: "Are scholarships available for students?", a: "Yes, students excelling in academics or sports get varying levels of fee waivers." },
    { q: "Is transport facility available?", a: "We have over 50 buses plying across all major routes in and around the city." },
    { q: "Are books provided by your institution?", a: "Semesterly textbooks checkouts are available through our digitized library." },
    { q: "Where can I contact regarding fee details?", a: "Check the Fee Structure notice, or contact Accounts via the Support email/phone." },
    { q: "When will the results be declared?", a: "Mostly 2 weeks after final examinations are fully concluded." }
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-display text-slate-800 text-center mb-10 tracking-tight">Frequently Asked Questions</h2>
      
      <div className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden divide-y divide-slate-100">
        {faqs.map((faq, i) => (
          <div key={i} className="group">
            <button 
              onClick={() => setOpen(open === i ? -1 : i)}
              className={`w-full flex justify-between items-center text-left py-4 px-6 text-[13px] font-extrabold cursor-pointer transition-colors ${open === i ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'}`}
            >
              <span className="flex items-center gap-3"><HelpCircle size={14} className={open === i ? 'text-blue-600' : 'text-slate-400'} /> {faq.q}</span>
              <ChevronDown size={14} className={`transform transition-transform ${open === i ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
            </button>
            
            {open === i && (
              <div className="px-6 py-4 pb-6 bg-blue-50/50 text-slate-600 text-xs leading-relaxed font-semibold">
                <div className="flex gap-2 items-start"><Book size={12} className="text-blue-500 mt-1 shrink-0" /> <p>{faq.a}</p></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

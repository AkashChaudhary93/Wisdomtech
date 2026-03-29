'use client';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageGallery() {
  const scrollRef = useRef(null);

  // Using high-quality Unsplash URLs that match the exact visual subjects (leaves, garden, rose, sparrow, tech) you uploaded
  const images = [
    { id: 1, url: '/images/dummy1.jpg' },
    { id: 2, url: '/images/dummy2.jpg' },
    { id: 3, url: '/images/dummy3.jpg' },
    { id: 4, url: '/images/dummy4.png' },
    { id: 5, url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80' },
  ];

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-extrabold font-display text-slate-800 tracking-tight">Campus Gallery</h2>
          <p className="text-sm font-bold tracking-widest uppercase text-slate-500 mt-1">Discover Our Campus</p>
        </div>
        <div className="flex gap-3 hidden md:flex">
          <button 
            onClick={() => scroll(-400)} 
            className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm group"
          >
            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => scroll(400)} 
            className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-900 flex items-center justify-center text-white hover:bg-indigo-600 hover:border-indigo-600 transition-colors shadow-lg shadow-slate-900/20 group"
          >
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative w-full">
         <div 
           ref={scrollRef}
           className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-8 pt-2"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
           <style jsx>{`
             div::-webkit-scrollbar {
               display: none;
             }
           `}</style>
           
           {images.map(img => (
             <div 
               key={img.id} 
               className="min-w-[85vw] sm:min-w-[400px] h-[250px] sm:h-[320px] rounded-3xl shrink-0 snap-center relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-200"
             >
               {/* Background Image */}
               <img 
                 src={img.url} 
                 alt={`Dummy Image ${img.id}`} 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
               />
               
               {/* Dark gradient fade for text legibility */}
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-300"></div>
               
               {/* Label & Disclaimer */}
               <div className="absolute bottom-6 left-6 right-6 z-20">
                 <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase drop-shadow-md mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    DUMMY IMAGE {img.id}
                 </h3>
                 <p className="text-xs text-white/90 font-medium leading-tight max-w-[90%] border-l-2 border-blue-600 pl-3 py-0.5">
                   This image is only for demo purpose may be replaced with different image.
                 </p>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
}

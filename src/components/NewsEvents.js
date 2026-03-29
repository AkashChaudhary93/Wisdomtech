'use client';

export default function NewsEvents() {
  const cards = [
    { title: "Demo page 1", image: "https://images.unsplash.com/photo-1542314831-c6a4d14eff3e?w=600&h=400&fit=crop" },
    { title: "Demo page 2", image: "https://images.unsplash.com/photo-1588615419958-3d19ebaaabdb?w=600&h=400&fit=crop" },
    { title: "Demo page 3", image: "https://images.unsplash.com/photo-1525381861757-550f2fbffcc4?w=600&h=400&fit=crop" }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-purple-800 via-indigo-900 to-indigo-950 py-24 relative overflow-hidden">
      {/* Decorative semi-circles mimicking the screenshot */}
      <div className="absolute top-0 left-1/4 w-32 h-16 bg-white/5 rounded-b-full"></div>
      <div className="absolute top-0 left-2/4 w-32 h-16 bg-white/5 rounded-b-full"></div>
      <div className="absolute top-0 left-3/4 w-32 h-16 bg-white/5 rounded-b-full"></div>

      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="bg-white rounded-md overflow-hidden shadow-2xl group flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={card.image} alt="Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {/* Yellow Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-800 font-black text-[10px] uppercase tracking-wider px-6 py-2 rounded-full shadow-md z-10 border-2 border-white">
                  {card.title}
                </div>
              </div>
              <div className="p-8 pt-10 text-center flex-1">
                <p className="text-xs text-slate-600 leading-relaxed font-bold tracking-tight">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              <button className="w-full bg-red-500 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-4 transition-colors">
                Leave a message, we'll answer you
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

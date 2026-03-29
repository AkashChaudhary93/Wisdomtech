import './globals.css';

export const metadata = {
  title: 'Wisdom Technology | Premium Redesign',
  description: 'Excellence in Education. Wisdom Group of Institutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        
        <div className="min-h-screen relative overflow-hidden bg-slate-50 selection:bg-indigo-600 selection:text-white font-sans">
          {/* Background Decorative Animated Blobs */}
          <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <div className="absolute inset-0 bg-dot [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-400/40 mix-blend-multiply filter blur-[100px] animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-400/40 mix-blend-multiply filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-pink-400/40 mix-blend-multiply filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

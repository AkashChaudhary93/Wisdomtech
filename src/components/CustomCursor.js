'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // High stiffness and decent damping for that snappy magnetic feel
  const springConfig = { damping: 30, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch interfaces
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32x32 bounding box
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const isInteractive = 
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') !== null ||
        e.target.closest('button') !== null ||
        e.target.closest('.group') !== null || // Catch bento grid cards and nav items
        e.target.closest('[role="button"]') !== null;
        
      if (isInteractive) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
      
      {/* Outer Magnetic Follow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-exclusion flex items-center justify-center"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        {/* Core Dot (Disappears on hover) */}
        <motion.div 
          className="w-2 h-2 bg-white rounded-full absolute"
          animate={{ scale: isHovered ? 0 : 1, opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.15 }}
        />
        
        {/* Expanding Magnetic Ring */}
        <motion.div
          className="absolute border border-white rounded-full"
          animate={{
            width: isHovered ? 64 : 32,
            height: isHovered ? 64 : 32,
            backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
            opacity: isHovered ? 1 : 0.4,
          }}
          transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </>
  );
}

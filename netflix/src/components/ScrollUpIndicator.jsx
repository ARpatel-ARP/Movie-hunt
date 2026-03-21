import { useEffect, useState } from 'react';

const ScrollIndicator = ({ targetRef }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY < 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => targetRef.current?.scrollIntoView({ behavior: 'smooth' })} // ✅ scrolls to MovieContainer
      className="fixed cursor-pointer bottom-20 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 group"
    >
      <div className="w-11 h-11 rounded-full border border-white/40 bg-white/15 backdrop-blur-sm flex items-center justify-center animate-bounce group-hover:bg-white/25 transition duration-200">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      <span className="text-white/70 tracking-wide text-xl">see more</span>
    </button>
  );
};

export default ScrollIndicator;
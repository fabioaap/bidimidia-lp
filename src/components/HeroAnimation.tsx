
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export const HeroAnimation = () => {
  const compassRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const compassElement = compassRef.current;
    if (!compassElement) return;
    
    let startAngle = 0;
    let lastTimestamp = 0;
    
    const animateCompass = (timestamp: number) => {
      if (!compassElement) return;
      
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      
      // Rotate slowly with slight wobble
      startAngle += elapsed * 0.01;
      const wobble = Math.sin(timestamp / 1000) * 5; // Wobble effect
      const rotation = startAngle + wobble;
      
      compassElement.style.transform = `rotate(${rotation}deg)`;
      lastTimestamp = timestamp;
      
      requestAnimationFrame(animateCompass);
    };
    
    const animationId = requestAnimationFrame(animateCompass);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="relative w-[616px] h-[616px] max-w-full overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 617 617" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Outer circles with sequential ripple animation */}
        <circle 
          cx="308.816" 
          cy="308.479" 
          r="308" 
          fill="white" 
          fillOpacity="0.2"
          className="animate-[ripple_4s_ease-in-out_infinite]"
        />
        <circle 
          cx="308.818" 
          cy="308.478" 
          r="253.465" 
          fill="white" 
          fillOpacity="0.2"
          className="animate-[ripple_4s_ease-in-out_infinite_0.5s]"
        />
        <ellipse 
          cx="308.816" 
          cy="308.479" 
          rx="200.648" 
          ry="198.669" 
          transform="rotate(0.0293449 308.816 308.479)" 
          fill="white" 
          fillOpacity="0.2"
          className="animate-[ripple_4s_ease-in-out_infinite_1s]"
        />
        <circle 
          cx="308.817" 
          cy="308.479" 
          r="136.45" 
          fill="white" 
          fillOpacity="0.2"
          className="animate-[ripple_4s_ease-in-out_infinite_1.5s]"
        />
        
        {/* Compass element that will rotate */}
        <g ref={compassRef} className="origin-center">
          <path 
            d="M308.817 372.925C344.41 372.925 373.263 344.072 373.263 308.479C373.263 272.886 344.41 244.032 308.817 244.032C273.224 244.032 244.37 272.886 244.37 308.479C244.37 344.072 273.224 372.925 308.817 372.925Z" 
            stroke="#FF5521" 
            strokeWidth="8.91631" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <path 
            d="M336.139 281.154L322.476 322.142L281.488 335.804L295.151 294.816L336.139 281.154Z" 
            stroke="#FF5521" 
            strokeWidth="8.91631" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
};

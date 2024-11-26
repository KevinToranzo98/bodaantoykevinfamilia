import React from 'react';

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  animationDelay?: string;
}

export function FloatingImage({ src, alt, className = '', animationDelay = '0s' }: FloatingImageProps) {
  return (
    <div 
      className={`absolute rounded-lg shadow-xl overflow-hidden animate-float ${className}`}
      style={{ animationDelay }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover"
      />
    </div>
  );
}
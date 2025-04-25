
import React, { useEffect, useState } from 'react';
import { Shell, Fish, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [bubbles, setBubbles] = useState<{ id: number; size: number; left: string; animationDuration: number }[]>([]);
  
  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 30 + 10, // 10-40px
      left: `${Math.random() * 100}%`,
      animationDuration: Math.random() * 10 + 5, // 5-15s
    }));
    
    setBubbles(newBubbles);
  }, []);
  
  const WavyText = ({ text }: { text: string }) => (
    <div className="inline-block">
      {text.split('').map((char, i) => (
        <span 
          key={i} 
          className="wavy-text" 
          style={{ '--letter-index': i } as React.CSSProperties}
        >
          {char}
        </span>
      ))}
    </div>
  );
  
  return (
    <section id="dive-in" className="relative min-h-screen pt-24 md:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-light-gradient -z-10"></div>
      
      {/* Parallax background elements */}
      <div className="parallax-layer -z-10 top-1/4" style={{ transform: 'translateZ(-10px) scale(2)' }}>
        <div className="absolute opacity-30 w-96 h-96 rounded-full bg-marine-blue/20 blur-3xl -left-20 top-40"></div>
        <div className="absolute opacity-30 w-80 h-80 rounded-full bg-marine-coral/20 blur-3xl right-10 -top-20"></div>
      </div>
      
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div 
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: bubble.left,
            animationDuration: `${bubble.animationDuration}s`,
            bottom: '-10%',
          }}
        ></div>
      ))}
      
      {/* Fish swimming in background */}
      <div className="absolute top-1/3 left-0 w-12 h-8 text-marine-coral animate-swim-right opacity-70">
        <Fish />
      </div>
      <div className="absolute bottom-1/4 right-0 w-8 h-6 text-marine-blue animate-swim-left opacity-70">
        <Fish />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-marine-blue-dark">
            <WavyText text="Dive Into" /> <br />
            <span className="bg-gradient-to-r from-marine-blue via-marine-turquoise to-marine-coral bg-clip-text text-transparent">
              Paradise
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-marine-blue-dark/80">
            Experience the magical underwater world of Mariana. Discover vibrant coral reefs, 
            swim alongside tropical fish, and create unforgettable memories beneath the waves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="pearl-btn group animate-pulse">
              <div className="absolute inset-0 bg-white/50 rounded-full group-hover:animate-none"></div>
              <Shell className="h-6 w-6 text-marine-blue" />
              <span>Book Your Reef Adventure</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button className="marine-btn">
              Swim With Nature
              <ArrowRight className="h-5 w-5 inline ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-[50px] md:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

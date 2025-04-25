
import React, { useState, useRef, useEffect } from 'react';
import { Pearl, Shell, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const clamRef = useRef<HTMLDivElement>(null);
  
  // Generate random bubbles on click
  const [bubbles, setBubbles] = useState<{ id: number; left: number; size: number }[]>([]);
  
  const addBubbles = () => {
    const newBubbles = [];
    for (let i = 0; i < 6; i++) {
      newBubbles.push({
        id: Date.now() + i,
        left: 40 + (Math.random() * 20),
        size: 5 + (Math.random() * 10)
      });
    }
    
    setBubbles(prev => [...prev, ...newBubbles]);
    
    // Remove bubbles after animation
    setTimeout(() => {
      setBubbles(prev => prev.slice(6));
    }, 2000);
  };
  
  const toggleClam = () => {
    setIsOpen(prev => !prev);
    addBubbles();
  };
  
  return (
    <section id="book-a-tour" className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-light-gradient opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card bg-marine-blue/10 p-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-20 h-20 text-marine-coral opacity-30 transform rotate-45">
              <Shell />
            </div>
            <div className="absolute bottom-0 left-0 w-16 h-16 text-marine-blue opacity-20 transform -rotate-12">
              <Shell />
            </div>
            
            {/* Main content */}
            <div className="text-center">
              <h2 className="text-4xl font-bold text-marine-blue-dark mb-6">
                Ready to Dive Into Paradise?
              </h2>
              
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                Book your magical underwater experience today and create memories that will last a lifetime.
              </p>
              
              {/* Interactive clam with pearl */}
              <div className="mb-10 flex justify-center">
                <div 
                  ref={clamRef} 
                  className="relative cursor-pointer hover:scale-105 transition-transform"
                  onClick={toggleClam}
                >
                  {/* Clam shell */}
                  <div className="relative h-40 w-64">
                    {/* Bottom shell */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-marine-sand rounded-b-full"></div>
                    
                    {/* Top shell */}
                    <div 
                      className={`absolute bottom-[16px] left-0 right-0 h-24 bg-gradient-to-t from-marine-sand to-marine-sand/80 rounded-t-full transition-transform duration-700 origin-bottom ${
                        isOpen ? 'rotate-[-60deg]' : ''
                      }`}
                    ></div>
                    
                    {/* Pearl */}
                    <div 
                      className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 transition-all duration-700 ${
                        isOpen ? 'bottom-20' : 'bottom-6'
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-full bg-white shadow-lg overflow-hidden">
                          <div className="absolute inset-[-25%] bg-gradient-to-br from-white via-white to-transparent opacity-80 rotate-45"></div>
                        </div>
                        <div className="absolute inset-0 rounded-full animate-pulse opacity-70 bg-white shadow-[0_0_15px_5px_rgba(255,255,255,0.7)]"></div>
                      </div>
                    </div>
                    
                    {/* Bubbles */}
                    {bubbles.map(bubble => (
                      <div
                        key={bubble.id}
                        className="absolute rounded-full bg-white/50 animate-bubble-rise"
                        style={{
                          width: `${bubble.size}px`,
                          height: `${bubble.size}px`,
                          left: `${bubble.left}%`,
                          bottom: '20px',
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  <p className="mt-2 text-sm text-marine-blue-dark opacity-80">
                    {isOpen ? "Click to close" : "Click to open"} the clam
                  </p>
                </div>
              </div>
              
              {/* CTA buttons */}
              <div>
                <button className="pearl-btn group mx-auto">
                  <Pearl className="h-6 w-6 text-marine-coral-dark" />
                  <span>Book Your Reef Adventure</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

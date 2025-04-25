
import React, { useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import TourPackages from '@/components/TourPackages';
import DiveMap from '@/components/DiveMap';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Create floating bubbles on cursor movement
  useEffect(() => {
    const createBubble = (e: MouseEvent) => {
      const body = document.querySelector('body');
      if (!body) return;
      
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      const size = Math.random() * 20 + 10; // 10-30px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Position bubble near cursor
      bubble.style.left = `${e.clientX}px`;
      bubble.style.top = `${e.clientY}px`;
      
      // Add to DOM
      body.appendChild(bubble);
      
      // Animate upward
      const animation = bubble.animate(
        [
          { transform: 'translate(0, 0)', opacity: 0.7 },
          { transform: `translate(${(Math.random() - 0.5) * 100}px, -100px)`, opacity: 0 }
        ],
        {
          duration: 1000 + Math.random() * 2000,
          easing: 'cubic-bezier(0,0,0.2,1)'
        }
      );
      
      // Remove bubble when animation completes
      animation.onfinish = () => {
        bubble.remove();
      };
    };
    
    // Add event listener for cursor movement with debounce
    let timeout: NodeJS.Timeout;
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (Math.random() > 0.9) { // Only 10% chance to create bubble
          createBubble(e);
        }
      }, 50);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Add floating fish animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollFish = document.querySelectorAll('.scroll-fish');
      scrollFish.forEach(fish => {
        const fishElement = fish as HTMLElement;
        
        // Get scroll position
        const scrollPosition = window.scrollY;
        
        // Move fish based on scroll position
        const moveX = Math.sin(scrollPosition / 500) * 50;
        const moveY = Math.cos(scrollPosition / 500) * 20;
        
        fishElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Floating fish elements that respond to scroll */}
      <div className="scroll-fish fixed right-[5%] top-[25%] z-[-1] text-marine-coral/20 transform -rotate-12">
        <Fish className="h-16 w-16" />
      </div>
      <div className="scroll-fish fixed left-[10%] top-[60%] z-[-1] text-marine-blue/20 transform rotate-12">
        <Fish className="h-12 w-12" />
      </div>
      
      <NavigationBar />
      <main>
        <HeroSection />
        <TourPackages />
        <DiveMap />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

// Import the Fish icon
const Fish = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 7S8 9 8 12s4 5 4 5"/>
    <path d="M12 19s4-2 4-5-4-5-4-5"/>
    <path d="M8 12h4"/>
    <path d="M16 12h4"/>
    <path d="M2.75 16a14.2 14.2 0 0 0 0-8"/>
    <path d="M21.25 8a14.2 14.2 0 0 0 0 8"/>
  </svg>
);

export default Index;

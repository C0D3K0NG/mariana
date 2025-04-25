
import React, { useState, useEffect } from 'react';
import { Shell, Clover, Shell as PearlIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Shell className="h-10 w-10 text-marine-blue animate-float" />
              <PearlIcon className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-marine-coral" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-marine-blue to-marine-coral bg-clip-text text-transparent">
              Mariana
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#dive-in" icon={<Shell className="h-5 w-5" />}>
            Dive In
          </NavLink>
          <NavLink href="#our-reefs" icon={<Clover className="h-5 w-5" />}>
            Our Reefs
          </NavLink>
          <NavLink href="#marine-map" icon={<Shell className="h-5 w-5 rotate-180" />}>
            Marine Map
          </NavLink>
          <NavLink href="#meet-the-fish" icon={<Shell className="h-5 w-5" />}>
            Meet the Fish
          </NavLink>
        </div>
        
        <div>
          <button className="marine-btn">
            Book a Tour
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const NavLink = ({ href, icon, children }: NavLinkProps) => (
  <a 
    href={href} 
    className="group flex items-center gap-1.5 text-marine-blue-dark hover:text-marine-blue transition-colors duration-300"
  >
    <span className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
    <span className="relative font-medium">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-marine-blue transition-all duration-300 group-hover:w-full"></span>
    </span>
  </a>
);

export default NavigationBar;

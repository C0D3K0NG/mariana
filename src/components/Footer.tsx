
import React from 'react';
import { Shell, Starfish, Pearl, Fish } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-marine-blue-dark text-white pt-20 pb-6 overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-[50px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          style={{ transform: 'rotate(180deg)' }}
        >
          <path 
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
      
      {/* Animated decorations */}
      <div className="absolute top-20 left-10 text-white/10 animate-float">
        <Shell className="h-16 w-16" />
      </div>
      <div className="absolute bottom-10 right-10 text-white/10 animate-float" style={{ animationDelay: '1s' }}>
        <Starfish className="h-12 w-12" />
      </div>
      <div className="absolute top-1/3 right-1/4 text-white/10 animate-swim-left">
        <Fish className="h-8 w-8" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Shell className="h-10 w-10 text-white" />
                <Pearl className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 text-marine-coral" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-marine-coral bg-clip-text text-transparent">
                Mariana
              </span>
            </a>
            <p className="mt-4 text-white/70">
              Discover the magical underwater world with Mariana's exclusive reef tours and marine adventures.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shell className="h-5 w-5 text-marine-coral" />
              Explore
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Our Tours", "Gallery", "Testimonials"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Starfish className="h-5 w-5 text-marine-coral" />
              Information
            </h3>
            <ul className="space-y-2">
              {["Booking", "Safety", "FAQ", "Privacy Policy", "Terms of Service"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Pearl className="h-5 w-5 text-marine-coral" />
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapIcon className="h-5 w-5 mt-0.5 text-marine-coral" />
                <span className="text-white/70">
                  1234 Ocean Drive, Coral Bay, Mariana Islands
                </span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-marine-coral" />
                <a href="tel:+01234567890" className="text-white/70 hover:text-white transition-colors">
                  +0 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-5 w-5 text-marine-coral" />
                <a href="mailto:info@mariana-reefs.com" className="text-white/70 hover:text-white transition-colors">
                  info@mariana-reefs.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Mariana Reef Tours. All rights reserved.</p>
        </div>
      </div>
      
      {/* Animated wave bottom */}
      <div className="absolute bottom-0 left-0 w-full h-6 overflow-hidden">
        <div className="absolute bottom-[-10px] left-0 w-[200%] h-12">
          <div className="absolute top-0 left-0 w-[50%] h-full bg-white/20 animate-wave"></div>
          <div className="absolute top-0 left-[50%] w-[50%] h-full bg-white/20 animate-wave" style={{ animationDelay: '-2s' }}></div>
        </div>
      </div>
    </footer>
  );
};

// Icons
const MapIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default Footer;

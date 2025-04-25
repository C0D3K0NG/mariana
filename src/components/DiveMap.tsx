
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DiveLocation {
  id: string;
  name: string;
  description: string;
  position: { x: string; y: string };
}

const diveLocations: DiveLocation[] = [
  {
    id: "coral-garden",
    name: "Coral Garden Reef",
    description: "A vibrant ecosystem with over 200 coral species and colorful tropical fish.",
    position: { x: "20%", y: "30%" }
  },
  {
    id: "blue-hole",
    name: "Blue Hole",
    description: "A mysterious underwater sinkhole home to rare marine life and spectacular formations.",
    position: { x: "70%", y: "45%" }
  },
  {
    id: "turtle-bay",
    name: "Turtle Bay",
    description: "A protected sanctuary where you can swim with endangered sea turtles.",
    position: { x: "40%", y: "60%" }
  },
  {
    id: "shipwreck",
    name: "Ancient Shipwreck",
    description: "Explore a 19th century shipwreck that's now home to an artificial reef.",
    position: { x: "80%", y: "70%" }
  }
];

const DiveMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  return (
    <section id="marine-map" className="relative py-20 bg-light-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl font-bold text-marine-blue-dark relative">
            Marine Map
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-marine-blue to-marine-coral"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our legendary dive locations and plan your next underwater adventure
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto h-[500px] rounded-xl overflow-hidden shadow-xl">
          {/* Map background */}
          <div className="absolute inset-0 bg-deep-gradient">
            {/* We'll use gradient background for simplicity, but in a real app you'd use an actual map image */}
          </div>
          
          {/* Map decorations */}
          <div className="absolute bottom-10 left-[10%] w-20 h-16 opacity-20">
            <svg viewBox="0 0 512 512" className="fill-white">
              <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"/>
            </svg>
          </div>
          
          <div className="absolute top-[15%] right-[15%] w-20 h-16 opacity-20 rotate-45">
            <svg viewBox="0 0 512 512" className="fill-white">
              <path d="M463.46 32.57a60 60 0 00-84.85 0L41.92 369.14a32 32 0 00-9.38 22.63L32 480l88.23-.63a32 32 0 0022.63-9.37l336.57-336.57a60 60 0 000-84.86z"/>
            </svg>
          </div>
          
          {/* Dive locations */}
          {diveLocations.map((location) => (
            <div 
              key={location.id}
              className="absolute cursor-pointer"
              style={{ 
                left: location.position.x, 
                top: location.position.y
              }}
              onClick={() => setSelectedLocation(location.id === selectedLocation ? null : location.id)}
            >
              <div className={cn(
                "relative transition-transform duration-300",
                selectedLocation === location.id ? "scale-110" : "hover:scale-110"
              )}>
                <div className="absolute -inset-2 rounded-full bg-marine-blue/20 animate-pulse"></div>
                <div className="absolute -inset-4 rounded-full bg-marine-blue/10"></div>
                <MapPin 
                  className={cn(
                    "h-8 w-8 transition-colors duration-300",
                    selectedLocation === location.id ? "text-marine-coral" : "text-white"
                  )} 
                />
              </div>
              
              {/* Location info */}
              {selectedLocation === location.id && (
                <div className="glass-card absolute mt-2 w-48 p-3 text-white transform translate-x-[-50%] left-[50%] z-10">
                  <h4 className="font-medium">{location.name}</h4>
                  <p className="text-xs mt-1 text-white/80">{location.description}</p>
                  <button className="text-xs mt-2 text-marine-coral hover:underline">
                    Learn more
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="marine-btn">View All Locations</button>
        </div>
      </div>
    </section>
  );
};

export default DiveMap;

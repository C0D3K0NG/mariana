
import React, { useState } from 'react';
import { Fish, CircleArrowLeft, CircleArrowRight, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TourPackage {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  location: string;
  image: string;
}

const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Coral Garden Exploration",
    description: "Dive into a kaleidoscope of colors with our Coral Garden tour. Perfect for beginners and families.",
    price: "$89",
    duration: "3 hours",
    location: "Blue Lagoon Reef",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    title: "Deep Blue Adventure",
    description: "Explore the mysterious depths with experienced guides. Encounter rare marine species and underwater caves.",
    price: "$129",
    duration: "5 hours",
    location: "Mariana Trench Edge",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    title: "Sunset Reef Snorkeling",
    description: "Experience the magic of coral reefs during golden hour. A peaceful and romantic adventure.",
    price: "$99",
    duration: "4 hours",
    location: "Pearl Bay",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    title: "Marine Wildlife Expedition",
    description: "Join marine biologists to learn about ocean conservation while swimming with turtles and colorful fish.",
    price: "$149",
    duration: "6 hours",
    location: "Turtle Sanctuary",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600"
  }
];

const TourPackages = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === tourPackages.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? tourPackages.length - 1 : prev - 1));
  };
  
  return (
    <section id="our-reefs" className="relative py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="inline-block text-4xl font-bold text-marine-blue-dark relative">
            Our Reefs
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-marine-blue to-marine-coral"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our unique reef tour packages, each offering an unforgettable underwater adventure
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Fish animations around carousel */}
          <div className="absolute -top-8 -left-8 transform -rotate-12">
            <Fish className="h-12 w-12 text-marine-coral animate-float" />
          </div>
          <div className="absolute -bottom-8 -right-8 transform rotate-12">
            <Fish className="h-10 w-10 text-marine-blue animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
          
          {/* Tour carousel */}
          <div className="flex overflow-hidden relative rounded-2xl shadow-xl">
            {tourPackages.map((tour, index) => (
              <div 
                key={tour.id}
                className="w-full flex-shrink-0 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{tour.location}</span>
                      </div>
                    </div>
                  </div>
                  <Card className="border-0">
                    <CardHeader>
                      <CardTitle className="text-2xl text-marine-blue">
                        {tour.title}
                      </CardTitle>
                      <CardDescription>{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="text-xl font-semibold text-marine-blue">{tour.price}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="text-lg">{tour.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <button className="marine-btn w-full">
                        Book This Tour
                      </button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          {/* Carousel controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-5 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-lg hover:scale-110 transition-transform"
          >
            <CircleArrowLeft className="h-8 w-8 text-marine-blue" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-lg hover:scale-110 transition-transform"
          >
            <CircleArrowRight className="h-8 w-8 text-marine-blue" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {tourPackages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? 'bg-marine-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image";
import  Photo1 from "../../../../public/assets/images/image-10.jpg";
import Photo2 from "../../../../public/assets/images/image-12.jpg";
import  Photo3 from "../../../../public/assets/images/image-13.jpg";
import  Photo4 from "../../../../public/assets/images/fun-2.jpg";
import  Photo5 from "../../../../public/assets/images/fun-3.jpg";
import Photo7 from "../../../../public/assets/images/fun-5.jpg";
import Photo6 from "../../../../public/assets/images/image-4.jpg";
import Photo8 from "../../../../public/assets/images/image-8.jpg";
import Photo9 from "../../../../public/assets/images/fun1.jpg";
import Photo10 from "../../../../public/assets/images/fun-7.jpg";
import Photo11 from "../../../../public/assets/images/fun-6.jpg";
import Photo12 from "../../../../public/assets/images/image-9.jpg";
import Photo13 from "../../../../public/assets/images/fun-5.jpg";
import Photo14 from "../../../../public/assets/images/fun-7.jpg";
import Photo15 from "../../../../public/assets/images/fun-6.jpg";
import Photo16 from "../../../../public/assets/images/image-9.jpg";

const galleryImages = [
  { id: 1, url: Photo1, alt: 'Family outdoor moment' },
  { id: 2, url: Photo2, alt: 'Family in water' },
  { id: 3, url: Photo3, alt: 'Indoor family time' },
  { id: 4, url: Photo4, alt: 'Sunset family' },
  { id: 5, url: Photo5, alt: 'Happy moments' },
  { id: 6, url: Photo6, alt: 'Beach time' },
  { id: 7, url: Photo7, alt: 'Family outdoor moment' },
  { id: 8, url: Photo8, alt: 'Family in water' },
  { id: 9, url: Photo9, alt: 'Indoor family time' },
  { id: 10, url: Photo10, alt: 'Sunset family' },
  { id: 11, url: Photo11, alt: 'Happy moments' },
  { id: 12, url: Photo16, alt: 'Beach time' },
  { id: 13, url: Photo12, alt: 'Family outdoor moment' },
  { id: 14, url: Photo13, alt: 'Sunset family' },
  { id: 15, url: Photo14, alt: 'Happy moments' },
  { id: 16, url: Photo15, alt: 'Beach time' },
];

const Section = ({ id, title, children }) => (
  <section id={id} className="py-16 bg-white">
    {children}
  </section>
);

const CarouselSlide = ({ images, currentIndex, onPrev, onNext }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(currentIndex);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayIndex(currentIndex);
      setIsTransitioning(false);
    }, 50);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Create infinite loop effect by duplicating images
  const extendedImages = [...images, ...images, ...images];
  const startIndex = images.length + displayIndex;

  return (
    <div className="relative w-full mb-8">
      {/* Carousel Container - Full Width */}
      <div className="relative overflow-hidden">
        <div 
          className={`flex transition-transform duration-700 ease-in-out ${isTransitioning ? '' : 'duration-0'}`}
          style={{ 
            transform: `translateX(calc(-${startIndex * 650}px + 50vw - 325px))`,
          }}
        >
          {extendedImages.map((image, idx) => (
            <div
              key={`${image.id}-${idx}`}
              className="flex-shrink-0"
              style={{ width: '650px' }}
            >
              <div className="h-[400px] lg:h-[500px] mx-2 overflow-hidden rounded-lg">
                <Image
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

const GalleryPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Gallery
        </button>

        <div className="text-center mb-12">
         <p className="text-sm text-gray-600 mb-2 tracking-wide">Captured Moments</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Life in Pictures</h2>

          <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
        </div>

        <div className="space-y-6">
          {/* Pattern: 1 big left, 2 small right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={galleryImages[0].url}
                alt={galleryImages[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 lg:gap-6">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[1].url}
                  alt={galleryImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[2].url}
                  alt={galleryImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Pattern: 2 small left, 1 big right (alternating) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="grid grid-rows-2 gap-4 lg:gap-6 order-2 lg:order-1">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[3].url}
                  alt={galleryImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[4].url}
                  alt={galleryImages[4].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer order-1 lg:order-2">
              <Image
                src={galleryImages[5].url}
                alt={galleryImages[5].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Pattern repeats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="lg:col-span-2 h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={galleryImages[6].url}
                alt={galleryImages[6].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 lg:gap-6">
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[7].url}
                  alt={galleryImages[7].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="h-[150px] md:h-[200px] lg:h-[242px] overflow-hidden rounded-lg group cursor-pointer">
                <Image
                  src={galleryImages[8].url}
                  alt={galleryImages[8].alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showGalleryPage, setShowGalleryPage] = useState(false);

  useEffect(() => {
    if (!showGalleryPage) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000); // Auto-slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [showGalleryPage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  if (showGalleryPage) {
    return <GalleryPage onBack={() => setShowGalleryPage(false)} />;
  }

  return (
    <Section id="gallery" title="Gallery">
      <div className="text-center mb-12 animate-fade-in px-4">
  <p className="text-sm text-gray-600 mb-2 tracking-wide">Moments in Time</p>
<h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">A Glimpse Through the Years</h2>

        <div className="h-[5px] bg-[#fcbb68] w-12 mx-auto rounded"></div>
      </div>

      <CarouselSlide
        images={galleryImages}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* See More Button Below Carousel */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setShowGalleryPage(true)}
          className="bg-[#fcbb68] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e5a851] transition-colors shadow-md"
        >
          See More
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 px-4">
        {galleryImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'w-8 bg-[#fcbb68]' : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
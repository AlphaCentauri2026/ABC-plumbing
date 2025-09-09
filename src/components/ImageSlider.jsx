'use client';

import { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderImages = [
    {
      image: '/images/Residential1.jpg',
      title: 'Residential Plumbing',
      description: 'Expert residential plumbing services'
    },
    {
      image: '/images/commercial2.jpg',
      title: 'Commercial Projects',
      description: 'Large-scale commercial installations'
    },
    {
      image: '/images/repair3.jpg',
      title: 'Emergency Repairs',
      description: '24/7 emergency plumbing services'
    },
    {
      image: '/images/Vehicle1.jpg',
      title: 'Mobile Service',
      description: 'Fully equipped service vehicles'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? sliderImages.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === sliderImages.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Work</h2>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
            {sliderImages.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-800 w-12 h-12 rounded-full flex items-center justify-center transition duration-300 shadow-lg"
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;

import React, { useState, useRef, useEffect } from 'react';
import active from './carouselButtons/carousel-1.svg';
import notActive from './carouselButtons/carousel-2.svg';

import Title from '../components/Title';

const Testimonials = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(1); 
  const [isTransitioning, setIsTransitioning] = useState(true); 
  const sliderRef = useRef(null);
  const totalSlides = testimonials.length;

  const extendedSlides = [
    testimonials[totalSlides - 1], 
    ...testimonials,
    testimonials[0], 
  ];

  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.firstElementChild.clientWidth;
      sliderRef.current.style.transition = isTransitioning ? 'transform 0.5s ease-in-out' : 'none';
      sliderRef.current.style.transform = `translateX(calc(-${currentSlide * slideWidth}px + 15%))`; 
    }
  }, [currentSlide, isTransitioning]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false); 
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides);
    } else if (currentSlide === totalSlides + 1) {
      setCurrentSlide(1);
    }
    setTimeout(() => setIsTransitioning(true), 0); 
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1); 
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1); 
  };

  return (
    <section className='max-lg:hidden'>
      <div className='pt-40'>
        <Title sectionId={4}/>
      </div>

      <div className="relative w-full my-20 overflow-hidden bg-p2 rounded-3xl p-10">
        <div
          ref={sliderRef}
          className={`flex transition-transform duration-500 ease-in-out mb-32`}
          onTransitionEnd={handleTransitionEnd}
          style={{
            paddingLeft: '10%', 
            paddingRight: '10%',
          }}
        >
          {extendedSlides.map(({ id, name, title, comment }, index) => (
            <div key={index} className="relative w-full md:w-[65%] flex-shrink-0 px-4 text-start max-md:h-[554px]">
              <div className={`p-8 bg-p2 rounded-3xl`}>
                <p className="text-lg text-p3 italic border border-p1 p-10 rounded-3xl" >"{comment}"</p>
                <div className="mt-8 ml-[50px] text-p1 font-bold">{name}</div>
                <div className="text-gray-500 ml-[50px]">{title}</div>
              </div>

              {/* SVG Polygon for green-bordered shape */}
              <svg className="absolute bottom-[105px] left-[-35%] w-full h-[20px]" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                <polyline points="0,0 50,40 100,80 150,40 200,0" fill="#191A23" stroke="#B9FF66" strokeWidth="8"/>
              </svg>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-[30%] bottom-6 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-[30%] bottom-6  transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        >
          &#9654;
        </button>

        {/* Pagination Dots */}
        <div className='flex justify-center space-x-2 my-6'>
          {testimonials.map((_, index) => (
            <div key={index} onClick={() => setCurrentSlide(index + 1)} className='cursor-pointer'>
              <img src={currentSlide === index + 1 ? active : notActive} alt={`Carousel Button ${index + 1}`} className='h-3 w-3' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

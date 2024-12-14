import React from 'react';

const Slide = ({ slide, isActive }) => (
  <div
    className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
      }`}
  >
    <img
      src={slide.imageUrl}
      alt={slide.title}
      className="absolute w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-65 lg:px-[185px] sm:px-4 px-4 py-2">
      <div className="h-full flex items-center justify-start">
        <div className="flex items-start space-y-8 flex-col text-white max-w-[70%]">
          <h2 className="text-3xl md:text-5xl font-bold leading-10">{slide.title}</h2>
          <p className="text-sm md:text-md">{slide.description}</p>
          <button className="bg-accent text-white px-8 py-3 text-md font-semibold transition-colors">
            <a href="#features">Explore Now</a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Slide;
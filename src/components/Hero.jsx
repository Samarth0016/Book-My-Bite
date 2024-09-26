import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Array of image URLs
  const images = [
    "https://images.pexels.com/photos/601169/pexels-photo-601169.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1581554/pexels-photo-1581554.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3660229/pexels-photo-3660229.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Auto-slide the images every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // 3000 ms = 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency on currentIndex

  return (
    <div className="w-8/10 container mx-auto flex justify-between items-center py-20 px-4 bg-cyan-50">
      {/* Left Side: Text */}
      <div className="w-1/2">
        <h1 className="text-5xl font-bold text-gray-800">Discover the Best Restaurants in Town</h1>
        <p className="mt-4 text-lg text-gray-800">Experience a seamless way to book tables and manage reservations.</p>
        <div className="mt-6">
          <button className="bg-gray-800 text-white py-3 px-6 rounded-lg mr-4"> Book </button>
          <button className="border border-orange-300 py-3 px-6 rounded-lg bg-white">Learn More</button>
        </div>
      </div>

      {/* Right Side: Image Slider */}
      <div className="w-1/2 flex items-center justify-center relative">
        <button
          className="absolute left-0 bg-yellow-50 hover:bg-amber-100 px-3 py-2 rounded-full focus:outline-none md:bg-opacity-40"
          onClick={prevImage}
        >
          {"<"}
        </button>

        <img
          src={images[currentIndex]}
          alt={`Restaurant ${currentIndex + 1}`}
          className="rounded-lg w-full h-75 object-cover"
        />

        <button
          className="absolute right-0 bg-yellow-50 hover:bg-amber-100 px-3 py-2 rounded-full focus:outline-none md:bg-opacity-40"
          onClick={nextImage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Hero;

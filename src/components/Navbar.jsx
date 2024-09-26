import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-cyan-700 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-orange-300">BookMyBite</div>
        <div className="space-x-4">
          <a href="#" className="text-orange-50 hover:text-orange-300">Book Now</a>
          <a href="#" className="text-orange-50 hover:text-orange-300">About Us</a>
          <a href="#" className="text-orange-50 hover:text-orange-300">Menu</a>
          <a href="#" className="text-orange-50 hover:text-orange-300">More Options</a>
        </div>
        <a href="/signup" className="bg-cyan-100 text-cyan-800 py-2 px-4 rounded-lg">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
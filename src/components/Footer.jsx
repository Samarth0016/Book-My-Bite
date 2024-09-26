import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cyan-700 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-orange-300">
          BookMyBite
        </div>

        {/* Footer Links */}
        <div className="space-x-8 text-orange-50">
          <a href="/booknow" className="hover:text-orange-300">Book Now</a>
          <a href="/contactus" className="hover:text-orange-300">Contact Us</a>
          <a href="/aboutus" className="hover:text-orange-300">About Us</a>
          <a href="/faqs" className="hover:text-orange-300">FAQs</a>
          <a href="/support" className="hover:text-orange-300">Support</a>
        </div>

        {/* Social Media Icons */}
        <div className="space-x-4 text-orange-50">
          <a href="https://facebook.com" className="hover:text-orange-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com" className="hover:text-orange-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" className="hover:text-orange-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="hover:text-orange-300">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://youtube.com" className="hover:text-orange-300">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 mt-8 text-center text-orange-50 text-sm">
        <p>© 2024 Restaurant Booking System. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/privacy-policy" className="hover:text-orange-300">Privacy Policy</a>
          <a href="/terms-conditions" className="hover:text-orange-300">Terms and Conditions</a>
          <a href="/cookie-policy" className="hover:text-orange-300">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

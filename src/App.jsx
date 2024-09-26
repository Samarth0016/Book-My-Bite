import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Signup from './components/Signup';
import FeaturesSection from './components/FeaturesSection';
import MoreFeaturesSection from './components/MoreFeaturesSection';
import BookingSteps from './components/BookingSteps';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes> {/* Replace Switch with Routes */}
        <Route path="/" element={
            <>
              <Hero />
              <FeaturesSection /> {/* Adding the Features Section here */}
              <MoreFeaturesSection />
              <BookingSteps/>
              <Footer/>
            </>
          } /> {/* Update the Route syntax */}
          <Route path="/signup" element={<Signup />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
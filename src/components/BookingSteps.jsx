import React from 'react';

const BookingSteps = () => {
  return (
    <div className="w-8/10 items-center justify-center relative container mx-auto py-20 px-4 bg-cyan-50">
      <h2 className="text-sm text-d4a373 mb-2">Easy</h2>
      <h1 className="text-4xl font-bold text-d4a373 mb-4">A Seamless Booking Process for Customers and Admins</h1>
      <p className="text-lg text-d4a373 mb-10">
        Our Restaurant Booking System offers a simple and efficient way for customers to book tables and manage reservations.
        Admins can easily view bookings, generate reports, and manage payments.
      </p>

      <div className="flex justify-between space-x-8">
        {/* Step 1 */}
        <div className="w-1/3 text-center bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-d4a373 mb-2">Step 1: Find a Restaurant</h3>
          <p className="text-d4a373">Browse through our wide selection of restaurants.</p>
        </div>

        {/* Step 2 */}
        <div className="w-1/3 text-center bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-d4a373 mb-2">Step 2: Make a Reservation</h3>
          <p className="text-d4a373">Choose your desired date, time, and number of guests.</p>
        </div>

        {/* Step 3 */}
        <div className="w-1/3 text-center bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-d4a373 mb-2">Step 3: Confirm and Pay</h3>
          <p className="text-d4a373">Review your reservation details and complete the payment.</p>
        </div>
      </div>

      <div className="mt-10 flex space-x-4 justify-center">
        <button className="border border-orange-300 py-3 px-6 rounded-lg bg-white">
          Learn More
        </button>
        <button className="border border-orange-300 py-3 px-6 rounded-lg bg-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default BookingSteps;

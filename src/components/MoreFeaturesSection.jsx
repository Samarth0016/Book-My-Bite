import React from 'react';

const MoreFeaturesSection = () => {
  return (
    <div className="w-8/10 container mx-auto py-20 px-4 items-center justify-center relative bg-cyan-50">
      <div className="flex justify-between items-center">
        {/* Left Side: Text */}
        <div className="w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">Simplify Table Reservations and Streamline Restaurant Management</h1>
          <p className="mt-4 text-lg text-gray-600">
            Seamless way for customers to book tables and manage reservations,
            while providing admins with tools to view bookings, generate reports, and manage payments.
          </p>

          <div className="flex mt-6 space-x-10">
            {/* Feature 1 */}
            <div>
              <div className="mb-4 w-1/4 flex items-center justify-center relative">
                {/* Icon (replace with actual icon) */}
                <img src="https://img.icons8.com/?size=80&id=65342&format=png" alt="Icon 1" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">For Customers</h3>
              <p className="mt-2 text-gray-600">
                Easily book tables, manage reservations, and receive notifications for a hassle-free dining experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div>
              <div className="mb-4 w-1/3 flex items-center justify-center relative">
                {/* Icon (replace with actual icon) */}
                <img src="https://img.icons8.com/?size=80&id=cWBGbqNW3bov&format=png" alt="Icon 2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">For Restaurant Admins</h3>
              <p className="mt-2 text-gray-600">
                Efficiently view bookings, generate reports, and manage payments for streamlined restaurant operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Placeholder for Image */}
        <div className="w-1/2 flex items-center justify-center relative pl-4">
          <img
            src="https://img.freepik.com/premium-photo/restaurant-manager-using-tablet-check-inventory-manage-orders_1327465-36235.jpg?size=626&ext=jpg"
            alt="Feature Illustration"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default MoreFeaturesSection;

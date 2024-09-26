import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Real-Time Table Availability",
      description: "View and manage table availability in real-time to ensure efficient seating arrangements and booking flow.",
      img: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Profile Management",
      description: "Allow customers to create and manage profiles for quick bookings and personalized experiences.",
      img: "https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Notifications & Alerts",
      description: "Send automated notifications to keep your customers informed about their bookings and restaurant updates.",
      img: "https://images.pexels.com/photos/374847/pexels-photo-374847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="w-8/10 container mx-auto py-20 px-4 bg-cyan-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explore the Features of Our Website
      </h2>

      {/* Loop through features to render each feature section */}
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-16 ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={feature.img}
              alt={feature.title}
              className="rounded-lg shadow-lg object-cover w-full h-64"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 md:px-10 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-lg text-gray-600 mb-4">{feature.description}</p>
            <button className="border border-orange-300 py-3 px-6 rounded-lg bg-white">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;

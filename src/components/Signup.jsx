import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#fefae0]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="block w-full mb-4 p-3 border rounded-lg"
        />
        <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg w-full">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
"use client"

import React, { useState } from "react";

const ProductList: React.FC = () => {
  // Full list of cars
  const allCars = [
    { id: 1, name: "Kia Sportage", image: "/myimage/kiasportage.jpg", price: 50 },
    { id: 2, name: "Toyota Corolla", image: "/myimage/toyota.jpg", price: 40 },
    { id: 3, name: "Honda Civic", image: "/myimage/honda.jpg", price: 45 },
    { id: 4, name: "Ford Mustang", image: "/myimage/ford.jpg", price: 70 },
    { id: 5, name: "Chevrolet Malibu", image: "/myimage/malibu.jpg", price: 55 },
    { id: 6, name: "Tesla Model 3", image: "/myimage/tesla.jpg", price: 80 },
    { id: 7, name: "BMW X5", image: "/myimage/bmw.jpg", price: 90 },
    { id: 8, name: "Audi Q7", image: "/myimage/tesla.jpg", price: 85 },
    // { id: 9, name: "Mercedes-Benz C-Class", image: "/myimage/toyota.jpg", price: 100 },
    // { id: 10, name: "Hyundai Sonata", image: "/myimage/audi.jpg", price: 60 },
    // { id: 11, name: "Volkswagen Passat", image: "/myimage/toyota.jpg", price: 65 },
    // { id: 12, name: "Porsche Cayenne", image: "/myimage/toyota.jpg", price: 120 },
  ];

  // State to handle visible cars
  const [visibleCars, setVisibleCars] = useState(8);

  const handleShowMore = () => {
    setVisibleCars(allCars.length); // Show all cars
  };

  return (
    <div className="bg-gray-50 min-h-screen">
<div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-[#3563E9] p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/bl.jpg")', // Replace with your left card image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl w-[272px] font-bold text-[#FFFFFF]  mb-2">
              The Best Platform for Car Rental
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <img
              src="/myimage/hero1.png" // Replace with your car image URL
              alt="Car"
              className="mt-4 w-[340px] h-[108px] ml-40 object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-[#3563E9] p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: 'url("/images/br.jpg")', // Replace with your right card image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-3xl font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2> <br />
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <img
              src="/myimage/hero2.png" // Replace with your car image URL
              alt="Car"
              className="mt-4 w-[340px] h-[108px] ml-40 object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
                
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              ↔
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 py-10 px-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <div
            className="p-6 bg-white rounded-lg shadow-md text-blue-500"
            style={{
              backgroundImage: "url('/path-to-your-image/lightbiueeeeeeeeeeeebg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-xl font-bold mb-4">The Best Platform for Car Rental</h2>
            <p className="text-sm mb-6">
              Ease of doing car rental safely and reliably. Of course, at a low price.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Rental Car
            </button>
          </div>

          {/* Right Card */}
          <div className="p-6 bg-white rounded-lg shadow-md text-blue-500">
            <h2 className="text-xl font-bold mb-4">Easy way to rent a car at a low price</h2>
            <p className="text-sm mb-6">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Rental Car
            </button>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Pick-Up Location</label>
              <input
                type="text"
                placeholder="Select your city"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <input
                type="time"
                className="w-full mt-2 p-2 border rounded-lg"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-10 px-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Cars</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allCars.slice(0, visibleCars).map((car) => (
            <div
              key={car.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              {/* Car Image */}
              <img
                src={car.image}
                alt={car.name}
                className="w-[100%] h-40  object-contain rounded-lg mb-4"
              />

              {/* Car Details */}
              <h3 className="text-lg font-medium text-gray-800 mb-2">{car.name}</h3>
              <p className="text-sm text-gray-500 mb-4">${car.price}/Day</p>

              {/* Rent Button */}
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleCars < allCars.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Show More Cars
            </button>
          </div>
        )}
      </div>
      <footer className="bg-white border-t border-gray-200 ">
      <div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Vision */}
          <div className="pl-8 ml-8 mr-10">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="ml-56">
            <h2 className="text-lg font-semibold text-gray-800">About</h2>
            <ul className="mt-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="ml-14">
            <h2 className="text-lg font-semibold text-gray-800">Community</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Socials</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-sm text-gray-600">
            © 2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default ProductList;

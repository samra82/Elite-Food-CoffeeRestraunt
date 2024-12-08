import React from "react";
import Navbar from "./RestaurantNavbar";
import { IoChevronForwardOutline } from "react-icons/io5";
const Header = () => {
  return (
    <header className="relative bg-hero-image]" >
      {/* Background Image */}
      <div
        className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('public/assets/header.svg')" }}>
    
        {/* Navbar */}
        <Navbar />
      
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">404 Error</h1>
          <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
            <span className="text-[#FF9F0D]">Home</span>
            <IoChevronForwardOutline />
            <span>404</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

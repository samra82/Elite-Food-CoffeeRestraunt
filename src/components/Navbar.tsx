"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Foodtuck</h1>

        {/* Hamburger menu (visible only on small screens) */}
        <button
          className="text-2xl md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-black md:static md:w-auto md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4">
            <li>
              <Link
                href="#"
                className="text-orange-500 font-bold block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block px-4 py-2 transition duration-300 hover:text-orange-600 hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex space-x-4">
          <IoSearchOutline className="text-xl cursor-pointer" />
          <AiOutlineUser className="text-xl cursor-pointer" />
          <HiOutlineShoppingBag className="text-xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

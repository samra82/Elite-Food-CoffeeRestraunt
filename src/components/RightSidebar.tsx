import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const RightSidebar: React.FC = () => {
  return (
    <>
      {/* Header */}
      <header className="relative bg-black w-full">
        <div className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center relative">
          <Image
            src="/assets/header.svg"
            alt="Header Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          <Navbar />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Blog List</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
              <span className="text-white">Home</span>
              <span className="text-[#FF9F0D]">Blog</span>
            </p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog List */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Blog Post 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  width={871}
                  height={520}
                  alt="Blog Post 1"
                  objectFit="cover"
                  priority
                />
                <div className="p-6">
                  <p className="text-gray-500">Feb 14, 2022 / 3 / Admin</p>
                  <h2 className="text-2xl font-semibold mb-2">10 Reasons To Do A Digital Detox Challenge</h2>
                  <p className="text-gray-600">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More</a>
                </div>
              </div>

              {/* Blog Post 2 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/blog2.jpg"
                  width={871}
                  height={520}
                  alt="Blog Post 2"
                  objectFit="cover"
                  priority
                />
                <div className="p-6">
                  <p className="text-gray-500">Feb 14, 2022 / 3 / Admin</p>
                  <h2 className="text-2xl font-semibold mb-2">Traditional Soft Pretzels with Sweet Beer Cheese</h2>
                  <p className="text-gray-600">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More</a>
                </div>
              </div>

              {/* Blog Post 3 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/blog3.jpg"
                  width={871}
                  height={520}
                  alt="Blog Post 3"
                  objectFit="cover"
                  priority
                />
                <div className="p-6">
                  <p className="text-gray-500">Feb 14, 2022 / 3 / Admin</p>
                  <h2 className="text-2xl font-semibold mb-2">The Ultimate Hangover Burger: Egg in a Hole Burger</h2>
                  <p className="text-gray-600">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More</a>
                </div>
              </div>

              {/* Blog Post 4 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src="/assets/blog4.jpg"
                  width={871}
                  height={520}
                  alt="Blog Post 4"
                  objectFit="cover"
                  priority
                />
                <div className="p-6">
                  <p className="text-gray-500">Feb 14, 2022 / 3 / Admin</p>
                  <h2 className="text-2xl font-semibold mb-2">My Favorite Easy Black Pizza Toast Recipe</h2>
                  <p className="text-gray-600">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                  <a href="#" className="text-blue-500 hover:underline mt-4 block">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold">About Me</h3>
              <div className="flex items-center mt-4">
                <Image
                  src="/assets/profile.jpg"
                  alt="Profile"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-semibold">Prince Miyako</h4>
                  <p className="text-sm">Blogger/Photographer</p>
                  <p className="text-xs text-gray-500">(1 Review)</p>
                </div>
              </div>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold">Recent Posts</h3>
              <ul className="text-gray-600 space-y-2">
                <li>June 22, 2020 - Lorem ipsum dolor sit</li>
                <li>June 22, 2020 - Lorem ipsum dolor sit</li>
                <li>June 22, 2020 - Lorem ipsum dolor sit</li>
                <li>June 22, 2020 - Lorem ipsum dolor sit</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold">Filter By Menu</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Chicken Fry (26)</li>
                <li>Burger Food (46)</li>
                <li>Pizza (16)</li>
                <li>Fresh Fruits (36)</li>
                <li>Vegetables (16)</li>
              </ul>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold">Popular Tags</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Sandwich</li>
                <li>Tikka</li>
                <li>BBQ</li>
                <li>Restaurant</li>
                <li>Chicken Sharma</li>
                <li>Health</li>
                <li>Fastfood</li>
                <li>Food</li>
                <li>Burger</li>
                <li>Chicken</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RightSidebar;
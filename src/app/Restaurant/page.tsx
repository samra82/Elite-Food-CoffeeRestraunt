import React from 'react';
import Image from 'next/image';

const Restaurant: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Header Hero */}
      <div className="relative h-[950px]">
        <Image
          src="/path/to/your/header-image.jpg"
          alt="Restaurant Header"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 p-8">
          <h1 className="text-6xl font-bold">The Art of Speed Food Quality</h1>
          <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <h2 className="text-4xl mt-4 text-orange-500">It's Quick & Amusing!</h2>
          <button className="mt-6 px-6 py-3 bg-orange-500 rounded">See Menu</button>
        </div>
      </div>

      {/* About Us */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold">We Create the Best Foody Product</h2>
        <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded">
            <h3 className="text-2xl font-bold">Our Menu</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Food Category */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold">Choose Food Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Food Item Example */}
          <div className="bg-gray-800 p-6 rounded">
            <Image
              src="/path/to/your/food-image.jpg"
              alt="Food Item"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-xl font-bold mt-2">Lettuce Leaf</h3>
            <p className="text-lg">$12.50</p>
            <p className="text-sm">Lacus nisi, et ac dapibus velit in consequat.</p>
          </div>
          {/* Repeat for more food items */}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 bg-gray-800">
        <h2 className="text-4xl font-bold">What Our Clients Are Saying</h2>
        <div className="mt-8">
          <div className="bg-gray-900 p-6 rounded">
            <p className="text-lg">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
            <h3 className="text-xl font-bold mt-2">Alamin Hasan</h3>
            <p className="text-sm">Food Specialist</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 bg-gray-900">
        <div className="flex justify-between">
          <div>
            <h3 className="text-2xl font-bold">About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Useful Links</h3>
            <p>About | News | Partners | Team | Menu | Contacts</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Help?</h3>
            <p>FAQ | Terms & Conditions | Support Policy | Privacy</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Restaurant;
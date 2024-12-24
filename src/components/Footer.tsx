import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About</h3>
          <p className="text-sm text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Email:</span> akhizra670@gmail.com
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Phone:</span> +92 321 301 1912
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Archived</li>
            <li>Author</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold mb-4">Category</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
            <li>Sports</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Weekly Newsletter</h3>
          <p className="text-sm text-gray-600 mb-4">
            Get blog articles and offers via email.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Image src={"/images/logo.png"} alt="logo" height={50} width={70} />
            <div className=" flex flex-col">
              <span>Aini Khizra Blog</span>
              <span>Aini Khizra 2025. &copy; All Rights Reserved.</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

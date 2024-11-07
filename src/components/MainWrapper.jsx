import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Navbar Components
const NavbarComponents = ({ userName = "John Doe" }) => {
  return (
    <header className="p-2 mt-5">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo dan Nama User */}
          <div className="flex items-center space-x-4">
            <Link to="/home" className="flex items-center">
              <img src="/assets/01.png" alt="Logo" className="h-10 w-auto rounded-full" />
            </Link>
            <span className="text-black font-semibold text-lg">{userName}</span>
          </div>

          {/* Button dan Ikon */}
          <div className="flex items-center space-x-6">
            <button className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600">
              Create New Order
            </button>
            <button className="relative text-black-400 hover:text-gray-200">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>
            <button className="text-black-400 hover:text-gray-200">
              <FaUser size={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Footer Components
const Footer = () => {
  return (
    <footer className="text-black py-10 mt-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <img src="/assets/01.png" alt="Logo" className="h-10 w-auto" />
            <p className="text-black-400">
              Kami menyediakan layanan yang andal dan terpercaya, siap mendukung kebutuhan Anda setiap saat.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-black">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-500">Features</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h3 className="text-lg font-semibold text-black">Hubungi Kami</h3>
            <ul className="mt-4 space-y-2">
              <li><span className="text-black">Email: support@example.com</span></li>
              <li><span className="text-black">Phone: +123 456 789</span></li>
              <li><span className="text-black">Alamat: Jalan Raya No. 123, Jakarta</span></li>
            </ul>
          </div>
        </div>

        {/* Media Sosial */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p className="text-black">© 2024 Company Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-blue-500"><FaFacebookF size={20} /></a>
            <a href="#" className="text-black hover:text-blue-500"><FaTwitter size={20} /></a>
            <a href="#" className="text-black hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="#" className="text-black hover:text-blue-700"><FaLinkedinIn size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main Wrapper
const MainWrapper = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavbarComponents userName="John Doe" />
      
      {/* Main Content */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainWrapper;

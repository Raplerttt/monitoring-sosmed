import React, { useState } from 'react';
import { FaBell, FaUser, FaChevronDown, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

// Navbar Components
const NavbarComponents = ({ userName = "John Doe" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Untuk navigasi setelah logout

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle logout
  const handleLogout = () => {
    // Menghapus data session atau token pengguna jika ada
    localStorage.removeItem('userToken');  // Contoh menggunakan localStorage, sesuaikan dengan implementasi
    sessionStorage.removeItem('userToken'); // Jika menggunakan sessionStorage

    // Redirect ke halaman login setelah logout
    navigate('/login');
  };

  return (
    <header className="p-4 mt-5 animate-fadeIn bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo dan Nama User */}
        <div className="flex items-center space-x-4">
          <Link to="/home" className="flex items-center">
            <img src="/assets/01.png" alt="Logo" className="h-10 w-auto rounded-full" />
          </Link>
          <span className="text-black font-semibold text-lg">{userName}</span>
        </div>

        {/* Tombol Hamburger untuk mobile */}
        <button
          className="block lg:hidden text-black"
          onClick={toggleMobileMenu}
        >
          <FaBars size={24} />
        </button>

        {/* Button dan Ikon di desktop */}
        <div className="lg:flex items-center space-x-6 hidden">
          <button className="bg-red-400 text-black px-4 py-2 rounded-md hover:bg-orange-200 transition-all">
            Create New Order
          </button>
          <button className="relative text-red-400 hover:text-orange-200">
            <FaBell size={20} />
            <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              3
            </span>
          </button>

          {/* Icon User with Dropdown */}
          <div className="relative">
            <button
              className="text-black-400 hover:text-gray-200 flex items-center"
              onClick={toggleDropdown}
              aria-expanded={isDropdownOpen}
            >
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <FaUser size={20} />
              </div>
              <FaChevronDown
                size={16}
                className={`ml-2 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-10">
                <ul className="py-2">
                  <li>
                    <Link to="/edit-account" className="block px-4 py-2 text-black hover:bg-gray-200">Edit Akun</Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}  // Panggil handleLogout saat klik logout
                      className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal untuk mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-start">
          <div className="flex flex-auto bg-white w-full max-w p-10 flex-col items-center space-y-4 animate-slideDown">
            <button
              className="self-end text-black text-2xl"
              onClick={toggleMobileMenu}
            >
              &times;
            </button>

            {/* Profil User */}
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-white">
              <FaUser size={30} />
            </div>

            {/* Nama User */}
            <span className="text-black font-semibold">{userName}</span>

            {/* Menu Mobile */}
            <button className="bg-red-400 text-black px-4 py-2 rounded-md hover:bg-orange-200 transition-all w-full text-center">
              Create New Order
            </button>

            <button className="bg-red-400 text-black px-4 py-2 rounded-md hover:bg-orange-200 transition-all w-full text-center">
              Reporting
            </button>

            <button
            className="justify-end right-14 bg-red-400 text-black px-4 py-2 rounded-md hover:bg-orange-200 transition-all"
            onClick={handleLogout} // Panggil handleLogout saat klik logout
            >
             Logout
            </button>

            {/* Ikon Notifikasi di kiri atas */}
            <button className="absolute top-6 left-4 z-20  text-red-400 px-2 py-2 rounded-md">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                3
              </span>
            </button>

          </div>
        </div>
      )}
    </header>
  );
};

// Footer Components
const Footer = () => {
  return (
    <footer className="text-black py-10 mt-10 animate-fadeIn">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo dan Deskripsi */}
          <div className="space-y-4 text-center md:text-left">
            <img src="/assets/01.png" alt="Logo" className="h-10 w-auto mx-auto md:mx-0" />
            <p className="text-black-400">
              Kami menyediakan layanan yang andal dan terpercaya, siap mendukung kebutuhan Anda setiap saat.
            </p>
          </div>

          {/* Navigasi */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-black">Navigasi</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/home" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/features" className="hover:text-blue-500">Features</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="text-center md:text-left">
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
            <Link href="#" className="text-black hover:text-blue-500"><FaFacebookF size={20} /></Link>
            <Link  href="#" className="text-black hover:text-blue-500"><FaTwitter size={20} /></Link>
            <Link  href="#" className="text-black hover:text-pink-500"><FaInstagram size={20} /></Link>
            <Link  href="#" className="text-black hover:text-blue-700"><FaLinkedinIn size={20} /></Link>
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
        <div className="container mx-auto px-4 py-8 md:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainWrapper;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { Navigate, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate(); // Menggunakan state untuk mengontrol visibilitas password

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle status visibilitas password
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate("/");
    // Tambahkan logika login di sini
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="./assets/order-7.png"
          alt="Logo"
          className="object-cover w-1/3 sm:w-2/4 md:w-full lg:w-full mx-auto"  // Mengatur lebar gambar
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center text-3xl text-black mb-6">
          <p>Login</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Masukkan Username Anda"
              required
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              required
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-2 flex items-center"
              style={{ top: '70%', transform: 'translateY(-50%)', right: '3%' }} 
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Masuk
            </button>
            <a 
              href="#"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Lupa Password?
            </a>
          </div>

          <div className="mt-4 text-sm">
            <label className="inline-flex items-center text-gray-700">
              <span className="ml-2">Belum punya akun? <a href="/register" className="text-blue-500">Daftar</a></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

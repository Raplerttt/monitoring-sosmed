import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false); // Menggunakan state untuk mengontrol visibilitas password
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle status visibilitas password
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pendaftaran di sini
    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok");
    } else {
      // Lakukan pendaftaran
      alert("Pendaftaran berhasil!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img src="./assets/order-7.png" alt="Logo" className="object-cover w-1/3 sm:w-2/4 md:w-full lg:w-full mx-auto" />
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center text-3xl text-black mb-6">
          <p>Daftar</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="username"
              type="text"
              placeholder="Masukkan Username Anda"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Masukkan Email Anda"
              value={formData.email}
              onChange={handleInputChange}
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
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={formData.password}
              onChange={handleInputChange}
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

          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Konfirmasi Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10"
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleInputChange}
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
              Daftar
            </button>
          </div>
          {/* <div className="mt-4 text-sm">
            <label className="inline-flex items-center text-gray-700">
              <input 
                type="checkbox" 
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
              />
              <span className="ml-2">Saya setuju dengan <a href="#" className="text-blue-500">syarat dan ketentuan</a></span>
            </label>
          </div> */}
          <div className="mt-4 text-sm">
            <label className="inline-flex items-center text-gray-700">
              <span>Sudah punya akun? <a href="/login" className="text-blue-500">Masuk</a></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import axios from "../utils/axios";

const RegisterComponent = () => {
  const [showPassword, setShowPassword] = useState(false); // Menggunakan state untuk mengontrol visibilitas password
  const [formData, setFormData] = useState({
    username: '',
    name: '', // Tambahkan name untuk menyimpan nama lengkap
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(''); // Menyimpan error message
  const [successMessage, setSuccessMessage] = useState(''); // Menyimpan success message

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
  
    // Validasi password dan konfirmasi password
    if (formData.password !== formData.confirmPassword) {
      setError("Password dan konfirmasi password tidak cocok");
      return;
    }
  
    try {
      const response = await axios.post('user/register', { ...formData });
  
      // Cek apakah statusnya 2xx (untuk sukses)
      if (response.status >= 200 && response.status < 300) {
        setSuccessMessage("Pendaftaran berhasil!");
        setFormData({
          username: '',
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        // Jika tidak 2xx, tampilkan pesan kesalahan dari server
        setError(response.data.error || "Terjadi kesalahan saat menghubungi server.");
      }
    } catch (error) {
      console.error(error);  // Log kesalahan untuk debugging
      
      if (error.response) {
        // Jika error datang dari server, tampilkan pesan error
        setError(error.response.data.error || "Terjadi kesalahan saat menghubungi server.");
      } else {
        // Jika tidak ada respons atau masalah saat mengirim permintaan
        setError("Terjadi kesalahan saat mengirim permintaan ke server.");
      }
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

        {/* Display error or success message */}
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm text-center mb-4">{successMessage}</p>}

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

          {/* Nama Lengkap */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Masukkan Nama Lengkap Anda"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Konfirmasi Password */}
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

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Daftar
            </button>
          </div>

          {/* Link to Login */}
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

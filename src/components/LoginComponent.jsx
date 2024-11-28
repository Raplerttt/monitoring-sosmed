import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import { useNavigate, Link } from "react-router-dom";
import axios from "../utils/axios";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Ganti menjadi lowercase untuk konsistensi

  // Fungsi untuk toggle visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };


  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  // Fungsi untuk login
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Mengirim data login ke backend
      const response = await axios.post('user/login', { username, password }, { withCredentials: true });

      // Jika login berhasil, simpan token dan redirect
      sessionStorage.setItem('token', response.data.token); // Menyimpan token JWT di localStorage
      sessionStorage.setItem("username", username);
      navigate("/"); // Redirect ke halaman home setelah login berhasil
    } catch (error) {
      // Jika ada error, tampilkan pesan error
      setError('Username atau Password salah.');
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      {/* Left Side - Gambar */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="./assets/order-7.png"
          alt="Logo"
          className="object-cover w-1/3 sm:w-2/4 md:w-full lg:w-full mx-auto"  // Mengatur lebar gambar
        />
      </div>

      {/* Right Side - Form Login */}
      <div className="w-full md:w-1/2 max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center text-3xl text-black mb-6">
          <p>Login</p>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-2 flex items-center"
              style={{ top: '70%', transform: 'translateY(-50%)', right: '3%' }} 
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
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
            {/* Menggunakan Link dari react-router-dom */}
            <Link 
              to="/forgot-password" // Menggunakan react-router Link untuk navigasi
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Lupa Password?
            </Link>
          </div>

          <div className="mt-4 text-sm">
            <label className="inline-flex items-center text-gray-700">
              <span className="ml-2">Belum punya akun? <Link to="/register" className="text-blue-500">Daftar</Link></span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Cek apakah token ada di localStorage
  const token = sessionStorage.getItem('token');

  // Jika tidak ada token, arahkan ke halaman login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Jika token ada, tampilkan komponen yang diminta
  return <Outlet />;
};

export default ProtectedRoute;

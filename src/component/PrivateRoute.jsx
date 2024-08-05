// src/components/PrivateRoute.jsx
import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  return isAuthenticated ? <Outlet /> : <Navigate to="/jobseekerlogin" />;
};

export default PrivateRoute;

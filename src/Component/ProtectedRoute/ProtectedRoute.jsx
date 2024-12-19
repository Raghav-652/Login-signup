/*import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  // Check if the user is logged in
  if (!user) {
    return <Navigate to="/login" />;
  }
  // If a specific role is required, check the user's role
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" />; // Redirect to home or any other page if the role doesn't match
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;*/

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If authenticated, show the child component (e.g., Dashboard, Profile)
  return children;
};

export default ProtectedRoute;


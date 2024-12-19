/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    } else {
      navigate('/login'); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login status
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {isLoggedIn ? (
        <div>
          <p>Welcome back to your dashboard!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserDashboard;*/

import React from 'react'

const Userdashboard = () => {
  return (
    <div>Userdashboard</div>
  )
}

export default Userdashboard
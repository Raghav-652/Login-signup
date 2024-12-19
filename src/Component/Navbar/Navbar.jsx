
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';


// const Navbar = () => {
    
      
//   return (
//     <nav>
//       <div>
//       <ul className="navbar-links">
//         <li>
//           <Link to="/"className='links'>Home</Link>
//         </li>
        
          
//         <li>
//           <Link to="/about" className='links'>About</Link>
//         </li>
//         <li>
//           <Link to="/details"className='links'>User details</Link>
//         </li>
//         <li>
//           <Link to="/contact" className='links'>Contact</Link>
//         </li> 
        
        

        
        
        
// <div className='login-btn'>

// <Link to="/login">
// <button>Login</button></Link>
// </div>
        
// </ul>
// </div>
//   </nav>
//       )
//     }
      
//   export default Navbar;


//   import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check if the user is logged in on initial load
//   useEffect(() => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       setIsLoggedIn(true);  // If user exists in localStorage, consider them logged in
//     }
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     localStorage.removeItem('user');  // Clear user data from localStorage
//     setIsLoggedIn(false);  // Update the state to reflect the logged out status
//   };

//   return (
//     <nav>
//       <div>
//         <ul className="navbar-links">
//           <li>
//             <Link to="/" className="links">Home</Link>
//           </li>
//           <li>
//             <Link to="/about" className="links">About</Link>
//           </li>
//           <li>
//             <Link to="/details" className="links">User Details</Link>
//           </li>
//           <li>
//             <Link to="/contact" className="links">Contact</Link>
//           </li>
//         </ul>

//         <div className='login-btn'>
//           {isLoggedIn ? (
//             <button onClick={handleLogout}>Logout</button>  // Show Logout if logged in
//           ) : (
//             <Link to="/login">
//               <button>Login</button>  
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // Set up state to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login and logout
  const handleLogin = () => {
    setIsLoggedIn(true);  // User logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  // User logged out
  };

  return (
    <nav>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/" className="links">Home</Link>
          </li>
          <li>
            <Link to="/about" className="links">About</Link>
          </li>
          <li>
            <Link to="/details" className="links">User Details</Link>
          </li>
          <li>
            <Link to="/contact" className="links">Contact</Link>
          </li>

          
          <div className="login-btn">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>  // Show Logout button if logged in
            ) : (
              <Link to="/login">
                <button onClick={handleLogin}>Login</button>  
              </Link>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;*/


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import './Navbar.css';

const Navbar = () => {
  // Set up state to track whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Initialize navigate function from useNavigate hook
  const navigate = useNavigate();

  // Handle login and logout
  const handleLogin = () => {
    setIsLoggedIn(true);  // User logged in
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  // User logged out
    localStorage.removeItem('user');  // Optional: Clear user data if needed
    localStorage.removeItem('userRole');  // Optional: Clear user role if needed
    navigate('/user-dashboard');  // Redirect to user-dashboard
  };

  return (
    <nav>
      <div className="navbar-container">
        {/* Logo on the left side of the navbar */}
        <div className="logo-container">
            <span className="logo-name">MyApp</span> {/* Optional name next to the logo */}
        </div>



        <ul className="navbar-links">
          <li>
            <Link to="/" className="links">Home</Link>
          </li>
          <li>
            <Link to="/about" className="links">About</Link>
          </li>
          <li>
            <Link to="/details" className="links">User Details</Link>
          </li>
          <li>
            <Link to="/contact" className="links">Contact</Link>
          </li>

          {/* Conditionally render the Login/Logout button */}
          <div className="login-btn">
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>  // Show Logout button if logged in
            ) : (
              <Link to="/login">
                <button onClick={handleLogin}>Login</button>  
              </Link>
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


        

/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // You can style your sidebar h from 
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  // State to toggle the dropdown

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          
        </div>
        <ul className="sidebar-menu">
        <li>
            <Link to="/dashboard" onClick={toggleDropdown}>
              Dashboard
            </Link>
            
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/dashboard/overview">Overview</Link></li>
                <li><Link to="/dashboard/add details">Add Details</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;*/


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Sidebar.css'; // Assuming you have a CSS file for styling

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown
//   const navigate = useNavigate();

  
//    const userRole = 'admin';  

  
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

  
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

  
//   const handleLogout = () => {
  
//     localStorage.removeItem('user'); 
//     navigate('/login'); 
//   };

//   return (
//     <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
//       <div className="sidebar">
//         <div className="sidebar-header">
          
//         </div>
//         <ul className="sidebar-menu">
//           <li>
//             <Link to="/dashboard" onClick={toggleDropdown}>
//               Dashboard
//             </Link>
          
//             {isDropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/dashboard/overview">Overview</Link></li>
//                 <li><Link to="/dashboard/add-details">Add Details </Link></li>
//               </ul>
//             )}
//           </li>
//           <li><Link to="/User Management">User Management</Link></li>

//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/settings">Settings</Link></li>

          
//           {/* {userRole && (
//             <li>
//               <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </li>
//           )} */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Sidebar.css'; // Assuming you have a CSS file for styling

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown
//   const navigate = useNavigate();
//   const location = useLocation();  // To get the current route

//   // Dynamically get the user role from localStorage or Auth0
//   const userRole = localStorage.getItem('userRole') || 'user'; // Default to 'user' if not set

//   // Ensure Sidebar is shown only on the Admin Dashboard
//   const isAdminPage = location.pathname.includes('/admin-dashboard');

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user'); // Clear user data
//     localStorage.removeItem('userRole'); // Clear role data
//     navigate('/login'); // Redirect to login page
//   };

//   // Show Sidebar only for admin users on Admin Dashboard
//   if (userRole !== 'admin' || !isAdminPage) {
//     return null; // Return null if the user is not an admin or not on the admin page
//   }

//   return (
//     <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
//       <div className="sidebar">
//         <div className="sidebar-header">
//           {/* You can add header content here */}z
//         </div>
//         <ul className="sidebar-menu">
//           <li>
//             <Link to="/admin-dashboard" onClick={toggleDropdown}>
//               Dashboard
//             </Link>
//             {isDropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li><Link to="/overview">Overview</Link></li>
//                 <li><Link to="/add-details">Add Details</Link></li>
               
//               </ul>
//             )}
          
//           <li><Link to="/user-management">User Management</Link></li>
//           <li><Link to="/profile">Profile</Link></li>
//           <li><Link to="/settings">Settings</Link></li>
//           </li>
          
//           {/* Logout Button */}
//           {/* <li>
//             <button className="logout-button" onClick={handleLogout}>Logout</button>
//           </li> */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;










// Sidebar.js
// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import './Sidebar.css'; // Assuming you have a CSS file for styling

// const Sidebar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown
//   const navigate = useNavigate();
//   const location = useLocation();  // To get the current route

//   // Dynamically get the user role from localStorage or Auth0
//   const userRole = localStorage.getItem('userRole') || 'user'; // Default to 'user' if not set

//   // Ensure Sidebar is shown only on the Admin Dashboard
//   const isAdminPage = location.pathname.includes('/admin-dashboard');

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('user'); // Clear user data
//     localStorage.removeItem('userRole'); // Clear role data
//     navigate('/login'); // Redirect to login page
//   };

//   // Show Sidebar only for admin users on Admin Dashboard
//   if (userRole !== 'admin' || !isAdminPage) {
//     return null; // Return null if the user is not an admin or not on the admin page
//   }

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Admin Dashboard</h2>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <Link to="/admin-dashboard" onClick={toggleDropdown}>
//             Dashboard
//           </Link>
//           {isDropdownOpen && (
//             <ul className="dropdown-menu">
//               <li><Link to="/admin-dashboard/overview">Overview</Link></li>
//               <li><Link to="/admin-dashboard/add-details">Add Details</Link></li>
//             </ul>
//           )}
//         </li>
//         <li><Link to="/admin-dashboard/user-management">User  Management</Link></li>
//         <li><Link to="/admin-dashboard/profile">Profile</Link></li>
//         <li><Link to="/admin-dashboard/settings">Settings</Link></li>
//         {/* <li>
//           <button className="logout-button" onClick={handleLogout}>Logout</button>
//         </li> */}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;




// Sidebar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css'; // Optional: Add your CSS for styling

// const Sidebar = () => {
//     return (
//         <div className="sidebar">
//             <h2>Admin Sidebar</h2>
//             <ul>
//                 <li>
//                     <Link to="/dashboard">Dashboard</Link>
//                     <ul>
//                         <li><Link to="/dashboard/overview">Overview</Link></li>
//                         <li><Link to="/dashboard/add-details">Add Details</Link></li>
//                     </ul>
//                 </li>
//                 <li>
//                     <Link to="/user-management">User  Management</Link>
//                     <ul>
//                         <li><Link to="/user-management/profile">Profile</Link></li>
//                         <li><Link to="/user-management/settings">Settings</Link></li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     );
// };

// export default Sidebar;




// Sidebar.js
import React,{useState} from 'react';
import { Link , useNavigate, useLocation} from 'react-router-dom';
import './Sidebar.css'; // Optional: Add your CSS for styling

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle the dropdown
    const navigate = useNavigate();
    const location = useLocation();  // To get the current route
  
    // Dynamically get the user role from localStorage or Auth0
    const userRole = localStorage.getItem('userRole') || 'user'; // Default to 'user' if not set
  
    // Ensure Sidebar is shown only on the Admin Dashboard
    const isAdminPage = location.pathname.includes('/admin-dashboard');
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLogout = () => {
      localStorage.removeItem('user'); // Clear user data
      localStorage.removeItem('userRole'); // Clear role data
      navigate('/login'); // Redirect to login page
    };
  
  
    if (userRole !== 'admin') {
        return null; // Return null if the user is not an admin
    }

    return (
        <div className="sidebar">
            <h2>Admin Sidebar</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                    <ul>
                        <li><Link to="overview">Overview</Link></li>
                        <li><Link to="/add-details">Add Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/user-management">User  Management</Link>
                    
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                    
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;





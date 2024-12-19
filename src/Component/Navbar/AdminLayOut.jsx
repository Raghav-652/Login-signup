// import React, { useState, useEffect } from 'react';
// import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
// // Assuming you have a CSS file for styling

// const AdminLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Keep sidebar open by default
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle state
//   const navigate = useNavigate();
//   const location = useLocation();  // To get the current route

//   // Dynamically get the user role from localStorage or Auth0
//   const userRole = localStorage.getItem('userRole') || 'user'; // Default to 'user' if not set

//   // Ensure Sidebar is shown only on the Admin Dashboard
//   const isAdminPage = location.pathname.includes('/admin-dashboard');

//   // Automatically open the sidebar if on an admin page
//   useEffect(() => {
//     if (isAdminPage) {
//       setIsSidebarOpen(true);  // Open sidebar when on admin page
//     }
//   }, [location.pathname]);

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
//     <div className="admin-layout">
//       <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar">
//           <div className="sidebar-header">
//             {/* Sidebar Header */}
//             <button onClick={toggleSidebar}>Toggle Sidebar</button>
//           </div>
//           <ul className="sidebar-menu">
//             <li>
//               <Link to="/admin-dashboard" onClick={toggleDropdown}>Dashboard</Link>
//               {isDropdownOpen && (
//                 <ul className="dropdown-menu">
//                   <li><Link to="/Dashboard/overview">Overview</Link></li>
//                   <li><Link to="/Dashboard/add-details">Add Details</Link></li>
//                 </ul>
//               )}
//             </li>
//             <li><Link to="/user-management">User Management</Link></li>
//             <li><Link to="/profile">Profile</Link></li>
//             <li><Link to="/settings">Settings</Link></li>

//             {/* Logout Button
//             <li>
//               <button className="logout-button" onClick={handleLogout}>Logout</button>
//             </li> */}
//           </ul>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="content-area">
//         <Outlet /> {/* This will render the specific page based on the route */}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;

// AdminLayout.js
// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar';  // Import Sidebar
// import { Outlet } from 'react-router-dom';  // Renders the nested route content

// const AdminLayout = () => {
//   return (
//     <div className="admin-layout">
//       <Sidebar />  {/* Sidebar will be displayed here */}
//       <div className="admin-content">
//         <Outlet />  {/* This will render the child route components like Overview, Add Details, etc. */}
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;




import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="admin-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;




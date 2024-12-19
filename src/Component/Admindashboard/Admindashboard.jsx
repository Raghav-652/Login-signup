// import React from 'react';
// import Sidebar from '../Sidebar/Sidebar.jsx';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   // Fetch user information from localStorage
//   const user = JSON.parse(localStorage.getItem('user'));
//   const userRole = user ? user.role : null;

//   // If the user is not an admin, redirect to another page (e.g., home or login)
// //    if (userRole !== 'admin') {
// //    navigate('/dashboard'); // Or navigate to a page where normal users are allowed
// //      return null; // Prevent rendering of the dashboard
// //  }

//   return (
//     <div className='ad-side'>
//       <Sidebar/>
//       <div className="admin-dashboard">
//         <h1>Welcome to the Admin Dashboard</h1>
//         {/* Add more dashboard content here */}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;


// Admin.js
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Layout from '../Layout';
// import Overview from '../Sidebar/Overview';
// import AddDetails from '../Sidebar/AddDetails';
// import UserManagement from '../Sidebar/User Management';
// import Profile from '../Sidebar/Profile';
// import Settings from '../Sidebar/Settings';

// const AdminDashboard = () => {
//     return (
//         <Layout>
//             <Routes>
//                 <Route path="/admin-dashboard/overview" element={<Overview />} />
//                 <Route path="/admin-dashboard/add-details" element={<AddDetails />} />
//                 <Route path="/admin-dashboard/user-management" element={<user Management />} />
//                 <Route path="/admin-dashboard/profile" element={<Profile />} />
//                 <Route path="/admin-dashboard/settings" element={<Settings />} />
//                 {/* Default route for admin dashboard */}
//                 <Route path="/admin-dashboard" element={<h1>Admin Dashboard Home</h1>} />
//             </Routes>
//         </Layout>
//     );
// };

// export default AdminDashboard;








import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Overview from '../Sidebar/Overview';
import AddDetails from '../Sidebar/AddDetails';
import AddDetailsPage from '../Pages/AddDetailsPage';
import UserManagement from '../Sidebar/User Management';// Fixed the component name
// import Profile from '../Sidebar/Profile';
import Settings from '../Sidebar/Settings';
import './Admindashboard.css';
const AdminDashboard = () => {
    return (
        <Layout> {/* Wrap the routes with Layout */}
            <Routes>
                {/* Nested Routes */}
                <Route path="overview" element={<Overview />} />
                <Route path="add-details" element={<AddDetails />} />
                <Route path="user-management" element={<UserManagement />} /> {/* Fixed the component name */}
                <Route path="settings" element={<Settings />} />
                
                {/* Default route for admin dashboard */}
                {/* <Route path="/" element={<h1>Admin Dashboard Home</h1>} /> */}
            </Routes>
        </Layout>
    );
};

export default AdminDashboard;


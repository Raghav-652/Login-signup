
/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 import Navbar from './Component/Navbar/Navbar';
 import Login from './Component/Navbar/Login/Login';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Services from './Component/Pages/Services';
import About from './Component/Pages/About';
import Admindashboard from './Component/Admindashboard/Admindashboard';
import Signup from './Component/Navbar/Signup/Signup';
import Userdashboard from './Component/Userdashboard/Userdashboard';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Profile from './Component/Sidebar/Profile';
import Dashboard from './Component/Sidebar/Dashboard';
import Settings from './Component/Sidebar/Settings';
import Sidebar from './Component/Sidebar/Sidebar';
const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route  path="/admindashboard" element={<Admindashboard/>} />
        <Route 
          path="/userdashboard" 
          element={
            <ProtectedRoute>
              <Userdashboard />
            </ProtectedRoute>
          } 
      
        />     
        </Routes>
        </Router>   

              
    <Router>
      <Sidebar />
      <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            
          
  </Routes>
  </Router>
      
    
        );
      };
    


export default App;*/

// import React from 'react';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/Navbar/Navbar';
// import Login from './Component/Navbar/Login/Login';
// import Home from './Component/Pages/Home';
// import Contact from './Component/Pages/Contact';
// import Services from './Component/Pages/Services';
// import About from './Component/Pages/About';
// import Signup from './Component/Navbar/Signup/Signup';
// import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
// import Profile from './Component/Sidebar/Profile';
// import AdminDashboard from './Component/Admindashboard/Admindashboard';
// import Settings from './Component/Sidebar/Settings';
// import Sidebar from './Component/Sidebar/Sidebar';
// import AddDetails from './Component/Sidebar/AddDetails';
// import UserManagement from './Component/Sidebar/User Management';
// import Layout from './Component/Layout';
// const App = () => {
//   const handleFormSubmit = (newData) => {
//     console.log('Form submitted with data:', newData);
//     // Handle the data (e.g., send it to a server, save to state, etc.)
//   };

//   return (
//     <Router>
//       {/* Navbar is displayed on all pages */}
//       <Navbar />
      
//       {/* Main content */}
//       <div className="main-content">
//         <Sidebar /> {/* Sidebar is part of the layout */}
        
//         <div className="page-content">
//           <Routes>
//             {/* Public routes */}
// {/* The Layout component will wrap the routes that need the sidebar */}
// <Route element={<Layout />}>
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/user Management" element={<user Management />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/settings" element={<Settings />} />
// </Route>

//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/dashboard/add-details" element={<AddDetails onFormSubmit={handleFormSubmit} />} />
//             <Route path="/admin" element={<AdminDashboard />} />
//             {/* <Route path="admin-dashboard" element={<AdminLayout />}/> */}

//             {/* Protected routes */}
//             {/* <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/profile"
//               element={
//                 <ProtectedRoute>
//                   <Profile />
//                 </ProtectedRoute> */}
 
//  <Route
//    path="/settings"
//    element={
//      <ProtectedRoute>
//        <Settings />
//      </ProtectedRoute>
//    }
//  />

// </Routes>
// </div>
// </div>
// </Router>

//   );
// };

// export default App;



import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Component/Layout';
import Navbar from './Component/Navbar/Navbar';
import Userdashboard from './Component/Userdashboard/Userdashboard';
import Login from './Component/Navbar/Login/Login';
import Home from './Component/Pages/Home';
import Contact from './Component/Pages/Contact';
import Services from './Component/Pages/Services';
import About from './Component/Pages/About';
import Signup from './Component/Navbar/Signup/Signup';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';
import Profile from './Component/Sidebar/Profile';
import AdminDashboard from './Component/Admindashboard/Admindashboard';
import Settings from './Component/Sidebar/Settings';
import Sidebar from './Component/Sidebar/Sidebar';
import AddDetails from './Component/Sidebar/AddDetails';
import UserManagement from './Component/Sidebar/User Management';  
import AddDetailsPage from './Component/Pages/AddDetailsPage';
import Blogs from './Component/Sidebar/Blogs';
const App = () => {
  const [users, setUsers] = useState([]);



  const handleFormSubmit = (newData) => {
    setUsers((prevUsers) => [...prevUsers, newData]);

    console.log('Form submitted with data:', newData);
    // Handle the data (e.g., send it to a server, save to state, etc.)
  };

  return (
    <Router>
      {/* Navbar is displayed on all pages */}
      <Navbar />
      
      {/* Main content */}
      <div className="main-content">
        <Sidebar /> {/* Sidebar is part of the layout */}
        
        <div className="page-content">
          <Routes>
            {/* Wrap the routes that need the sidebar and layout */}
            <Route element={<Layout />}>
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/user-management" element={<UserManagement />} />  {/* Fixed typo */}
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/settings" element={<Settings />} />
              {/* <Route path="/dashboard/add-details" element={<AddDetails onFormSubmit={handleFormSubmit} />} /> */}
              <Route path="/add-details" element={<AddDetails  onFormSubmit={handleFormSubmit} />} />
              <Route path="/blogs" element={<Blogs />} />


            </Route>

            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* Protected routes */}
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

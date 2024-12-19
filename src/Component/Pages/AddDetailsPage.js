// import React from 'react';
// import AddDetails from '../Sidebar/AddDetails';
// import { Link } from 'react-router-dom';
// import UserManagement from '../Sidebar/User Management';
// const AddDetailsPage = () => {
//   const handleFormSubmit = (data) => {
//     // Handle form submission here (e.g., send data to an API or update the state)
//     console.log('Form data submitted:', data);
//   };

//   return (
//     <div className="add-details-page">
//       <h1>Add User Details</h1>
//       <Link to="/add-details"></Link>

//       <AddDetails onFormSubmit={handleFormSubmit} />  {/* Render the AddDetails form directly */}
//     </div>
//   );
// };

// export default AddDetailsPage;






import React, { useState } from 'react';
import AddDetails from '../Sidebar/AddDetails';
import { Link } from 'react-router-dom';
import UserManagement from '../Sidebar/User Management';

const AddDetailsPage = () => {
  const [users, setUsers] = useState([]);

  // Handle form submission
  const handleFormSubmit = (data) => {
    setUsers((prevUsers) => [...prevUsers, data]); // Update the users state with the new data
    console.log('Form data submitted:', data);
  };

  return (
    <div className="add-details-page">
      <h1>Add User Details</h1>
      <Link to="/add-details">Go to Add Details</Link>
      
      {/* AddDetails form */}
      <AddDetails onFormSubmit={handleFormSubmit} />
      
      {/* Pass users to UserManagement component */}
      <UserManagement users={users} />
    </div>
  );
};

export default AddDetailsPage;






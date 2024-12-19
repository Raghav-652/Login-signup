// import React, { useState , useEffect } from 'react';

// import './User Management.css';

// const UserManagement = () => {
  
//   const [users, setUsers] = useState([]);
  
//   const [currentUser , setCurrentUser ] = useState({
//     name: '',
//     email: '',
//     studentId: '',
//     course: '',
//     year: '',
//     address: '',
//     phone: '',
//     gender: '',
//     age: '',
    

//   });
  
//   useEffect(() => {
//     const storedData = localStorage.getItem('users');
//     if (storedData) {
//       setUsers(JSON.parse(storedData));
//     }
//   }, []);
//   const handleFormSubmit = (newUser) => {
//     setUsers([...users, newUser]);



//   };


//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

    
//        {/* <AddDetails onFormSubmit={handleFormSubmit} /> */}

    
//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>Address</th>
//               <th>Phone</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.studentId}</td>
//                 <td>{user.age}</td>
//                 <td>{user.course}</td>
//                 <td>{user.year}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.address}</td>
//                 <td>{user.phone}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;
// UserManagement.js
/*import React, { useState, useEffect } from 'react';
import AddDetails from './AddDetails'; // Make sure to import your AddDetails component
import './User Management.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
 
 
 const handleSubmit = (e) => {
   e.preventDefault();
   
   const newData = { name, email, studentId, course, year, address, phone, age, gender };
   
   onFormSubmit(newData);
   
   setName('');
   setEmail('');
   setStudentId('');
   setCourse('');
   setYear('');
   setAddress('');
   setPhone('');
   setAge(''); 
   setGender(''); 
 };



 const handleFormSubmit = (newUser ) => {
  const updatedUsers = [...users, newUser ];
  
  useEffect(() => {
    const storedData = localStorage.getItem('users');
    if ( storedData) {
      setUsers(JSON.parse(storedData));
    }
  }, []);

  

  return (
    <div className="user-management-container">
      <h2>User Management</h2>


      <div className="users-table-container">
        <h3>User List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Student ID</th>
              <th>Age</th>
              <th>Course</th>
              <th>Year</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.studentId}</td>
                <td>{user.age}</td>
                <td>{user.course}</td>
                <td>{user.year}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;*/

// import React, { useState, useEffect } from 'react';

//  import AddDetails from './AddDetails'; // Make sure to import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ?  JSON.parse(storedData) : [];
//   });

//   const handleFormSubmit = (newUser ) => {
//     const updatedUsers = [...users, newUser ];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
//   };
//   useEffect(() => {
//     // Whenever `users` state changes, update the localStorage
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]); // Dependency array makes sure this runs whenever `users` is updated

  
//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//             <th>S.No</th> {/* Add Serial Number column */}

//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>city</th>
//               <th>state</th>
//               <th>skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                                 <td>{index + 1}</td> {/* Display S.No as the index + 1 */}

//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.studentId}</td>
//                 <td>{user.age}</td>
//                 <td>{user.course}</td>
//                 <td>{user.year}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.city}</td>
//                 <td>{user.state}</td>
//                 <td>{user.skills}</td>

//                 <td>{user.address}</td>
//                 <td>{user.phone}</td>
        
//                 <td>{user.role}</td>
//                 <td>{user.image}</td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;



// import React, { useState, useEffect } from 'react';
// import AddDetails from './AddDetails'; // Make sure to import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ?  JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
//   };

//   useEffect(() => {
//     // Whenever `users` state changes, update the localStorage
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]); // Dependency array makes sure this runs whenever `users` is updated

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase(): '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email. toLowerCase():'').includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="search-container">
//       <div className="search-box">

//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//           <i className="fa fa-search search-icon"></i> {/* Search icon */}
//           </div>


//       </div>

//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.studentId}</td>
//                 <td>{user.age}</td>
//                 <td>{user.course}</td>
//                 <td>{user.year}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.city}</td>
//                 <td>{user.state}</td>
//                 <td>{(user.skills|| []).join(', ')}</td>
//                 <td>{user.address}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   {user.image && (
//                     <img
//                       src={URL.createObjectURL(user.image)}
//                       alt={user.name} // Make alt more descriptive
//                       style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                     />
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;



// import React, { useState, useEffect } from 'react';
// import AddDetails from './AddDetails'; // Make sure to import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
//   };

//   useEffect(() => {
//     // Whenever `users` state changes, update the localStorage
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]); // Dependency array makes sure this runs whenever `users` is updated

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="search-container">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search users..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <i className="fa fa-search search-icon"></i> {/* Search icon */}
//         </div>
//       </div>

//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{user.name}</td>
//                 <td>{user.email}</td>
//                 <td>{user.studentId}</td>
//                 <td>{user.age}</td>
//                 <td>{user.course}</td>
//                 <td>{user.year}</td>
//                 <td>{user.gender}</td>
//                 <td>{user.city}</td>
//                 <td>{user.state}</td>
//                 <td>{(user.skills || []).join(', ')}</td>
//                 <td>{user.address}</td>
//                 <td>{user.phone}</td>
//                 <td>{user.role}</td>
//                 <td>
//                   {user.image && (
//                     <img
//                       src={URL.createObjectURL(user.image)}
//                       alt={user.name} // Make alt more descriptive
//                       style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                     />
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;




// import React, { useState, useEffect } from 'react';
// import AddDetails from './AddDetails'; // Import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // State for the search term

//   // Handle form submission for adding a new user
//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
//   };

//   // Update localStorage whenever users are updated
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term when user types
//   };

//   // Filter users based on name, email, or studentId
//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="search-container">
//         <div className="search-box">
//           <input
//             type="text"
//             placeholder="Search User..."
//             value={searchTerm}
//             onChange={handleSearch} // Update search term on input change
//           />
//           <i className="fa fa-search search-icon"></i> {/* Search icon */}
//         </div>
//       </div>

//       {/* Add User Form */}
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Check if no users match the search */}
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="14">No users found matching your search criteria.</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.studentId}</td>
//                   <td>{user.age}</td>
//                   <td>{user.course}</td>
//                   <td>{user.year}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.city}</td>
//                   <td>{user.state}</td>
//                   <td>{(user.skills || []).join(', ')}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     {user.image && (
//                       <img
//                         src={URL.createObjectURL(user.image)} // Assuming image is a file object
//                         alt={user.name}
//                         style={{ width: '50px', height: '50px', objectFit: 'cover' }}
//                       />
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;



// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx'; // Import xlsx library
// import AddDetails from './AddDetails'; // Import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // State for the search term

//   // Handle form submission for adding a new user
//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
//   };

//   // Update localStorage whenever users are updated
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term when user types
//   };

//   // Filter users based on name, email, or studentId
//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   // Handle importing data from an Excel file
//   const handleImport = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const binaryStr = event.target.result;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0]; // Get the first sheet
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

//       // Update the users list with the imported data
//       setUsers(jsonData); // Set the users state to the imported data
//       localStorage.setItem('users', JSON.stringify(jsonData)); // Save to localStorage
//     };
//     reader.readAsBinaryString(file);
//   };

//   // Handle exporting data to an Excel file
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(users); // Convert users data to a worksheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Append the worksheet to the workbook
//     XLSX.writeFile(workbook, 'users_data.xlsx'); // Export the workbook as a file
//   };

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="top-bar-container">
//         <div className="search-container">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Search User..."
//               value={searchTerm}
//               onChange={handleSearch} // Update search term on input change
//             />
//             <i className="fa fa-search search-icon"></i> {/* Search icon */}
//           </div>
//         </div>

//         {/* Export and Import Buttons */}
//         <div className="export-import-container">
//           {/* Import Excel Button */}
//           <input
//             type="file"
//             accept=".xlsx,.xls"
//             onChange={handleImport}
//             className="import-button"
//           />
//           {/* Export Excel Button */}
//           <button onClick={handleExport} className="export-button">Export to Excel</button>
//         </div>
//       </div>

//       {/* Add User Form */}
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Check if no users match the search */}
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="14">No users found matching your search criteria.</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.studentId}</td>
//                   <td>{user.age}</td>
//                   <td>{user.course}</td>
//                   <td>{user.year}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.city}</td>
//                   <td>{user.state}</td>
//                   <td>{user.skills}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     {user.imageUrl && (
//                       <img
//                         // src={URL.createObjectURL(user.image)} // Assuming image is a file object
//                         src={user.imageUrl}

//                         alt={user.name}
//                         style={{ width: '70px', height: '50px', objectFit: 'cover' }}
//                       />
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;




















































// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx'; // Import xlsx library
// import AddDetails from './AddDetails'; // Import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // State for the search term

//   // Handle form submission for adding a new user
//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
//   };

//   // Update localStorage whenever users are updated
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term when user types
//   };

//   // Filter users based on name, email, or studentId
//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   // Handle importing data from an Excel file
//   const handleImport = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const binaryStr = event.target.result;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0]; // Get the first sheet
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

//       // Update the users list with the imported data
//       setUsers(jsonData); // Set the users state to the imported data
//       localStorage.setItem('users', JSON.stringify(jsonData)); // Save to localStorage
//     };
//     reader.readAsBinaryString(file);
//   };

//   // Handle exporting data to an Excel file
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(users); // Convert users data to a worksheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Append the worksheet to the workbook
//     XLSX.writeFile(workbook, 'users_data.xlsx'); // Export the workbook as a file
//   };

//   // Handle Delete user
//   const handleDelete = (studentId) => {
//     const updatedUsers = users.filter(user => user.studentId !== studentId);
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   // Handle Edit user
//   const handleEdit = (userToEdit) => {
//     // Example of directly editing the user. You can open a modal or form here
//     const updatedUsers = users.map(user =>
//       user.studentId === userToEdit.studentId ? { ...user, name: 'Updated Name' } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   // Handle Disable/Enable user
//   const handleDisable = (studentId) => {
//     const updatedUsers = users.map(user =>
//       user.studentId === studentId ? { ...user, disabled: !user.disabled } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="top-bar-container">
//         <div className="search-container">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Search User..."
//               value={searchTerm}
//               onChange={handleSearch} // Update search term on input change
//             />
//             <i className="fa fa-search search-icon"></i> {/* Search icon */}
//           </div>
//         </div>

//         {/* Export and Import Buttons */}
//         <div className="export-import-container">
//           {/* Import Excel Button */}
//           <input
//             type="file"
//             accept=".xlsx,.xls"
//             onChange={handleImport}
//             className="import-button"
//           />
//           {/* Export Excel Button */}
//           <button onClick={handleExport} className="export-button">Export to Excel</button>
//         </div>
//       </div>

//       {/* Add User Form */}
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//               <th>Actions</th> {/* New column for action buttons */}
//             </tr>
//           </thead>
//           <tbody>
//             {/* Check if no users match the search */}
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="16">No users found matching your search criteria.</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.studentId}</td>
//                   <td>{user.age}</td>
//                   <td>{user.course}</td>
//                   <td>{user.year}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.city}</td>
//                   <td>{user.state}</td>
//                   <td>{user.skills}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     {user.imageUrl && (
//                       <img
//                         src={user.imageUrl}
//                         alt={user.name}
//                         style={{ width: '70px', height: '50px', objectFit: 'cover' }}
//                       />
//                     )}
//                   </td>
//                   {/* Action Buttons */}
//                   <td>
//                     <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
//                     <button onClick={() => handleDelete(user.studentId)} className="delete-button">Delete</button>
//                     <button onClick={() => handleDisable(user.studentId)} className="disable-button">
//                       {user.disabled ? 'Enable' : 'Disable'}
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;




// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx'; // Import xlsx library
// import AddDetails from './AddDetails'; // Import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // State for the search term
//   const [editingUser, setEditingUser] = useState(null); // User being edited
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     studentId: '',
//     age: '',
//     course: '',
//     year: '',
//     gender: '',
//     city: '',
//     state: '',
//     skills: '',
//     address: '',
//     phone: '',
//     role: '',
//     imageUrl: '',
//   }); // State for form data

//   // Handle form submission for adding a new user
//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
//   };

//   // Update localStorage whenever users are updated
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term when user types
//   };

//   // Filter users based on name, email, or studentId
//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   // Handle importing data from an Excel file
//   const handleImport = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const binaryStr = event.target.result;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0]; // Get the first sheet
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

//       // Update the users list with the imported data
//       setUsers(jsonData); // Set the users state to the imported data
//       localStorage.setItem('users', JSON.stringify(jsonData)); // Save to localStorage
//     };
//     reader.readAsBinaryString(file);
//   };

//   // Handle exporting data to an Excel file
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(users); // Convert users data to a worksheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Append the worksheet to the workbook
//     XLSX.writeFile(workbook, 'users_data.xlsx'); // Export the workbook as a file
//   };

//   // Handle Delete user
//   const handleDelete = (studentId) => {
//     // const updatedUsers = users.filter(user => user.studentId !== studentId);
//     // setUsers(updatedUsers);
// // Find the user to delete using the studentId
// const userToDelete = users.find(user => user.studentId === studentId);
  
// if (userToDelete) {
//   // Filter out the user to delete, leaving the rest intact
//   const updatedUsers = users.filter(user => user.studentId !== studentId);

//   // Update state and localStorage with the new user list
//   setUsers(updatedUsers);



//     localStorage.setItem('users', JSON.stringify(updatedUsers));
// }
//   };


//   // Handle Edit user
//   const handleEdit = (userToEdit) => {
//     // Set the form data to the user's current values
//     setEditingUser(userToEdit);
//     setFormData({
//       name: userToEdit.name || '',
//       email: userToEdit.email || '',
//       studentId: userToEdit.studentId || '',
//       age: userToEdit.age || '',
//       course: userToEdit.course || '',
//       year: userToEdit.year || '',
//       gender: userToEdit.gender || '',
//       city: userToEdit.city || '',
//       state: userToEdit.state || '',
//       skills: userToEdit.skills || '',
//       address: userToEdit.address || '',
//       phone: userToEdit.phone || '',
//       role: userToEdit.role || '',
//       imageUrl: userToEdit.imageUrl || '',
//     });
//   };

//   // Handle saving the edited user
//   const handleSaveEdit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((user) =>
//       user.studentId === editingUser.studentId ? { ...formData } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to localStorage
//     setEditingUser(null); // Reset the editing user
//     setFormData({}); // Clear the form data
//   };

//   // Handle Disable/Enable user
//   const handleDisable = (studentId) => {
//     const updatedUsers = users.map(user =>
//       user.studentId === studentId ? { ...user, disabled: !user.disabled } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="top-bar-container">
//         <div className="search-container">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Search User..."
//               value={searchTerm}
//               onChange={handleSearch} // Update search term on input change
//             />
//             <i className="fa fa-search search-icon"></i> {/* Search icon */}
//           </div>
//         </div>

//         {/* Export and Import Buttons */}
//         <div className="export-import-container">
//           {/* Import Excel Button */}
//           <input
//             type="file"
//             accept=".xlsx,.xls"
//             onChange={handleImport}
//             className="import-button"
//           />
//           {/* Export Excel Button */}
//           <button onClick={handleExport} className="export-button">Export to Excel</button>
//         </div>
//       </div>

//       {/* Add User Form */}
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       {/* Edit User Form */}
//       {editingUser && (
//         <div className="edit-user-form">
//           <h3>Edit User</h3>
//           <form onSubmit={handleSaveEdit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="studentId"
//               value={formData.studentId}
//               onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
//               placeholder="Student ID"
//             />
//             <input
//               type="number"
//               name="age"
//               value={formData.age}
//               onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//               placeholder="Age"
//             />
//             <input
//               type="text"
//               name="course"
//               value={formData.course}
//               onChange={(e) => setFormData({ ...formData, course: e.target.value })}
//               placeholder="Course"
//             />
//             <input
//               type="text"
//               name="year"
//               value={formData.year}
//               onChange={(e) => setFormData({ ...formData, year: e.target.value })}
//               placeholder="Year"
//             />
//             <input
//               type="text"
//               name="gender"
//               value={formData.gender}
//               onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
//               placeholder="Gender"
//             />
//             <input
//               type="text"
//               name="city"
//               value={formData.city}
//               onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//               placeholder="City"
//             />
//             <input
//               type="text"
//               name="state"
//               value={formData.state}
//               onChange={(e) => setFormData({ ...formData, state: e.target.value })}
//               placeholder="State"
//             />
//             <input
//               type="text"
//               name="skills"
//               value={formData.skills}
//               onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
//               placeholder="Skills"
//             />
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={(e) => setFormData({ ...formData, address: e.target.value })}
//               placeholder="Address"
//             />
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               placeholder="Phone"
//             />
//             <input
//               type="text"
//               name="role"
//               value={formData.role}
//               onChange={(e) => setFormData({ ...formData, role: e.target.value })}
//               placeholder="Role"
//             />
//             <button type="submit" className="save-button">Save</button>
//           </form>
//         </div>
//       )}

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//               <th>Actions</th> {/* New column for action buttons */}
//             </tr>
//           </thead>
//           <tbody>
//             {/* Check if no users match the search */}
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="16">No users found matching your search criteria.</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.studentId}</td>
//                   <td>{user.age}</td>
//                   <td>{user.course}</td>
//                   <td>{user.year}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.city}</td>
//                   <td>{user.state}</td>
//                   <td>{user.skills}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     {user.imageUrl && (
//                       <img
//                         src={user.imageUrl}
//                         alt={user.name}
//                         style={{ width: '70px', height: '50px', objectFit: 'cover' }}
//                       />
//                     )}
//                   </td>
//                   {/* Action Buttons */}
//                   <td>
//                   <div className="action-buttons">

//                     <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
//                     <button onClick={() => handleDelete(user.studentId)} className="delete-button">Delete</button>
//                     <button onClick={() => handleDisable(user.studentId)} className="disable-button">
//                       {user.disabled ? 'Enable' : 'Disable'}
//                     </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;




// import React, { useState, useEffect } from 'react';
// import * as XLSX from 'xlsx'; // Import xlsx library
// import AddDetails from './AddDetails'; // Import your AddDetails component
// import './User Management.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState(() => {
//     const storedData = localStorage.getItem('users');
//     return storedData ? JSON.parse(storedData) : [];
//   });

//   const [searchTerm, setSearchTerm] = useState(''); // State for the search term
//   const [editingUser, setEditingUser] = useState(null); // User being edited
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     studentId: '',
//     age: '',
//     course: '',
//     year: '',
//     gender: '',
//     city: '',
//     state: '',
//     skills: '',
//     address: '',
//     phone: '',
//     role: '',
//     imageUrl: '',
//   }); // State for form data

//   // Handle form submission for adding a new user
//   const handleFormSubmit = (newUser) => {
//     const updatedUsers = [...users, newUser];
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
//   };

//   // Update localStorage whenever users are updated
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

//   // Handle search input changes
//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value); // Update search term when user types
//   };

//   // Filter users based on name, email, or studentId
//   const filteredUsers = users.filter((user) =>
//     (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
//     (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
//   );

//   // Handle importing data from an Excel file
//   const handleImport = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const binaryStr = event.target.result;
//       const workbook = XLSX.read(binaryStr, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0]; // Get the first sheet
//       const worksheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

//       // Ensure each user has a `disabled` field (if not present)
//       const updatedData = jsonData.map(user => ({ ...user, disabled: user.disabled || false }));

//       // Update the users list with the imported data
//       setUsers(updatedData); // Set the users state to the imported data
//       localStorage.setItem('users', JSON.stringify(updatedData)); // Save to localStorage
//     };
//     reader.readAsBinaryString(file);
//   };

//   // Handle exporting data to an Excel file
//   const handleExport = () => {
//     const worksheet = XLSX.utils.json_to_sheet(users); // Convert users data to a worksheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Append the worksheet to the workbook
//     XLSX.writeFile(workbook, 'users_data.xlsx'); // Export the workbook as a file
//   };

//   // Handle Delete user
//   const handleDelete = (studentId) => {
//     const updatedUsers = users.filter(user => user.studentId !== studentId);
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   // Handle Edit user
//   const handleEdit = (userToEdit) => {
//     // Set the form data to the user's current values
//     setEditingUser(userToEdit);
//     setFormData({
//       name: userToEdit.name || '',
//       email: userToEdit.email || '',
//       studentId: userToEdit.studentId || '',
//       age: userToEdit.age || '',
//       course: userToEdit.course || '',
//       year: userToEdit.year || '',
//       gender: userToEdit.gender || '',
//       city: userToEdit.city || '',
//       state: userToEdit.state || '',
//       skills: userToEdit.skills || '',
//       address: userToEdit.address || '',
//       phone: userToEdit.phone || '',
//       role: userToEdit.role || '',
//       imageUrl: userToEdit.imageUrl || '',
//     });
//   };

//   // Handle saving the edited user
//   const handleSaveEdit = (e) => {
//     e.preventDefault();
//     const updatedUsers = users.map((user) =>
//       user.studentId === editingUser.studentId ? { ...formData } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to localStorage
//     setEditingUser(null); // Reset the editing user
//     setFormData({}); // Clear the form data
//   };

//   // Handle Disable/Enable user
//   const handleDisable = (studentId) => {
//     const updatedUsers = users.map(user =>
//       user.studentId === studentId ? { ...user, disabled: !user.disabled } : user
//     );
//     setUsers(updatedUsers);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));
//   };

//   return (
//     <div className="user-management-container">
//       <h2>User Management</h2>

//       <div className="top-bar-container">
//         <div className="search-container">
//           <div className="search-box">
//             <input
//               type="text"
//               placeholder="Search User..."
//               value={searchTerm}
//               onChange={handleSearch} // Update search term on input change
//             />
//             <i className="fa fa-search search-icon"></i> {/* Search icon */}
//           </div>
//         </div>

//         {/* Export and Import Buttons */}
//         <div className="export-import-container">
//           {/* Import Excel Button */}
//           <input
//             type="file"
//             accept=".xlsx,.xls"
//             onChange={handleImport}
//             className="import-button"
//           />
//           {/* Export Excel Button */}
//           <button onClick={handleExport} className="export-button">Export to Excel</button>
//         </div>
//       </div>

//       {/* Add User Form */}
//       <AddDetails onFormSubmit={handleFormSubmit} />

//       {/* Edit User Form */}
//       {editingUser && (
//         <div className="edit-user-form">
//           <h3>Edit User</h3>
//           <form onSubmit={handleSaveEdit}>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               placeholder="Name"
//             />
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               name="studentId"
//               value={formData.studentId}
//               onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
//               placeholder="Student ID"
//             />
//             {/* More fields... */}
//             <button type="submit" className="save-button">Save</button>
//           </form>
//         </div>
//       )}

//       <div className="users-table-container">
//         <h3>User List</h3>
//         <table>
//           <thead>
//             <tr>
//               <th>S.No</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Student ID</th>
//               <th>Age</th>
//               <th>Course</th>
//               <th>Year</th>
//               <th>Gender</th>
//               <th>City</th>
//               <th>State</th>
//               <th>Skills</th>
//               <th>Address</th>
//               <th>Phone</th>
//               <th>Role</th>
//               <th>Image</th>
//               <th>Actions</th> {/* New column for action buttons */}
//             </tr>
//           </thead>
//           <tbody>
//             {/* Check if no users match the search */}
//             {filteredUsers.length === 0 ? (
//               <tr>
//                 <td colSpan="16">No users found matching your search criteria.</td>
//               </tr>
//             ) : (
//               filteredUsers.map((user, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.studentId}</td>
//                   <td>{user.age}</td>
//                   <td>{user.course}</td>
//                   <td>{user.year}</td>
//                   <td>{user.gender}</td>
//                   <td>{user.city}</td>
//                   <td>{user.state}</td>
//                   <td>{user.skills}</td>
//                   <td>{user.address}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.role}</td>
//                   <td>
//                     {user.imageUrl && (
//                       <img
//                         src={user.imageUrl}
//                         alt={user.name}
//                         style={{ width: '70px', height: '50px', objectFit: 'cover' }}
//                       />
//                     )}
//                   </td>
//                   {/* Action Buttons */}
//                   <td>
//                     <div className="action-buttons">
//                       <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
//                       <button onClick={() => handleDelete(user.studentId)} className="delete-button">Delete</button>
//                       <button onClick={() => handleDisable(user.studentId)} className="disable-button">
//                         {user.disabled ? 'Enable' : 'Disable'}
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;







import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'; // Import xlsx library
import AddDetails from './AddDetails'; // Import your AddDetails component
import AddDetailsPage from '../Pages/AddDetailsPage';
import './User Management.css';

const UserManagement = () => {
  const [users, setUsers] = useState(() => {
    const storedData = localStorage.getItem('users');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [searchTerm, setSearchTerm] = useState(''); // State for the search term
  const [editingUser, setEditingUser] = useState(null); // User being edited
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    age: '',
    course: '',
    year: '',
    gender: '',
    city: '',
    state: '',
    skills: '',
    address: '',
    phone: '',
    role: '',
    imageUrl: '',
  }); // State for form data

  // Handle form submission for adding a new user
  const handleFormSubmit = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to local storage
  };

  // Update localStorage whenever users are updated
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchTerm(e.target.value); // Update search term when user types
  };

  // Filter users based on name, email, or studentId
  const filteredUsers = users.filter((user) =>
    (user.name ? user.name.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
    (user.email ? user.email.toLowerCase() : '').includes(searchTerm.toLowerCase()) ||
    (user.studentId ? user.studentId.toLowerCase() : '').includes(searchTerm.toLowerCase())
  );

  // Handle importing data from an Excel file
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Get the first sheet
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert to JSON

      // Update the users list with the imported data
      setUsers(jsonData); // Set the users state to the imported data
      localStorage.setItem('users', JSON.stringify(jsonData)); // Save to localStorage
    };
    reader.readAsBinaryString(file);
  };

  // Handle exporting data to an Excel file
  const handleExport = () => {
    const worksheet = XLSX.utils.json_to_sheet(users); // Convert users data to a worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users'); // Append the worksheet to the workbook
    XLSX.writeFile(workbook, 'users_data.xlsx'); // Export the workbook as a file
  };

  // Handle Delete user (modified to use index)
  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, userIndex) => userIndex !== index);
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save updated users to localStorage
  };

  // Handle Edit user
  const handleEdit = (userToEdit) => {
    // Set the form data to the user's current values
    setEditingUser(userToEdit);
    setFormData({
      name: userToEdit.name || '',
      email: userToEdit.email || '',
      studentId: userToEdit.studentId || '',
      age: userToEdit.age || '',
      course: userToEdit.course || '',
      year: userToEdit.year || '',
      gender: userToEdit.gender || '',
      city: userToEdit.city || '',
      state: userToEdit.state || '',
      skills: userToEdit.skills || '',
      address: userToEdit.address || '',
      phone: userToEdit.phone || '',
      role: userToEdit.role || '',
      imageUrl: userToEdit.imageUrl || '',
    });
  };

  // Handle saving the edited user
  const handleSaveEdit = (e) => {
    e.preventDefault();
    const updatedUsers = users.map((user) =>
      user.studentId === editingUser.studentId ? { ...formData } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to localStorage
    setEditingUser(null); // Reset the editing user
    setFormData({}); // Clear the form data
  };

  // Handle Disable/Enable user
  const handleDisable = (studentId) => {
    const updatedUsers = users.map(user =>
      user.studentId === studentId ? { ...user, disabled: !user.disabled } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div className="user-management-container">
      <h2>User Management</h2>

      <div className="top-bar-container">
        <div className="search-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search User..."
              value={searchTerm}
              onChange={handleSearch} // Update search term on input change
            />
            <i className="fa fa-search search-icon"></i> {/* Search icon */}
          </div>
        </div>

        {/* Export and Import Buttons */}
        <div className="export-import-container">
          {/* Import Excel Button */}
          <input
            type="file"
            accept=".xlsx,.xls"
            onChange={handleImport}
            className="import-button"
          />
          {/* Export Excel Button */}
          <button onClick={handleExport} className="export-button">Export to Excel</button>
        </div>
      </div>

      {/* Add User Form */}
      <AddDetails onFormSubmit={handleFormSubmit} />

      {/* Edit User Form */}
      {editingUser && (
        <div className="edit-user-form">
          <h3>Edit User</h3>
          <form onSubmit={handleSaveEdit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Email"
            />
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
              placeholder="Student ID"
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              placeholder="Age"
            />
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              placeholder="Course"
            />
            <input
              type="text"
              name="year"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
              placeholder="Year"
            />
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
              placeholder="Gender"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              placeholder="City"
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              placeholder="State"
            />
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              placeholder="Skills"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Address"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="Phone"
            />
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              placeholder="Role"
            />
            <button type="submit" className="save-button">Save</button>
          </form>
        </div>
      )}

      <div className="users-table-container">
        <h3>User List</h3>
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Student ID</th>
              <th>Age</th>
              <th>Course</th>
              <th>Year</th>
              <th>Gender</th>
              <th>City</th>
              <th>State</th>
              <th>Skills</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Image</th>
              <th>Actions</th> {/* New column for action buttons */}
            </tr>
          </thead>
          <tbody>
            {/* Check if no users match the search */}
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="16">No users found matching your search criteria.</td>
              </tr>
            ) : (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.studentId}</td>
                  <td>{user.age}</td>
                  <td>{user.course}</td>
                  <td>{user.year}</td>
                  <td>{user.gender}</td>
                  <td>{user.city}</td>
                  <td>{user.state}</td>
                  <td>{user.skills}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>
                    {user.imageUrl && (
                      <img
                        src={user.imageUrl}
                        alt={user.name}
                        style={{ width: '70px', height: '50px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                  {/* Action Buttons */}
                  <td>
                    <div className="action-buttons">
                      <button onClick={() => handleEdit(user)} className="edit-button">Edit</button>
                      <button onClick={() => handleDelete(index)} className="delete-button">Delete</button>
                      <button onClick={() => handleDisable(user.studentId)} className="disable-button">
                        {user.disabled ? 'Enable' : 'Disable'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;


































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// function SignUp() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const navigate = useNavigate();

//   const handleSignUp = (e) => {
//     e.preventDefault();
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if the email already exists
//     const userExists = storedUsers.some(user => user.email === email);

//     if (userExists) {
//       alert('This email is already registered. Please log in.');
//     } else {
//       // Create a new user object
//       const newUser = { name, email, password };

//       // Add the new user to the stored users list
//       storedUsers.push(newUser);

//       // Save the updated list back to localStorage
//       localStorage.setItem('users', JSON.stringify(storedUsers));

    

//     alert('Sign-up successful!');
    
//     // Redirect user to the login page
//     navigate('/login');
//   };
// }

//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           <h1>CREATE ACCOUNT</h1>
//           <p>Please enter your details</p>
//           <form onSubmit={handleSignUp}>
//             <label>Name:</label>
//             <br />
//             <input
//               className="T1"
//               type="text"
//               name="name"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />

//             <label>Email Address:</label>
//             <br />
//             <input
//               className="T1"
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />
            
//             <label>Password:</label>
//             <br />
//             <input
//               className="T1"
//               type="password"
//               name="password"
//               placeholder="Enter Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />
            
//             <button className="btn1" type="submit">Sign Up</button>
//             <input className="T2" type='checkbox' id='btn1' required />Already have an account? <span className='s1'><a href="/Login"><b>Login Here!</b></a></span>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignUp;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // Role selection
//   const [error, setError] = useState(''); // To show error messages
//   const [success, setSuccess] = useState(''); // Success message

//   const navigate = useNavigate();

//   // Array to store registered users (you can replace this with a real database in production)
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     // Validation: Ensure all fields are filled out
//     if (!email || !password || !role) {
//       setError('Please fill out all fields!');
//       return;
//     }

//     // Check if the user already exists
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       setError('User already exists!');
//       return;
//     }

//     // Save the new user
//     const newUser = { email, password, role };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users)); // Store the users list in localStorage

//     setSuccess('Account created successfully!');
//     setError(''); // Clear any previous error messages

//     // Redirect to login page after successful sign-up
//     setTimeout(() => {
//       navigate('/login');
//     }, 2000);
//   };

//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           <h1>Create an Account</h1>
//           <p>Please enter your details</p>

//           {/* Display error or success message */}
//           {error && <div className="error-message">{error}</div>}
//           {success && <div className="success-message">{success}</div>}

//           <form onSubmit={handleSignUp}>
//             <label>Email Address:</label>
//             <br />
//             <input
//               className="T1"
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />

//             <label>Password:</label>
//             <br />
//             <input
//               className="T1"
//               type="password"
//               name="password"
//               placeholder="Enter Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />

//             <label>Select Role:</label>
//             <br />
//             <select
//               className="role-select"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="admin">Admin</option>
//               <option value="user">User</option>
//             </select>
//             <br /><br />

//             <button className="btn1" type="submit">Sign Up</button>
//           </form>

//           <br />
//           Already have an account? <span className="s1"><a href="/login"><b>Login!</b></a></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
























// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Signup.css';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('user'); // Default to "user" role
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const navigate = useNavigate();

//   // Fetch users from localStorage (or empty array if no users are found)
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     // Ensure all fields are filled out
//     if (!email || !password || !role) {
//       setError('Please fill out all fields!');
//       return;
//     }

//     // Check if the user already exists in localStorage
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       setError('User already exists with this email!');
//       return;
//     }

//     // Add new user to localStorage
//     const newUser = { email, password, role };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));

//     // Set success message and clear error
//     setSuccess('Account created successfully!');
//     setError('');

//     // Redirect to login page after 2 seconds
//     setTimeout(() => {
//       navigate('/login');
//     }, 2000);
//   };

//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           <h1>Sign Up</h1>
//           {/* <p>Please enter your details</p> */}

//           {/* Display error or success message */}
//           {error && <div className="error-message">{error}</div>}
//           {success && <div className="success-message">{success}</div>}

//           <form onSubmit={handleSignUp}>
//             <label>Email Address:</label>
//             <br />
//             <input
//               className="T1"
//               type="email"
//               name="email"
//               placeholder="Enter Your Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />

//             <label>Password:</label>
//             <br />
//             <input
//               className="T1"
//               type="password"
//               name="password"
//               placeholder="Enter Your Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br /><br />

//             {/* Default role is "user", so no need to select */}
//             <input type="hidden" value="user" />

//             <button className="btn1" type="submit">Sign Up</button>
//           </form>

//           <br />
//           Already have an account? <span className="s1"><a href="/login"><b>Login!</b></a></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import './Sig.css';
// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // Role selection
//   const [error, setError] = useState(''); // To show error messages
//   const [success, setSuccess] = useState(''); // Success message

//   const navigate = useNavigate();

//   // Array to store registered users (you can replace this with a real database in production)
//   const users = JSON.parse(localStorage.getItem('users')) || [];

//   const handleSignUp = (e) => {
//     e.preventDefault();

//     // Validation: Ensure all fields are filled out
//     if (!email || !password || !role) {
//       setError('Please fill out all fields!');
//       return;
//     }

//     // Check if the user already exists
//     const existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//       setError('User already exists!');
//       return;
//     }

//     // Save the new user
//     const newUser = { email, password, role };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users)); // Store the users list in localStorage

//     setSuccess('Account created successfully!');
//     setError(''); // Clear any previous error messages

//     // Redirect to login page after successful sign-up
//     setTimeout(() => {
//       navigate('/login');
//     }, 2000);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">Create an Account</div>
//         <div className="underline"></div>
//         <div className="inputs">
//           {/* Display error or success message */}
//           {error && <div className="error-message">{error}</div>}
//           {success && <div className="success-message">{success}</div>}

//           <form onSubmit={handleSignUp}>
//             <div className="input">
//               <img src="path_to_email_icon" alt="email icon" />
//               <input
//                 className="T1"
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="input">
//               <img src="path_to_password_icon" alt="password icon" />
//               <input
//                 className="T1"
//                 type="password"
//                 name="password"
//                 placeholder="Enter Your Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 autoComplete="off"
//                 required
//               />
//             </div>
//             <div className="input">
//               <label>Select Role:</label>
//               <select
//                 className="role-select"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="user">User</option>
//               </select>
//             </div>

//             <div className="submit-container">
//               <div className="submit" type="submit" onClick={handleSignUp}>
//                 Sign Up
//               </div>
//             </div>
//           </form>

//           <div className="forgot-password">
//             Already have an account? <span><a href="/login">Login!</a></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sig.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // Role selection
  const [error, setError] = useState(''); // To show error messages
  const [success, setSuccess] = useState(''); // Success message

  const navigate = useNavigate();

  // Array to store registered users (you can replace this with a real database in production)
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled out
    if (!email || !password || !role) {
      setError('Please fill out all fields!');
      return;
    }

    // Check if the user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      setError('User already exists!');
      return;
    }

    // Save the new user
    const newUser = { email, password, role };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); // Store the users list in localStorage

    setSuccess('Account created successfully!');
    setError(''); // Clear any previous error messages

    // Redirect to login page after successful sign-up
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Create an Account</div>
        <div className="underline"></div>
        <div className="inputs">
          {/* Display error or success message */}
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSignUp}>
            <div className="input">
              <span className="material-icons">email</span> {/* Email icon */}
              <input
                className="T1"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="input">
              <span className="material-icons">lock</span> {/* Lock icon for password */}
              <input
                className="T1"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
            <div className="input">
              <label>Select Role:</label>
              <select
                className="role-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="submit-container">
              <div className="submit" type="submit" onClick={handleSignUp}>
                Sign Up
              </div>
            </div>
          </form>

          <div className="forgot-password">
            Already have an account? <span><a href="/login">Login!</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;








/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[name , setName] = useState('');
  
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user that matches the email and password
    const user = storedUsers.find(user => user.email === email && user.password === password);

    if (user) {
      // If user is found, set login status and navigate to dashboard
      localStorage.setItem('isLoggedIn', true);
      navigate('/userdashboard');
    } else {
      alert('Invalid email or password');
    }
  };    
  return (
    <div className='big-container'>
      <div className='header2'>
        <div className='box1'>
          <h1>WELCOME BACK</h1>
          <p>Please enter your details</p>
          <form onSubmit={handleLogin}>
          <label> Name:</label>
            <br />
            <input
              className='T1'
              type='text'
              name='Name'
              placeholder='Enter Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete='off'
              required
            />
            <br></br>
            <label>Email Address:</label>
            <br />
            <input
              className='T1'
              type='email'
              name='email'
              placeholder='Enter Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='off'
              required
            />
            <br /><br />
            
            <label>Password:</label>
            <br />
            <input
              className='T1'
              type='password'
              name='password'
              placeholder='Enter Your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='off'
              required
            />
            <br /><br />
            
            <button className='btn1'>Login</button>
            <br />
            <input className="T2" type='checkbox' id='btn1' required />
            Didn't have an account? <span className='s1'><a href="/SignUp"><b>SignUp!</b></a></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// src/Component/Navbar/Login/Login.js*/


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');

//   const navigate = useNavigate();
//   const { loginWithRedirect, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

//   const handleLogin = async (e) => {
//     e.preventDefault();

    
//     await loginWithRedirect({
//       email,
//       password,
//     });

//     if (isAuthenticated && user) {
//       try {
        
//         const token = await getAccessTokenSilently();
        
        
//         const decodedToken = JSON.parse(atob(token.split('.')[1]));
//         const roles = decodedToken['roles'] || [];

        
//         if (roles.includes('admin')) {
//           navigate('/admin-dashboard');
//         } else if (roles.includes('user')) {
//           navigate('/user-dashboard');
//         } else {
//           alert('Unauthorized user');
//         }
//       } catch (error) {
//         console.error("Error fetching token", error);
//       }
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className='big-container'>
//       <div className='header2'>
//         <div className='box1'>
//           <h1>WELCOME BACK</h1>
//           <p>Please enter your details</p>
//           <form onSubmit={handleLogin}>
//             <label>Name:</label>
//             <br />
//             <input
//               className='T1'
//               type='text'
//               name='Name'
//               placeholder='Enter Your Name'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               autoComplete='off'
//               required
//             />
//             <br />
//             <label>Email Address:</label>
//             <br />
//             <input
//               className='T1'
//               type='email'
//               name='email'
//               placeholder='Enter Your Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               autoComplete='off'
//               required
//             />
//             <br /><br />
//             <label>Password:</label>
//             <br />
//             <input
//               className='T1'
//               type='password'
//               name='password'
//               placeholder='Enter Your Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               autoComplete='off'
//               required
//             />
//             <br /><br />
//             <button className='btn1'>Login</button>
//             <br />
//             <input className="T2" type='checkbox' id='btn1' required />
//             Didn't have an account? <span className='s1'><a href="/SignUp"><b>SignUp!</b></a></span>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState(''); // State for selected role

//   const navigate = useNavigate();
//   const { loginWithRedirect, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Perform login with Auth0
//     await loginWithRedirect({
//       email,
//       password,
//     });

//     if (isAuthenticated && user) {
//       try {
//         // If roles are encoded in the token, this can be adjusted accordingly
//         const token = await getAccessTokenSilently();
//         const decodedToken = JSON.parse(atob(token.split('.')[1]));
//         const roles = decodedToken['roles'] || [];

//         // Redirect based on the selected role
//         if (role === 'admin' || roles.includes('admin')) {
//           navigate('/admin-dashboard');
//         } else if (role === 'user' || roles.includes('user')) {
//           navigate('/user-dashboard');
//         } else {
//           alert('Unauthorized user');
//         }
//       } catch (error) {
//         console.error("Error fetching token", error);
//       }
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           {/* Role Dropdown in upper-right corner */}
//           <div className="role-dropdown">
//             <label>Select Role:</label>
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
//           </div>

//           <h1>WELCOME BACK</h1>
//           <p>Please enter your details</p>
//           <form onSubmit={handleLogin}>
//             <label>Name:</label>
//             <br />
//             <input
//               className="T1"
//               type="text"
//               name="Name"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br />
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
//             <button className="btn1">Login</button>
//             <br />
//             <input className="T2" type="checkbox" id="btn1" required />
//             Didn't have an account? <span className="s1"><a href="/SignUp"><b>SignUp!</b></a></span>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [role, setRole] = useState(''); // State for selected role

//   const navigate = useNavigate();
//   const { loginWithRedirect, user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Make sure the user selects a role before proceeding
//     if (!role) {
//       alert('Please select a role!');
//       return;
//     }

//     // Trigger login
//     await loginWithRedirect();

//     // If the user is authenticated, handle role-based redirection
//     if (isAuthenticated && user) {
//       try {
//         localStorage.setItem('userRole', role); // Store the selected role

//         // Get the access token
//         const token = await getAccessTokenSilently();
        
//         // Decode the token to check roles (Assuming roles are encoded in the JWT)
//         const decodedToken = JSON.parse(atob(token.split('.')[1]));
//         const roles = decodedToken['roles'] || [];

//         // Redirect based on the selected role or token roles
//         if (role === 'admin' || roles.includes('admin')) {
//           navigate('/admin-dashboard');
//         } else if (role === 'user' || roles.includes('user')) {
//           navigate('/user-dashboard');
//         } else {
//           alert('Unauthorized user');
//         }
//       } catch (error) {
//         console.error("Error fetching token", error);
//       }
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }


//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           {/* Role Dropdown in upper-right corner */}
//           <div className="role-dropdown">
//             <label>Select Role:</label>
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
//           </div>

//           <h1>WELCOME BACK</h1>
//           <p>Please enter your details</p>
//           <form onSubmit={handleLogin}>
//             <label>Name:</label>
//             <br />
//             <input
//               className="T1"
//               type="text"
//               name="Name"
//               placeholder="Enter Your Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               autoComplete="off"
//               required
//             />
//             <br />
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
//             <button className="btn1">Login</button>
//             <br />
//             <input className="T2" type="checkbox" id="btn1" required />
//             Didn't have an account? <span className="s1"><a href="/SignUp"><b>SignUp!</b></a></span>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // You can add your authentication logic here
//     // For now, we're just redirecting to the admin page
//     navigate('/admin');
//   };

//   return (
//     <div className="login-form">
//       <h1>Login Form</h1>
//       <form onSubmit={handleLogin}>
//         <label>Email:</label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />
//         <label>Name:</label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />
//         <label>Password:</label>
//         <br />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Your Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <br />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // State for selected role
//   const [error, setError] = useState(''); // To show login error messages

//   const navigate = useNavigate();

//   // Dummy credentials for the sake of example
//   const users = [
//     { email: 'admin@example.com', password: 'admin123', role: 'admin' },
//     { email: 'user@example.com', password: 'user123', role: 'user' }
//   ];

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Validate role input
//     if (!role) {
//       setError('Please select a role!');
//       return;
//     }

//     // Find the user based on email and password
//     const foundUser = users.find(user => user.email === email && user.password === password && user.role === role);

//     if (foundUser) {
//       // Store user role in localStorage
//       localStorage.setItem('userRole', foundUser.role);

//       // Redirect based on role
//       if (foundUser.role === 'admin') {
//         navigate('/admin-dashboard'); // Redirect to admin dashboard
//       } else if (foundUser.role === 'user') {
//         navigate('/user-dashboard'); // Redirect to user dashboard
//       }
//     } else {
//       setError('Invalid credentials or role!'); // Show error message if login fails
//     }
//   };

//   return (
//     <div className="big-container">
//       <div className="header2">
//         <div className="box1">
//           <h1>WELCOME BACK</h1>
//           <p>Please enter your details</p>
          
//           <form onSubmit={handleLogin}>
//             {error && <div className="error-message">{error}</div>} {/* Display error message */}
            
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

//             <button className="btn1" type="submit">Login</button>
//           </form>

//           <br />
//           <input className="T2" type="checkbox" id="btn1" required /> <br/>
//           Didn't have an account? <span className="s1"><a href="/SignUp"><b>SignUp!</b></a></span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!role || !email || !password) {
      setError('Please fill out all fields!');
      return;
    }

    // Hardcoded admin credentials
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';

    // Check if the user is admin and the email and password match the admin's credentials
    if (email === adminEmail && password === adminPassword && role === 'admin') {
      localStorage.setItem('userRole', 'admin'); // Store admin role in localStorage
      navigate('/admin-dashboard'); // Redirect to admin dashboard
      return;
    }

    // Fetch users from localStorage for regular user login
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user by email, password, and role
    const foundUser = users.find(user => user.email === email && user.password === password && user.role === role);

    if (foundUser) {
      localStorage.setItem('userRole', foundUser.role); // Store user role in localStorage

      // Redirect based on the role
      if (foundUser.role === 'admin') {
        navigate('/admin-dashboard'); // Redirect to admin dashboard
      } else if (foundUser.role === 'user') {
        navigate('/user-dashboard'); // Redirect to user dashboard
      }
    } else {
      setError('Invalid credentials or role!');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Welcome back</div>
        <div className="underline"></div>

        <div className="inputs">

          {/* <h1>WELCOME BACK</h1> */}
          {/* <p>Please enter your details</p> */}

          {/* Display error message */}
          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleLogin}>
          <div className="input">
          <span className="material-icons">email</span> {/* Email icon */}


            {/* <label>Email Address:</label> */}
            <br />
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
            <br />
            </div>
            
            
            <div className="input">
            <span className="material-icons">lock</span> {/* Lock icon for password */}



            {/* <label>Password:</label> */}
            <br />
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
            <br />
            
            </div>
            <br />
            <div className="input">

            <label>Select Role:</label>
            <br />
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
            <br />
            
            </div>
            <br />
            <div className="submit-container">

            <button className="submit" type="submit">Login</button>
            </div>
          </form>

          <br />
          <div className="forgot-password">

          Don't have an account? <span className="s1"><a href="/signup"><b>SignUp!</b></a></span>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Login;

/*import React, { useState } from 'react';
import './AddDetails.css';

const AddDetails = ({ onFormSubmit }) => {
  // Define state for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  // Define predefined courses and years
  const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data to send to parent component
    const newData = { name, email, studentId, course, year, address, phone };
    
    // Send the data to parent component
    onFormSubmit(newData);
    
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setStudentId('');
    setCourse('');
    setYear('');
    setAddress('');
    setPhone('');
  };

  return (
    <div className="add-details-container">
      <h2>Add New Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label>Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <br />

        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select a course</option>
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>
              {courseOption}
            </option>
          ))}
        </select>
        <br />

        <label>Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option value="">Select a year</option>
          {years.map((yearOption, index) => (
            <option key={index} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>
        <br />

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddDetails;*/

// import React, { useState } from 'react';
// import './AddDetails.css';

// const AddDetails = ({ onFormSubmit }) => {
  
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [course, setCourse] = useState('');
//   const [year, setYear] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [age, setAge] = useState('');   
//   const [gender, setGender] = useState(''); 

  
//   const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
//   const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
//   const genders = ['Male', 'Female', 'Other']; 

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const newData = { name, email, studentId, course, year, address, phone, age, gender };
    
    
//     onFormSubmit(newData);
    
    
//     setName('');
//     setEmail('');
//     setStudentId('');
//     setCourse('');
//     setYear('');
//     setAddress('');
//     setPhone('');
//     setAge(''); 
//     setGender(''); 
//   };

//   return (
//     <div className="add-details-container">
//       <h2>Add New Details</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <br />

//         <label>Student ID:</label>
//         <input
//           type="text"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
//           required
//         />
//         <br />
//         <label>Age:</label> 
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//           min="1"  
//         />
//         <br />


//         <label>Course:</label>
//         <select>
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           required
        
//           <option value="">Select a course</option>
//           {courses.map((courseOption, index) => (
//             <option key={index} value={courseOption}>
//               {courseOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Year:</label>
//         <select
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//           required
//         >
//           <option value="">Select a year</option>
//           {years.map((yearOption, index) => (
//             <option key={index} value={yearOption}>
//               {yearOption}
//             </option>
//           ))}
//         </select>
//         <br />
      
//         <label>Gender:</label> 
//         <div>
//           {genders.map((genderOption, index) => (
//             <label key={index} style={{ marginRight: '10px' }}>
//               <input
//                 type="radio"
//                 value={genderOption}
//                 checked={gender === genderOption}
//                 onChange={(e) => setGender(e.target.value)}
//                 required
// />
//               {genderOption}
//             </label>
//           ))}
//         </div>
//         <br />

//         <label>Address:</label>
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//         <br />

//         <label>Phone:</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         <br />

        

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddDetails;

// AddDetails.js
// import React, { useState } from 'react';
// import './AddDetails.css';

// const AddDetails = ({ onFormSubmit }) => {
 
//  const [name, setName] = useState('');
//  const [email, setEmail] = useState('');
//  const [studentId, setStudentId] = useState('');
//  const [course, setCourse] = useState('');
//  const [year, setYear] = useState('');
//  const [address, setAddress] = useState('');
//  const [phone, setPhone] = useState('');
//  const [age, setAge] = useState('');   
//  const [gender, setGender] = useState(''); 
// const[users , setUsers] = useState('');
//  const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
//  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
//  const genders = ['Male', 'Female', 'Other']; 




 
//  const handleSubmit = (e) => {
//    e.preventDefault();
   
//    const newData = { name, email, studentId, course, year, address, phone, age, gender };
   
//    onFormSubmit(newData);
   
//    setName('');
//    setEmail('');
//    setStudentId('');
//    setCourse('');
//    setYear('');
//    setAddress('');
//    setPhone('');
//    setAge(''); 
//    setGender(''); 
//  };



//  const handleFormSubmit = (newUser ) => {
//   const updatedUsers = [...users, newUser ];
//   setUsers(updatedUsers);
//   localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
// };
//  return (
//    <div className="add-details-container">
//      <h2>Add New Details</h2>
//      <form onSubmit={handleSubmit}>
//        <label>Name:</label>
//        <input
//          type="text"
//          value={name}
//          onChange={(e) => setName(e.target.value)}
//          required
//        />
//        <br />

//        <label>Email:</label>
//        <input
//          type="email"
//          value={email}
//          onChange={(e) => setEmail(e.target.value)}
//          required
//        />
//        <br />

//        <label>Student ID:</label>
//        <input
//          type="text"
//          value={studentId}
//          onChange={(e) => setStudentId(e.target.value)}
//          required
//        />
//        <br />
       
//        <label>Age:</label> 
//        <input
//          type="number"
//          value={age}
//          onChange={(e) => setAge(e.target.value)}
//          required
//          min="1"  
//        />
//        <br />

//        <label>Course:</label>
//        <select
//          value={course}
//          onChange={(e) => setCourse(e.target.value)}
//          required
//        >
//          <option value="">Select a course</option>
//          {courses.map((courseOption, index) => (
//            <option key={index} value={courseOption}>
//              {courseOption}
//            </option>
//          ))}
//        </select>
//        <br />

//        <label>Year:</label>
//        <select
//          value={year}
//          onChange={(e) => setYear(e.target.value)}
//          required
//        >
//          <option value="">Select a year</option>
//          {years.map((yearOption, index) => (
//            <option key={index} value={yearOption}>
//              {yearOption}
//            </option>
//          ))}
//        </select>
//        <br />
     
//        <label>Gender:</label> 
//        <div>
//          {genders.map((genderOption, index) => (
//            <label key={index} style={{ marginRight: '10px' }}>
//              <input
//                type="radio"
//                value={genderOption}
//                checked={gender === genderOption}
//                onChange={(e) => setGender(e.target.value)}
//                required
//              />
//              {genderOption}
//            </label>
//          ))}
//        </div>
//        <br />

//        <label>Address:</label>
//        <textarea
//          value={address}
//          onChange={(e) => setAddress(e.target.value)}
//          required
//        />
//        <br />

//        <label>Phone:</label>
//        <input
//          type="tel"
//          value={phone}
//          onChange={(e) => setPhone(e.target.value)}
//          required
//        />
//        <br />

//        <button type="submit" onClick={() => handleFormSubmit({ name, email, studentId, course, year, address, phone, age, gender })}>Submit</button>
//      </form>
//    </div>
//  );
// };

// export default AddDetails;

/*import React, { useState } from 'react';
import './AddDetails.css';

const AddDetails = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState('');
  const [error, setError] = useState('');

  const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const genders = ['Male', 'Female', 'Other'];

  const punjabCities = [
    'Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 
    'Firozpur', 'Muktsar', 'Moga', 'Rupnagar', 'Sangrur', 'Kapurthala', 'Shahid Bhagat Singh Nagar',
    'Faridkot', 'Barnala', 'Gurdaspur', 'Mansa', 'Tarn Taran'
  ];

  const indiaStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  const availableSkills = [
     'JavaScript', 'React', 'Node.js','HTML', 'CSS',
  ];

  // Validation logic
  const validateForm = () => {
    if (!name || !email || !studentId || !course || !year || !gender || !city || !state || !address || !phone) {
      setError("All fields are required.");
      return false;
    }
    const namePattern = /^[A-Za-z\s]+$/; // Only alphabetic characters and spaces allowed
    if (!namePattern.test(name)) {
      setError("Name should only contain alphabets and spaces, no numbers or special characters.");
      return false;
    }
    


    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email.");
      return false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Age validation (must be a positive number)
    if (isNaN(age) || age <= 0) {
      setError("Please enter a valid age.");
      return false;
    }

    // Skills validation (at least one skill must be selected)
    if (skills.length === 0) {
      setError("Please select at least one skill.");
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }


    const newData = { name, email, studentId, course, year, address, phone, age, gender, city, state, skills };
    
    onFormSubmit(newData);

    // Reset the form fields
    setName('');
    setEmail('');
    setStudentId('');
    setCourse('');
    setYear('');
    setAddress('');
    setPhone('');
    setAge('');
    setGender('');
    setCity('');
    setState('');
    setSkills([]);
  };

  const handleFormSubmit = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
  };

  // Handle skills checkbox changes
  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkills((prevSkills) => {
      if (prevSkills.includes(value)) {
        return prevSkills.filter(skill => skill !== value);
      } else {
        return [...prevSkills, value];
      }
    });
  };

  return (
    <div className="add-details-container">
      <h2>Add New Details</h2>
      <form onSubmit={handleSubmit}>
      {error && <div className="error-message">{error}</div>}


        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label>Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <br />
        
        <label>Age:</label> 
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1"
        />
        <br />

        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select a course</option>
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>
              {courseOption}
            </option>
          ))}
        </select>
        <br />

        <label>Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option value="">Select a year</option>
          {years.map((yearOption, index) => (
            <option key={index} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>
        <br />

        <label>Gender:</label> 
        <div>
          {genders.map((genderOption, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                value={genderOption}
                checked={gender === genderOption}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              {genderOption}
            </label>
          ))}
        </div>
        <br />

        <label>City:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          {punjabCities.map((cityOption, index) => (
            <option key={index} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        <br />

        <label>State:</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select a state</option>
          {indiaStates.map((stateOption, index) => (
            <option key={index} value={stateOption}>
              {stateOption}
            </option>
          ))}
        </select>
        <br />

        <label>Skills:</label>
        <div className='skills-container'>
          {availableSkills.map((skill, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                value={skill}
                checked={skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>
        <br />

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />

         <button type="submit" onClick={() => handleFormSubmit({ name, email, studentId, course, year, address, phone, age, gender, city, state, skills })}>Submit</button> 

        

      </form>
    </div>
  );
};

export default AddDetails;*/


/*import React, { useState } from 'react';
import './AddDetails.css';

const AddDetails = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState('');
  const [users, setUsers] = useState('');
  const [image, setImage] = useState(null); // State to store the uploaded image
  const [phoneError, setPhoneError] = useState(''); // Error state for phone number
  const [emailError, setEmailError] = useState(''); // Error state for email
  const [studentIdError, setStudentIdError] = useState('');
  const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const genders = ['Male', 'Female', 'Other'];

  const punjabCities = [
    'Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 
    'Firozpur', 'Muktsar', 'Moga', 'Rupnagar', 'Sangrur', 'Kapurthala', 'Shahid Bhagat Singh Nagar',
    'Faridkot', 'Barnala', 'Gurdaspur', 'Mansa', 'Tarn Taran'
  ];

  const indiaStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  const availableSkills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  // Validation logic
  const validateForm = () => {
    if (!name || !email || !studentId || !course || !year || !gender || !city || !state || !address || !phone) {
      setError("All fields are required.");
      return false;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      setError("Name should only contain alphabets and spaces, no numbers or special characters.");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email (e.g., example@gmail.com).");
      return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return false;
    }

    if (isNaN(age) || age <= 0) {
      setError("Please enter a valid age.");
      return false;
    }

    if (skills.length === 0) {
      setError("Please select at least one skill.");
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newData = { name, email, studentId, course, year, address, phone, age, gender, city, state, skills, image};

    onFormSubmit(newData);

    // Reset the form fields
    setName('');
    setEmail('');
    setStudentId('');
    setCourse('');
    setYear('');
    setAddress('');
    setPhone('');
    setAge('');
    setGender('');
    setCity('');
    setState('');
    setSkills([]);
    setImage(null); // Reset the image field

  };
  const handleFormSubmit = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save to local storage
  };
  // Handle skills checkbox changes
  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkills((prevSkills) => {
      if (prevSkills.includes(value)) {
        return prevSkills.filter(skill => skill !== value);
      } else {
        return [...prevSkills, value];
      }
    });
  };
// Handle image file input change
const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(file);
  }
};
// Handle image removal
const handleRemoveImage = () => {
  setImage(null); // Reset the image field
};

// Preview image (optional)
  const renderImagePreview = () => {
    if (image) {
      return (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{ width: '80px', height: '70px', objectFit: 'cover' }}
          />
          <button type="button" onClick={handleRemoveImage} style={{ marginTop: '18px' }}>
            Remove Image
          </button>
        </div>
      );
    }
    return null;
  };



  return (
    <div className="add-details-container">
      <h2>Add New Details</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />

        <label>Student ID:</label>
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          required
        />
        <br />

        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
          min="1"
        />
        <br />

        <label>Course:</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Select a course</option>
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>
              {courseOption}
            </option>
          ))}
        </select>
        <br />

        <label>Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        >
          <option value="">Select a year</option>
          {years.map((yearOption, index) => (
            <option key={index} value={yearOption}>
              {yearOption}
            </option>
          ))}
        </select>
        <br />

        <label>Gender:</label>
        <div>
          {genders.map((genderOption, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input
                type="radio"
                value={genderOption}
                checked={gender === genderOption}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              {genderOption}
            </label>
          ))}
        </div>
        <br />

        <label>City:</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        >
          <option value="">Select a city</option>
          {punjabCities.map((cityOption, index) => (
            <option key={index} value={cityOption}>
              {cityOption}
            </option>
          ))}
        </select>
        <br />

        <label>State:</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select a state</option>
          {indiaStates.map((stateOption, index) => (
            <option key={index} value={stateOption}>
              {stateOption}
            </option>
          ))}
        </select>
        <br />

        <label>Skills:</label>
        <div className='skills-container'>
          {availableSkills.map((skill, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                value={skill}
                checked={skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>
        <br />

        <label>Address:</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <br />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br />
<label>Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <br />

        
        {renderImagePreview()}
        <br />



        <button type="submit" onClick={() => handleFormSubmit({ name, email, studentId, course, year, address, phone, age, gender, city, state, skills })}>Submit</button> 

      
      </form>
    </div>
  );
};

export default AddDetails;*/


// import React, { useState } from 'react';
// import './AddDetails.css';

// const AddDetails = ({ onFormSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [course, setCourse] = useState('');
//   const [year, setYear] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [error, setError] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [studentIdError, setStudentIdError] = useState('');
//   const [skillsError, setSkillsError] = useState('');
//   const [image, setImage] = useState(null); // State to store the uploaded image

//   const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
//   const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
//   const genders = ['Male', 'Female', 'Other'];

//   const punjabCities = [
//     'Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 
//     'Firozpur', 'Muktsar', 'Moga', 'Rupnagar', 'Sangrur', 'Kapurthala', 'Shahid Bhagat Singh Nagar',
//     'Faridkot', 'Barnala', 'Gurdaspur', 'Mansa', 'Tarn Taran'
//   ];

//   const indiaStates = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//     'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 
//     'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
//     'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
//     'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
//     'Lakshadweep', 'Delhi', 'Puducherry'
//   ];

//   const availableSkills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

//   // Validation logic
//   const validateForm = () => {
//     let isValid = true;
//     setPhoneError('');
//     setEmailError('');
//     setStudentIdError('');
//     setSkillsError(''); // Reset skills error
    
//     if (!name || !email || !studentId || !course || !year || !gender || !city || !state || !address || !phone) {
//       setError("All fields are required.");
//       isValid = false;
//     }

//     const namePattern = /^[A-Za-z\s]+$/;
//     if (!namePattern.test(name)) {
//       setError("Name should only contain alphabets and spaces, no numbers or special characters.");
//       isValid = false;
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//       setEmailError("Please enter a valid email (e.g., example@gmail.com).");
//       isValid = false;
//     }

//     const phonePattern = /^[0-9]{10}$/;
//     if (!phonePattern.test(phone)) {
//       setPhoneError("Please enter a valid 10-digit phone number.");
//       isValid = false;
//     }

//     if (isNaN(age) || age <= 0) {
//       setError("Please enter a valid age.");
//       isValid = false;
//     }

//     if (isNaN(studentId) || studentId <= 0) {
//       setStudentIdError("Student ID should only be a number.");
//       isValid = false;
//     }

//     if (skills.length === 0) {
//       setSkillsError("Please select at least one skill.");
//       isValid = false;
//     }

//     setError('');
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const newData = { name, email, studentId, course, year, address, phone, age, gender, city, state, skills, image};

//     onFormSubmit(newData);

//     // Reset the form fields
//     setName('');
//     setEmail('');
//     setStudentId('');
//     setCourse('');
//     setYear('');
//     setAddress('');
//     setPhone('');
//     setAge('');
//     setGender('');
//     setCity('');
//     setState('');
//     setSkills([]);
//     setImage(null); // Reset the image field
//   };

//   const handleSkillChange = (e) => {
//     const value = e.target.value;
//     setSkills((prevSkills) => {
//       if (prevSkills.includes(value)) {
//         return prevSkills.filter(skill => skill !== value);
//       } else {
//         return [...prevSkills, value];
//       }
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImage(null); // Reset the image field
//   };

//   const renderImagePreview = () => {
//     if (image) {
//       return (
//         <div>
//           <img
//             src={URL.createObjectURL(image)}
//             alt="Preview"
//             style={{ width: '80px', height: '70px', objectFit: 'cover' }}
//           />
//           <button type="button" onClick={handleRemoveImage} style={{ marginTop: '18px' }}>
//             Remove Image
//           </button>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="add-details-container">
//       <h2>Add New Details</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <div className="error-message">{error}</div>}

//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {emailError && <div className="error-message">{emailError}</div>}
//         <br />

//         <label>Student ID:</label>
//         <input
//           type="text"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
//           required
//         />
//         {studentIdError && <div className="error-message">{studentIdError}</div>}
//         <br />

//         <label>Age:</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//           min="1"
//         />
//         <br />

//         <label>Course:</label>
//         <select
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           required
//         >
//           <option value="">Select a course</option>
//           {courses.map((courseOption, index) => (
//             <option key={index} value={courseOption}>
//               {courseOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Year:</label>
//         <select
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//           required
//         >
//           <option value="">Select a year</option>
//           {years.map((yearOption, index) => (
//             <option key={index} value={yearOption}>
//               {yearOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Gender:</label>
//         <div>
//           {genders.map((genderOption, index) => (
//             <label key={index} style={{ marginRight: '10px' }}>
//               <input
//                 type="radio"
//                 value={genderOption}
//                 checked={gender === genderOption}
//                 onChange={(e) => setGender(e.target.value)}
//                 required
//               />
//               {genderOption}
//             </label>
//           ))}
//         </div>
//         <br />

//         <label>City:</label>
//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           {punjabCities.map((cityOption, index) => (
//             <option key={index} value={cityOption}>
//               {cityOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>State:</label>
//         <select
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           required
//         >
//           <option value="">Select a state</option>
//           {indiaStates.map((stateOption, index) => (
//             <option key={index} value={stateOption}>
//               {stateOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Skills:</label>
//         <div className='skills-container'>
//           {availableSkills.map((skill, index) => (
//             <label key={index} style={{ marginRight: '10px' }}>
//               <input
//                 type="checkbox"
//                 value={skill}
//                 checked={skills.includes(skill)}
//                 onChange={handleSkillChange}
//               />
//               {skill}
//             </label>
//           ))}
//         </div>
//         {skillsError && <div className="error-message">{skillsError}</div>}
//         <br />

//         <label>Address:</label>
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//         <br />

//         <label>Phone:</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         {phoneError && <div className="error-message">{phoneError}</div>}
//         <br />

//         {/* Image upload section */}
//         <label>Upload Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//         />
//         <br />

//         {/* Show image preview if selected */}
//         {renderImagePreview()}
//         <br />

//         <button type="submit">Add user</button>
//       </form>
//     </div>
//   );
// };

// export default AddDetails;


// import React, { useState } from 'react';
// import './AddDetails.css';

// const AddDetails = ({ onFormSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [studentId, setStudentId] = useState('');
//   const [course, setCourse] = useState('');
//   const [year, setYear] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone, setPhone] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [role, setRole] = useState('');  // State to store selected role
//   const [error, setError] = useState('');
//   const [phoneError, setPhoneError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [studentIdError, setStudentIdError] = useState('');
//   const [skillsError, setSkillsError] = useState('');
//   const [image, setImage] = useState(null);

//   const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
//   const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
//   const genders = ['Male', 'Female', 'Other'];
//   const roles = ['Admin', 'User'];  // Roles available for selection

//   const punjabCities = [
//     'Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur',
//     'Firozpur', 'Muktsar', 'Moga', 'Rupnagar', 'Sangrur', 'Kapurthala', 'Shahid Bhagat Singh Nagar',
//     'Faridkot', 'Barnala', 'Gurdaspur', 'Mansa', 'Tarn Taran'
//   ];

//   const indiaStates = [
//     'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//     'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
//     'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
//     'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
//     'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
//     'Lakshadweep', 'Delhi', 'Puducherry'
//   ];

//   const availableSkills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

//   // Validation logic
//   const validateForm = () => {
//     let isValid = true;
//     setPhoneError('');
//     setEmailError('');
//     setStudentIdError('');
//     setSkillsError('');  // Reset skills error

//     if (!name || !email || !studentId || !course || !year || !gender || !city || !state || !address || !phone || !role) {
//       setError("All fields are required.");
//       isValid = false;
//     }

//     const namePattern = /^[A-Za-z\s]+$/;
//     if (!namePattern.test(name)) {
//       setError("Name should only contain alphabets and spaces, no numbers or special characters.");
//       isValid = false;
//     }

//     const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     if (!emailPattern.test(email)) {
//       setEmailError("Please enter a valid email (e.g., example@gmail.com).");
//       isValid = false;
//     }

//     const phonePattern = /^[0-9]{10}$/;
//     if (!phonePattern.test(phone)) {
//       setPhoneError("Please enter a valid 10-digit phone number.");
//       isValid = false;
//     }

//     if (isNaN(age) || age <= 0) {
//       setError("Please enter a valid age.");
//       isValid = false;
//     }

//     if (isNaN(studentId) || studentId <= 0) {
//       setStudentIdError("Student ID should only be a number.");
//       isValid = false;
//     }

//     if (skills.length === 0) {
//       setSkillsError("Please select at least one skill.");
//       isValid = false;
//     }

//     setError('');
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     const newData = { name, email, studentId, course, year, address, phone, age, gender, city, state, skills, role, image };

//     onFormSubmit(newData);

//     // Reset the form fields
//     setName('');
//     setEmail('');
//     setStudentId('');
//     setCourse('');
//     setYear('');
//     setAddress('');
//     setPhone('');
//     setAge('');
//     setGender('');
//     setCity('');
//     setState('');
//     setSkills([]);
//     setRole('');  
//     setImage(null);  
//   };

//   const handleSkillChange = (e) => {
//     const value = e.target.value;
//     setSkills((prevSkills) => {
//       if (prevSkills.includes(value)) {
//         return prevSkills.filter(skill => skill !== value);
//       } else {
//         return [...prevSkills, value];
//       }
//     });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//     }
//   };

//   const handleRemoveImage = () => {
//     setImage(null);  
//   };

//   const renderImagePreview = () => {
//     if (image) {
//       return (
//         <div>
//           <img
//             src={URL.createObjectURL(image)}
//             alt="Preview"
//             style={{ width: '80px', height: '70px', objectFit: 'cover' }}
//           />
//           <button type="button" onClick={handleRemoveImage} style={{ marginTop: '18px' }}>
//             Remove Image
//           </button>
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="add-details-container">
//       <h2>Add New Details</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <div className="error-message">{error}</div>}

//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <br />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         {emailError && <div className="error-message">{emailError}</div>}
//         <br />

//         <label>Student ID:</label>
//         <input
//           type="text"
//           value={studentId}
//           onChange={(e) => setStudentId(e.target.value)}
//           required
//         />
//         {studentIdError && <div className="error-message">{studentIdError}</div>}
//         <br />

//         <label>Age:</label>
//         <input
//           type="number"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//           required
//           min="1"
//         />
//         <br />

//         <label>Course:</label>
//         <select
//           value={course}
//           onChange={(e) => setCourse(e.target.value)}
//           required
//         >
//           <option value="">Select a course</option>
//           {courses.map((courseOption, index) => (
//             <option key={index} value={courseOption}>
//               {courseOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Year:</label>
//         <select
//           value={year}
//           onChange={(e) => setYear(e.target.value)}
//           required
//         >
//           <option value="">Select a year</option>
//           {years.map((yearOption, index) => (
//             <option key={index} value={yearOption}>
//               {yearOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>Gender:</label>
//         <div>
//           {genders.map((genderOption, index) => (
//             <label key={index} style={{ marginRight: '10px' }}>
//               <input
//                 type="radio"
//                 value={genderOption}
//                 checked={gender === genderOption}
//                 onChange={(e) => setGender(e.target.value)}
//                 required
//               />
//               {genderOption}
//             </label>
//           ))}
//         </div>
//         <br />

//         <label>City:</label>
//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           required
//         >
//           <option value="">Select a city</option>
//           {punjabCities.map((cityOption, index) => (
//             <option key={index} value={cityOption}>
//               {cityOption}
//             </option>
//           ))}
//         </select>
//         <br />

//         <label>State:</label>
//         <select
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           required
//         >
//           <option value="">Select a state</option>
//           {indiaStates.map((stateOption, index) => (
//             <option key={index} value={stateOption}>
//               {stateOption}
//             </option>
//           ))}
//         </select>
//         <br />

        
        

//         <label>Skills:</label>
//         <div className='skills-container'>
//           {availableSkills.map((skill, index) => (
//             <label key={index} style={{ marginRight: '10px' }}>
//               <input
//                 type="checkbox"
//                 value={skill}
//                 checked={skills.includes(skill)}
//                 onChange={handleSkillChange}
//               />
//               {skill}
//             </label>
//           ))}
//         </div>
//         {skillsError && <div className="error-message">{skillsError}</div>}
//         <br />

//         <label>Address:</label>
//         <textarea
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//           required
//         />
//         <br />

//         <label>Phone:</label>
//         <input
//           type="tel"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           required
//         />
//         {phoneError && <div className="error-message">{phoneError}</div>}
//         <br />
      
//         <label>Role:</label>
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           required
//         >
//           <option value="">Select a role</option>
//           {roles.map((roleOption, index) => (
//             <option key={index} value={roleOption}>
//               {roleOption}
//             </option>
//           ))}
//         </select>

//         {/* Image upload section */}
//         <label>Upload Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//         />
//         <br />

//         {/* Show image preview if selected */}
//         {renderImagePreview()}
//         <br />

//         <button type="submit">Add user</button>
//               {/* <AddDetails onFormSubmit={handleFormSubmit} />  */}

//       </form>
//     </div>
//   );
// };

// export default AddDetails;



import React, { useState } from 'react';
import './AddDetails.css';

const AddDetails = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [skills, setSkills] = useState([]);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [studentIdError, setStudentIdError] = useState('');
  const [skillsError, setSkillsError] = useState('');
  const [image, setImage] = useState(null);

  const courses = ['Computer Science', 'Business Administration', 'Electrical Engineering', 'Mechanical Engineering'];
  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];
  const genders = ['Male', 'Female', 'Other'];
  const roles = ['Admin', 'User'];

  const punjabCities = [
    'Amritsar', 'Ludhiana', 'Chandigarh', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur',
    'Firozpur', 'Muktsar', 'Moga', 'Rupnagar', 'Sangrur', 'Kapurthala', 'Shahid Bhagat Singh Nagar',
    'Faridkot', 'Barnala', 'Gurdaspur', 'Mansa', 'Tarn Taran'
  ];

  const indiaStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep', 'Delhi', 'Puducherry'
  ];

  const availableSkills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'];

  // Validation logic
  const validateForm = () => {
    let isValid = true;
    setPhoneError('');
    setEmailError('');
    setStudentIdError('');
    setSkillsError('');

    if (!name || !email || !studentId || !course || !year || !gender || !city || !state || !address || !phone || !role) {
      setError("All fields are required.");
      isValid = false;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
      setError("Name should only contain alphabets and spaces, no numbers or special characters.");
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email (e.g., example@gmail.com).");
      isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number.");
      isValid = false;
    }

    if (isNaN(age) || age <= 0) {
      setError("Please enter a valid age.");
      isValid = false;
    }

    if (isNaN(studentId) || studentId <= 0) {
      setStudentIdError("Student ID should only be a number.");
      isValid = false;
    }

    if (skills.length === 0) {
      setSkillsError("Please select at least one skill.");
      isValid = false;
    }

    setError('');
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const imageUrl = image ? URL.createObjectURL(image) : null;

    const newData = { name, email, studentId, course, year, address, phone, age, gender, city, state, skills, role, imageUrl };

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
    setCity('');
    setState('');
    setSkills([]);
    setRole('');
    setImage(null);
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSkills((prevSkills) => {
      if (prevSkills.includes(value)) {
        return prevSkills.filter(skill => skill !== value);
      } else {
        return [...prevSkills, value];
      }
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  const renderImagePreview = () => {
    if (image) {
      return (
        <div>
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{ width: '80px', height: '70px', objectFit: 'cover' }}
          />
          <button type="button" onClick={handleRemoveImage} style={{ marginTop: '18px' }}>
            Remove Image
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="add-details-container">
      <h2>Add New Details</h2>
      <form onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <br />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        {emailError && <div className="error-message">{emailError}</div>}
        <br />

        <label>Student ID:</label>
        <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
        {studentIdError && <div className="error-message">{studentIdError}</div>}
        <br />

        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required min="1" />
        <br />

        <label>Course:</label>
        <select value={course} onChange={(e) => setCourse(e.target.value)} required>
          <option value="">Select a course</option>
          {courses.map((courseOption, index) => (
            <option key={index} value={courseOption}>{courseOption}</option>
          ))}
        </select>
        <br />

        <label>Year:</label>
        <select value={year} onChange={(e) => setYear(e.target.value)} required>
          <option value="">Select a year</option>
          {years.map((yearOption, index) => (
            <option key={index} value={yearOption}>{yearOption}</option>
          ))}
        </select>
        <br />

        <label>Gender:</label>
        <div>
          {genders.map((genderOption, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input type="radio" value={genderOption} checked={gender === genderOption} onChange={(e) => setGender(e.target.value)} required />
              {genderOption}
            </label>
          ))}
        </div>
        <br />

        <label>City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">Select a city</option>
          {punjabCities.map((cityOption, index) => (
            <option key={index} value={cityOption}>{cityOption}</option>
          ))}
        </select>
        <br />

        <label>State:</label>
        <select value={state} onChange={(e) => setState(e.target.value)} required>
          <option value="">Select a state</option>
          {indiaStates.map((stateOption, index) => (
            <option key={index} value={stateOption}>{stateOption}</option>
          ))}
        </select>
        <br />

        <label>Skills:</label>
        <div className='skills-container'>
          {availableSkills.map((skill, index) => (
            <label key={index} style={{ marginRight: '10px' }}>
              <input
                type="checkbox"
                value={skill}
                checked={skills.includes(skill)}
                onChange={handleSkillChange}
              />
              {skill}
            </label>
          ))}
        </div>
        {skillsError && <div className="error-message">{skillsError}</div>}
        <br />

        <label>Address:</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        <br />

        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        {phoneError && <div className="error-message">{phoneError}</div>}
        <br />

        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select a role</option>
          {roles.map((roleOption, index) => (
            <option key={index} value={roleOption}>{roleOption}</option>
          ))}
        </select>

        {/* Image upload section */}
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <br />
        {renderImagePreview()}
        <br />

        <button type="submit">Add user</button>
      </form>
      
    </div>
  );
};

export default AddDetails;






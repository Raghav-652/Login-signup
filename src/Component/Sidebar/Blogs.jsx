// import React, { useState, useEffect } from 'react';
// import './Blogs.css';

// const Blogs = () => {
//   // State to store blogs
//   const [blogs, setBlogs] = useState(() => {
//     const storedBlogs = localStorage.getItem('blogs');
//     return storedBlogs ? JSON.parse(storedBlogs) : [];
//   });

//   const [formData, setFormData] = useState({
//     title: '',
//     content: '',
//     author: '',
//     date: new Date().toLocaleDateString(),
//   });

//   const [editingBlog, setEditingBlog] = useState(null);

//   // Handle form changes
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle adding a new blog or editing an existing one
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (editingBlog) {
//       // Editing an existing blog
//       const updatedBlogs = blogs.map((blog) =>
//         blog.id === editingBlog.id ? { ...formData, id: blog.id } : blog
//       );
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     } else {
//       // Adding a new blog
//       const newBlog = { ...formData, id: Date.now() };
//       const updatedBlogs = [...blogs, newBlog];
//       setBlogs(updatedBlogs);
//       localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     }

//     setFormData({ title: '', content: '', author: '', date: new Date().toLocaleDateString() });
//     setEditingBlog(null);
//   };

//   // Handle editing a blog
//   const handleEdit = (blog) => {
//     setEditingBlog(blog);
//     setFormData({
//       title: blog.title,
//       content: blog.content,
//       author: blog.author,
//       date: blog.date,
//     });
//   };

//   // Handle deleting a blog
//   const handleDelete = (id) => {
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);
//     localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//   };

//   return (
//     <div className="blogs-container">
//       <h2>Blog Management</h2>

//       {/* Blog Creation / Editing Form */}
//       <div className="blog-form">
//         <h3>{editingBlog ? 'Edit Blog' : 'Create Blog'}</h3>
//         <form onSubmit={handleFormSubmit}>
//           <input
//             type="text"
//             name="title"
//             value={formData.title}
//             onChange={handleFormChange}
//             placeholder="Blog Title"
//             required
//           />
//           <textarea
//             name="content"
//             value={formData.content}
//             onChange={handleFormChange}
//             placeholder="Blog Content"
//             required
//           />
//           <input
//             type="text"
//             name="author"
//             value={formData.author}
//             onChange={handleFormChange}
//             placeholder="Author"
//             required
//           />
//           <button type="submit">{editingBlog ? 'Save Changes' : 'Create Blog'}</button>
//         </form>
//       </div>

//       {/* Blog List */}
//       <div className="blogs-list">
//         <h3>Blogs</h3>
//         {blogs.length === 0 ? (
//           <p>No blogs available.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>Date</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map((blog) => (
//                 <tr key={blog.id}>
//                   <td>{blog.title}</td>
//                   <td>{blog.author}</td>
//                   <td>{blog.date}</td>
//                   <td>
//                     <button onClick={() => handleEdit(blog)} className="edit-button">Edit</button>
//                     <button onClick={() => handleDelete(blog.id)} className="delete-button">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;






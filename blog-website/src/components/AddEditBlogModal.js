// import React, { useState, useContext, useEffect } from 'react';
// import { BlogContext } from '../context/BlogContext';

// const AddEditBlogModal = () => {
//   const { addBlog, updateBlog, editingBlog, setEditingBlog } = useContext(BlogContext);
//   const [formData, setFormData] = useState({ imageUrl: '', title: '', description: '' });

//   useEffect(() => {
//     if (editingBlog) setFormData(editingBlog);
//   }, [editingBlog]);

//   const handleSubmit = () => {
//     if (editingBlog) {
//       updateBlog({ ...editingBlog, ...formData });
//     } else {
//       addBlog({ id: Date.now(), ...formData });
//     }
//     closeModal();
//   };

//   const closeModal = () => {
//     setFormData({ imageUrl: '', title: '', description: '' });
//     setEditingBlog(null);
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <label>Image URL</label>
//         <input
//           type="text"
//           value={formData.imageUrl}
//           onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
//         />
//         <label>Title</label>
//         <input
//           type="text"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//         />
//         <label>Blog Description</label>
//         <input
//           type="text"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//         />
//         <button onClick={handleSubmit}>POST BLOG</button>
//         <button onClick={closeModal}>CLOSE</button>
//       </div>
//     </div>
//   );
// };

// export default AddEditBlogModal;


//2nd 

import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";

const AddEditBlogForm = ({ toggleForm }) => {
  const { addBlog, updateBlog, editingBlog } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingBlog) setFormData(editingBlog);
  }, [editingBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.imageUrl || !formData.title || !formData.description) {
      alert("All fields are required!");
      return;
    }

    if (editingBlog) {
      updateBlog({ ...formData, id: editingBlog.id });
    } else {
      addBlog({ ...formData, id: Date.now() });
    }
    toggleForm();
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>{editingBlog ? "Edit Blog" : "Add New Blog"}</h2>
        <button className="close-btn" onClick={toggleForm}>X</button>
      </div>
      <div className="form-fields">
        <div>
          <label>Image URL:</label>
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Blog Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleChange} />
        </div>
      </div>
      <button className="submit-btn" onClick={handleSubmit}>
        {editingBlog ? "Update Blog" : "Post Blog"}
      </button>
    </div>
  );
};

export default AddEditBlogForm;

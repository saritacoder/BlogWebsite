import React, { useState, useEffect } from "react";

const BlogForm = ({ onClose, onSubmit, editingBlog }) => {
  const [formData, setFormData] = useState({
    imageUrl: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (editingBlog) {
      setFormData(editingBlog);
    }
  }, [editingBlog]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.imageUrl || !formData.title || !formData.description) {
      alert("All fields are required!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <h2>{editingBlog ? "Edit Blog" : "Add New Blog"}</h2>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>
        {editingBlog ? "Update Blog" : "Post Blog"}
      </button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BlogForm;

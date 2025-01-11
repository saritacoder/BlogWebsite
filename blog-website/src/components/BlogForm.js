// import React, { useState, useEffect } from "react";
// import "./BlogForm.css"

// const BlogForm = ({ onClose, onSubmit, editingBlog }) => {
//   const [formData, setFormData] = useState({
//     imageUrl: "",
//     title: "",
//     description: "",
//   });

//   useEffect(() => {
//     if (editingBlog) {
//       setFormData(editingBlog);
//     }
//   }, [editingBlog]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = () => {
//     if (!formData.imageUrl || !formData.title || !formData.description) {
//       alert("All fields are required!");
//       return;
//     }
//     onSubmit(formData);
//   };

//   return (



//     <div className="modal">
//   <form>
//     <div class="fieldWrapper">
//     <div className="field">
//       <label htmlFor="imageUrl">Image URL:</label>
//       <input
//         type="text"
//         id="imageUrl"
//         name="imageUrl"
//         value={formData.imageUrl}
//         onChange={handleChange}
//       />
//     </div>
//     <div className="field">
//       <label htmlFor="title">Title:</label>
//       <input
//         type="text"
//         id="title"
//         name="title"
//         value={formData.title}
//         onChange={handleChange}
//       />
//     </div>
//     <div className="field">
//       <label htmlFor="description">Description:</label>
//       <input
//         type="text"
//         id="description"
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//       />
//     </div></div>
//     <div className="modal-buttons">
//       <button type="button" onClick={handleSubmit}>
//         {editingBlog ? "Update Blog" : "Post Blog"}
//       </button>
//       <button type="button" onClick={onClose}>
//         Close
//       </button>
//     </div>
//   </form>
// </div>

//   );
// };

// export default BlogForm;






import React, { useState, useEffect } from "react";
import "./BlogForm.css"

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
  <form>
    <div class="fieldWrapper">
    <div className="field">
      <label htmlFor="imageUrl">Image URL:</label>
      <input
        type="text"
        id="imageUrl"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleChange}
      />
    </div>
    <div className="field">
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
    </div>
    <div className="field">
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
    </div></div>
    <div className="modal-buttons">
      <button type="button" onClick={handleSubmit}>
        {editingBlog ? "Update Blog" : "Post Blog"}
      </button>
      <button type="button" onClick={onClose}>
        Close
      </button>
    </div>
  </form>
</div>

  );
};

export default BlogForm;

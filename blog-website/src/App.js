// import React from 'react';
// import { BlogProvider } from './context/BlogContext';
// import BlogList from './components/BlogList';
// import AddEditBlogModal from './components/AddEditBlogModal';

// const App = () => {
//   return (
//     <BlogProvider>
//       <div className="app">
//         <h1>BLOG WEBSITE</h1>
//         <button className="add-blog-btn">Add New Blog</button>
//         <BlogList />
//         <AddEditBlogModal />
//       </div>
//     </BlogProvider>
//   );
// };

// export default App;



// 2nd 
import React, { useState } from "react";
import BlogList from "./components/BlogList";
import BlogForm from "./components/BlogForm";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const toggleForm = () => {
    setIsFormOpen((prev) => !prev);
    setEditingBlog(null);
  };

  const handlePostBlog = (blogData) => {
    if (editingBlog) {
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog.id === editingBlog.id ? { ...blog, ...blogData } : blog
        )
      );
    } else {
      const newBlog = { ...blogData, id: Date.now() };
      setBlogs([...blogs, newBlog]);
    }
    toggleForm();
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setIsFormOpen(true);
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
  };

  return (
    <div className="app">
      <h1>BLOG WEBSITE</h1>
      <button onClick={toggleForm}>Add New Blog</button>
      <BlogList
        blogs={blogs}
        onEditBlog={handleEditBlog}
        onDeleteBlog={handleDeleteBlog}
      />
      {isFormOpen && (
        <BlogForm
          onClose={toggleForm}
          onSubmit={handlePostBlog}
          editingBlog={editingBlog}
        />
      )}
    </div>
  );
};

export default App;

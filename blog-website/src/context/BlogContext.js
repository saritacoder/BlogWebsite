

// import React, { createContext, useState } from "react";

// export const BlogContext = createContext();

// export const BlogProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [editingBlog, setEditingBlog] = useState(null);

//   const addBlog = (blog) => setBlogs([...blogs, blog]);

//   const updateBlog = (updatedBlog) => {
//     setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)));
//     setEditingBlog(null);
//   };

//   const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

//   return (
//     <BlogContext.Provider
//       value={{
//         blogs,
//         addBlog,
//         updateBlog,
//         deleteBlog,
//         editingBlog,
//         setEditingBlog,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// };






import React, { createContext, useState } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);

  const addBlog = (blog) => setBlogs([...blogs, blog]);

  const updateBlog = (updatedBlog) => {
    setBlogs(blogs.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)));
    setEditingBlog(null);
  };

  const deleteBlog = (id) => setBlogs(blogs.filter((blog) => blog.id !== id));

  return (
    <BlogContext.Provider
      value={{
        blogs,
        addBlog,
        updateBlog,
        deleteBlog,
        editingBlog,
        setEditingBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

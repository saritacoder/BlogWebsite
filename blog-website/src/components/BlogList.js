// import React, { useContext } from 'react';
// import BlogCard from './BlogCard';
// import { BlogContext } from '../context/BlogContext';

// const BlogList = () => {
//   const { blogs } = useContext(BlogContext);

//   return (
//     <div className="blog-list">
//       {blogs.map((blog) => (
//         <BlogCard key={blog.id} blog={blog} />
//       ))}
//     </div>
//   );
// };

// export default BlogList;



//2nd 

import React from "react";

const BlogList = ({ blogs, onEditBlog, onDeleteBlog }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-card">
          <h3>{blog.title}</h3>
          <img src={blog.imageUrl} alt={blog.title} />
          <p>{blog.description}</p>
          <button onClick={() => onEditBlog(blog)}>Edit Blog</button>
          <button onClick={() => onDeleteBlog(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

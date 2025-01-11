

// import React, { useContext } from "react";
// import { BlogContext } from "../context/BlogContext";

// const BlogCard = ({ blog }) => {
//   const { deleteBlog, setEditingBlog } = useContext(BlogContext);

//   return (
//     <div className="blog-card">
//       <h3>{blog.title}</h3>
//       <img src={blog.imageUrl} alt={blog.title} />
//       <p>{blog.description}</p>
//       <button onClick={() => setEditingBlog(blog)}>Edit Blog</button>
//       <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
//     </div>
//   );
// };

// export default BlogCard;






import React, { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const BlogCard = ({ blog }) => {
  const { deleteBlog, setEditingBlog } = useContext(BlogContext);

  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <img src={blog.imageUrl} alt={blog.title} />
      <p>{blog.description}</p>
      <button onClick={() => setEditingBlog(blog)}>Edit Blog</button>
      <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
    </div>
  );
};

export default BlogCard;

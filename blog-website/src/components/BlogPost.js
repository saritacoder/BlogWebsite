import React from 'react';
import { useBlog } from './BlogContext';

const BlogPost = ({ blog }) => {
    const { setEditingBlog, deleteBlog } = useBlog();

    return (
        <div className="blog-post">
            <img src={blog.imageUrl} alt="Blog Post" />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button onClick={() => setEditingBlog(blog)}>Edit Blog</button>
            <button onClick={() => deleteBlog(blog.id)}>Delete Blog</button>
        </div>
    );
};

export default BlogPost;

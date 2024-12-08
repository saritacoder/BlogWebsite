import React from 'react';
import { useBlog } from './BlogContext';
import BlogPost from './BlogPost';

const BlogList = () => {
    const { blogs } = useBlog();

    return (
        <div className="blog-list">
            {blogs.map(blog => <BlogPost key={blog.id} blog={blog} />)}
        </div>
    );
};

export default BlogList;

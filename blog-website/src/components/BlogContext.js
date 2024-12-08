import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [showAddForm, setShowAddForm] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);

    const addBlog = (newBlog) => {
        setBlogs([...blogs, newBlog]);
        setShowAddForm(false);
    };

    const editBlog = (updatedBlog) => {
        setBlogs(blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
        setEditingBlog(null);
    };

    const deleteBlog = (id) => {
        setBlogs(blogs.filter(blog => blog.id !== id));
    };

    return (
        <BlogContext.Provider value={{ blogs, showAddForm, setShowAddForm, addBlog, editBlog, deleteBlog, editingBlog, setEditingBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

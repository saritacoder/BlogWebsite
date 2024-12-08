import React, { useState, useEffect } from 'react';
import { useBlog } from './BlogContext';

const AddBlogForm = () => {
    const { addBlog, editBlog, editingBlog, setShowAddForm } = useBlog();
    const [imageUrl, setImageUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (editingBlog) {
            setImageUrl(editingBlog.imageUrl);
            setTitle(editingBlog.title);
            setDescription(editingBlog.description);
        }
    }, [editingBlog]);

    const handleSubmit = () => {
        const blog = {
            id: editingBlog ? editingBlog.id : Date.now(),
            imageUrl,
            title,
            description
        };
        if (editingBlog) {
            editBlog(blog);
        } else {
            addBlog(blog);
        }
    };

    return (
        <div className="add-blog-form">
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <button onClick={handleSubmit}>Post Blog</button>
            <button onClick={() => setShowAddForm(false)}>Close</button>
        </div>
    );
};

export default AddBlogForm;

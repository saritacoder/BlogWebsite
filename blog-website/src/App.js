import React from 'react';
// import { BlogProvider, useBlog } from './BlogContext';
// import BlogList from './BlogList';
// import AddBlogForm from './AddBlogForm';
import BlogList from './components/BlogList';
import AddBlogForm from './components/AddBlogForm';
import { BlogProvider,useBlog } from './components/BlogContext';

const App = () => {
    const { showAddForm, setShowAddForm } = useBlog();

    return (
        <div className="app">
            <h1>Blog Website</h1>
            <button onClick={() => setShowAddForm(true)}>Add New Blog</button>
            {showAddForm && <AddBlogForm />}
            <BlogList />
        </div>
    );
};

export default () => (
    <BlogProvider>
        <App />
    </BlogProvider>
);

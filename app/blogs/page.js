'use client';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BlogCard from '../components/BlogCard';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
          My Blogs
        </h1>

        {blogs.length === 0 ? (
          <div className="text-center text-gray-600">
            <p className="text-lg">No blogs found.</p>
            <p className="mt-2 text-sm">Start by creating your first blog!</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            {blogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
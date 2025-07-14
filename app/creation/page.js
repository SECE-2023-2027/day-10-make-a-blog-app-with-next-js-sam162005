'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function CreateBlogPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleCreate = () => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const newBlog = {
      id: Date.now(),
      title,
      author,
      tags: tags.split(',').map(tag => tag.trim()),
      imageUrl,
      content,
    };
    blogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    router.push('/blogs');
  };

  const isFormValid = title.trim() && content.trim() && author.trim();

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 ">Create a New Blog</h2>

        <label className="block mb-1  font-medium">Title</label>
        <input
          type="text"
          placeholder="Enter blog title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />

        <label className="block mb-1  font-medium">Author</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />

        <label className="block mb-1 font-medium">Tags</label>
        <input
          type="text"
          placeholder="e.g., tech, travel, coding"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />



        <label className="block mb-1  font-medium">Content</label>
        <textarea
          placeholder="Write your blog content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-6 px-4 py-3 h-48 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
        />

        <button
          onClick={handleCreate}
          disabled={!isFormValid}
          className={`px-6 py-3 rounded-md font-semibold transition ${
            isFormValid
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Save Blog
        </button>
      </div>
    </>
  );
}
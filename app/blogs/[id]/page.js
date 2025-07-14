'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';

export default function BlogPage() {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const found = blogs.find(b => b.id === Number(id));
    setBlog(found);
    setLoading(false);
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading blog...</p>
        ) : blog ? (
          <>
            <button
              onClick={() => router.back()}
              className="mb-6 px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded-md"
            >
              ← Back
            </button>
            <h1 className="text-4xl font-extrabold mb-4 text-gray-800">{blog.title}</h1>
            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
              {blog.content}
            </p>
          </>
        ) : (
          <p className="text-center text-gray-500 text-lg">Blog not found.</p>
        )}
      </div>
    </>
  );
}
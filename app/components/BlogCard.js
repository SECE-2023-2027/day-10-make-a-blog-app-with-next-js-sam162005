'use client';
import Link from 'next/link';

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="block bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:bg-blue-100 hover:shadow-md transition duration-300 ease-in-out"
    >
      <h3 className="text-2xl font-bold text-blue-900 mb-3">{blog.title}</h3>
      <p className="text-blue-800 text-sm leading-relaxed">
        {blog.content.slice(0, 120)}...
      </p>
      <span className="text-blue-700 text-sm font-medium mt-4 inline-block hover:underline">
        Read More →
      </span>
    </Link>
  );
}
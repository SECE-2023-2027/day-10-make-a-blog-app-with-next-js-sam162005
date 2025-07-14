'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-900 shadow-md">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          title="Home"
          className="text-3xl font-extrabold text-white hover:text-purple-400 transition"
        >
          Blog
        </Link>

        <Link
          href="/blogs"
          title="View all blogs"
          className="text-lg text-gray-300 hover:text-white transition"
        >
          Blogs
        </Link>

        <Link
          href="/create"
          title="Create a new blog"
          className="text-lg text-gray-300 hover:text-white transition"
        >
          Create
        </Link>

        
      </div>
    </nav>
  );
}

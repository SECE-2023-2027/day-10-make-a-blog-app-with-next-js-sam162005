'use client';
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="relative h-[90vh] bg-cover bg-center text-black">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-100 opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hello, Writer!</h1>
          <p className="text-lg md:text-xl mb-8 max-w-xl">
           Start sharing your thoughts, manage your content, and read inspiring blogs — straight from your browser.
          </p>
          <button
            onClick={() => router.push('/create')}
            className="bg-blue-600 text-white px-6 py-3 text-lg rounded hover:bg-blue-700 transition"
          >
            Create Blog
          </button>
        </div>
      </div>
    </>
  );
}

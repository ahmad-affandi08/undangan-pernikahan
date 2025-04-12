"use client";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white">
      <div className="text-center p-8 bg-opacity-70 rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold mb-4 tracking-wide">Fandi & Revo</h1>
        <p className="text-3xl italic mb-8">Wedding Coming Soon</p>
        <div className="animate-pulse text-lg">
          <p>Stay tuned for the big day!</p>
        </div>
      </div>
    </div>
  );
}

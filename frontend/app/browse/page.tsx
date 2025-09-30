"use client";

import Link from "next/link";

// Placeholder data - will be replaced with Effect-based API calls
const shares = [
  {
    id: 1,
    title: "Acid Bassline Pattern",
    codeType: "strudel",
    author: "User1",
    createdAt: "2025-01-01",
  },
  {
    id: 2,
    title: "Breakbeat Loop",
    codeType: "tidalcycles",
    author: "User2",
    createdAt: "2025-01-02",
  },
];

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Browse Shares</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shares.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-gray-400">No shares yet. Be the first to share!</p>
              <Link
                href="/share"
                className="inline-block mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
              >
                Share Now
              </Link>
            </div>
          ) : (
            shares.map((share) => (
              <div
                key={share.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <h3 className="text-xl font-bold mb-2">{share.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm px-2 py-1 bg-purple-600 rounded">
                    {share.codeType}
                  </span>
                </div>
                <p className="text-sm text-gray-400">By {share.author}</p>
                <p className="text-sm text-gray-400">{share.createdAt}</p>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

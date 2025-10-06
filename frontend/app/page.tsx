import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Algorave Share
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Share and discover code and audio from Strudel and TidalCycles
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/share"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Share Your Code
            </Link>
            <Link
              href="/browse"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Browse Shares
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">🎵 Share Audio</h2>
            <p className="text-gray-300">
              Upload and share your algorave audio creations with the community
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">💻 Share Code</h2>
            <p className="text-gray-300">
              Share your Strudel or TidalCycles code snippets and patterns
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">🔍 Discover</h2>
            <p className="text-gray-300">
              Explore and learn from other artists&apos; code and compositions
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-3">🚀 Built with Effect</h2>
            <p className="text-gray-300">
              Powered by Next.js and Effect for robust, composable code
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

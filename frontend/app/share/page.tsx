"use client";

import { useState } from "react";
import Link from "next/link";

export default function SharePage() {
  const [codeType, setCodeType] = useState<"strudel" | "tidalcycles">("strudel");
  const [code, setCode] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submission using Effect
    console.log("Submitting:", { codeType, code, title });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-purple-400 hover:text-purple-300">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-8">Share Your Code</h1>

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
              placeholder="Give your creation a name..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Code Type</label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setCodeType("strudel")}
                className={`px-6 py-2 rounded font-medium transition-colors ${
                  codeType === "strudel"
                    ? "bg-purple-600"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Strudel
              </button>
              <button
                type="button"
                onClick={() => setCodeType("tidalcycles")}
                className={`px-6 py-2 rounded font-medium transition-colors ${
                  codeType === "tidalcycles"
                    ? "bg-purple-600"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                TidalCycles
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="code" className="block text-sm font-medium mb-2">
              Code
            </label>
            <textarea
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none font-mono text-sm h-64"
              placeholder={`Enter your ${codeType} code here...`}
              required
            />
          </div>

          <div>
            <label htmlFor="audio" className="block text-sm font-medium mb-2">
              Audio File (Optional)
            </label>
            <input
              id="audio"
              type="file"
              accept="audio/*"
              className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Share
          </button>
        </form>
      </main>
    </div>
  );
}

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 py-20">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Ioannis Moustakas</h1>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          )}
        </div>

        <section className="space-y-6">
          <p className="text-lg">
            👋 Hi there. I am a data scientist/bioinformmatician. This site will become my portfolio and blog.
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <ul className="list-disc list-inside">
              <li>Project 1 (coming soon)</li>
              <li>Project 2 (coming soon)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Blog</h2>
            <p>Blog posts will show up here once I start writing.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

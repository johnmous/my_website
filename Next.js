// pages/index.tsx
import Head from "next/head";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>John Doe | Developer Portfolio</title>
      </Head>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">John Doe</h1>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border px-3 py-1 rounded"
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </header>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="mt-2 text-lg max-w-2xl">
            I'm a developer who loves building minimal and functional web experiences.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-4 space-y-4">
            <li className="border rounded-xl p-4 shadow-md">
              <h3 className="text-lg font-bold">Project One</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Short project description goes here.</p>
              <Link href="#" className="text-blue-500 hover:underline mt-1 inline-block">View Project</Link>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold">Blog</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Coming soon: dev thoughts, notes & tutorials.</p>
        </section>

        <footer className="mt-20 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} John Doe
        </footer>
      </main>
    </>
  );
}

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// pages/_app.tsx
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

* {
  box-sizing: border-box;
}

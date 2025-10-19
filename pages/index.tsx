/**
 * Home Page Component
 *
 * This is the main landing page of your website.
 * It includes:
 * - A header with your name and a dark/light mode toggle
 * - Tab navigation to switch between different sections
 * - Content sections that change based on the active tab
 */

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
// Import all our custom components
import Navigation from '../components/Navigation';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  // useTheme hook from next-themes gives us access to theme state
  const { theme, setTheme } = useTheme();

  // Track which tab is currently active (default is "About")
  const [activeTab, setActiveTab] = useState('About');

  // mounted state prevents hydration mismatch (SSR issue)
  // We wait until component mounts in browser before showing theme toggle
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Function to render the correct section based on activeTab
  const renderContent = () => {
    // This is like a switch statement - checks activeTab and returns the right component
    switch (activeTab) {
      case 'About':
        return <AboutSection />;
      case 'Projects':
        return <ProjectsSection />;
      case 'Blog':
        return <BlogSection />;
      case 'Contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Container with max width for better readability on large screens */}
      <div className="max-w-2xl mx-auto px-4 py-20">
        {/* Header section with name and theme toggle */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Ioannis Moustakas</h1>

          {/* Only show theme toggle after component mounts (prevents SSR issues) */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          )}
        </div>

        {/* Navigation component - pass current tab and function to change it */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content area - displays different content based on activeTab */}
        {renderContent()}
      </div>
    </main>
  );
}

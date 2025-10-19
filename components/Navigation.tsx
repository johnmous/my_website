/**
 * Navigation Component
 *
 * This component displays a horizontal tab navigation bar.
 * It receives the current active tab and a function to change it from the parent.
 */

// TypeScript interface defines what props this component expects
interface NavigationProps {
  activeTab: string;           // Which tab is currently selected (e.g., "About")
  setActiveTab: (tab: string) => void;  // Function to change the active tab
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  // Array of all tab names - easy to add/remove tabs here
  const tabs = ['About', 'Projects', 'Blog', 'Contact'];

  return (
    // <nav> is the semantic HTML tag for navigation
    // The border-b creates a bottom border for the entire nav bar
    <nav className="border-b border-gray-200 dark:border-gray-800 mb-8">
      {/* Container with flexbox to align tabs horizontally with spacing */}
      <div className="flex space-x-8">
        {/* Loop through each tab and create a button */}
        {tabs.map((tab) => (
          <button
            key={tab}  // React needs a unique key for each item in a list
            onClick={() => setActiveTab(tab)}  // When clicked, update the active tab
            className={`pb-4 px-1 border-b-2 transition-colors ${
              // Conditional styling: active tab gets blue color and underline
              activeTab === tab
                ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}

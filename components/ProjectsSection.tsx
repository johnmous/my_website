/**
 * Projects Section Component
 *
 * This displays your portfolio projects.
 * It's shown when the "Projects" tab is active.
 */

export default function ProjectsSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">My Projects</h2>

        {/* List of project cards - you can add more projects here */}
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coming soon - Add your project description here
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Coming soon - Add your project description here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

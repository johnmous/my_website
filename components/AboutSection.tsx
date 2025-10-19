/**
 * About Section Component
 *
 * This displays your personal introduction and background.
 * It's shown when the "About" tab is active.
 */

export default function AboutSection() {
  return (
    <section className="space-y-6">
      {/* space-y-6 adds vertical spacing between child elements */}

      <p className="text-lg">
        👋 Hi there. I am a data scientist/bioinformatician. This site will become my portfolio and blog.
      </p>

      {/* You can add more about information here */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Background</h2>
        <p>
          Add your educational background, skills, and experience here.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Data Science</li>
          <li>Bioinformatics</li>
          <li>Add your specific skills here</li>
        </ul>
      </div>
    </section>
  );
}

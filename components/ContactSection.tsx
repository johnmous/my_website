/**
 * Contact Section Component
 *
 * This displays your contact information and/or a contact form.
 * It's shown when the "Contact" tab is active.
 */

export default function ContactSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Feel free to reach out to me through any of the following channels:
        </p>

        {/* Contact information list */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400">Add your LinkedIn profile</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400">Add your GitHub profile</p>
          </div>
        </div>

        {/* Optional: You can add a contact form here later */}
        {/* <form className="mt-8">
              <input type="email" placeholder="Your email" />
              <textarea placeholder="Your message"></textarea>
              <button type="submit">Send</button>
            </form> */}
      </div>
    </section>
  );
}

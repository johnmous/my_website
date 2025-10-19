/**
 * Blog Section Component
 *
 * This displays your blog posts.
 * It's shown when the "Blog" tab is active.
 */

export default function BlogSection() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Blog Posts</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Blog posts will show up here once I start writing.
        </p>

        {/* Placeholder for future blog posts */}
        {/* When you add blog posts, you can map through an array like:
            blogPosts.map(post => <BlogPostCard key={post.id} post={post} />)
        */}
        <div className="space-y-4">
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <h3 className="font-semibold mb-2">First Blog Post (Coming Soon)</h3>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">Date: TBD</p>
            <p className="text-gray-600 dark:text-gray-400">
              Your first blog post will appear here...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

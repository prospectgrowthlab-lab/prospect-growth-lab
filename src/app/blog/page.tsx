import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./data";
import { generateSEO } from "@/lib/seo";

export const metadata: Metadata = generateSEO({
  title: "Blog | Prospect Growth Lab — LinkedIn Outbound Tips & Strategies",
  description:
    "Expert insights on LinkedIn outbound, cold email, sales automation, and B2B pipeline growth. Read our latest articles and guides.",
  path: "/blog",
  keywords: [
    "LinkedIn outbound tips",
    "sales automation strategies",
    "B2B lead generation blog",
    "LinkedIn prospecting guide",
    "cold outreach tips",
  ],
});

export default function BlogPage() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-border text-xs text-muted uppercase tracking-widest">
            Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            LinkedIn Outbound <span className="text-accent">Insights</span>
          </h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Strategies, templates, and data-driven guides to help you scale your B2B pipeline with LinkedIn.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-surface border border-border rounded-xl p-6 hover:border-accent/50 transition flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-muted mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-lg font-semibold mb-3 group-hover:text-accent transition">
                {post.title}
              </h2>
              <p className="text-muted text-sm leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="text-accent text-sm font-medium mt-4 inline-block">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "../data";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      url: `https://prospect-growth-lab.vercel.app/blog/${post.slug}`,
    },
  };
}

/* Simple markdown-ish renderer for our blog content */
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-semibold mt-8 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold mt-12 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("- **") || line.startsWith("- ")) {
      // Collect list items
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-2 my-4 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-accent pl-4 my-6 text-muted italic" dangerouslySetInnerHTML={{ __html: inlineFormat(line.slice(2)) }} />
      );
    } else if (line.startsWith("| ")) {
      // Skip markdown tables — render as text
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].startsWith("|---")) tableLines.push(lines[i]);
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full text-sm text-left text-muted">
            {tableLines.map((tl, j) => {
              const cells = tl.split("|").filter(Boolean).map((c) => c.trim());
              const Tag = j === 0 ? "th" : "td";
              return (
                <tr key={j} className={j === 0 ? "border-b border-border font-semibold text-foreground" : "border-b border-border"}>
                  {cells.map((c, k) => <Tag key={k} className="py-2 pr-4">{c}</Tag>)}
                </tr>
              );
            })}
          </table>
        </div>
      );
      continue;
    } else if (line.match(/^\d+\.\s/)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s/)) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-2 my-4 text-muted">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(<p key={key++} className="text-muted leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: inlineFormat(line) }} />);
    }
    i++;
  }
  return elements;
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Person", name: "Louis Wand" },
    publisher: { "@type": "Organization", name: "Prospect Growth Lab" },
    url: `https://prospect-growth-lab.vercel.app/blog/${post.slug}`,
  };

  return (
    <main className="pt-32 pb-20 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-accent text-sm hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        <div className="flex items-center gap-3 text-xs text-muted mb-4">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* CTA */}
        <div className="mt-16 bg-surface border border-border rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Scale Your LinkedIn Outbound?
          </h2>
          <p className="text-muted text-lg mb-6 max-w-xl mx-auto">
            Book a free strategy call and let&apos;s map out how LinkedIn outbound can work for your business.
          </p>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent hover:bg-accent-light text-white font-semibold px-8 py-3.5 rounded-lg text-lg transition"
          >
            Book a Free Strategy Call →
          </a>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}

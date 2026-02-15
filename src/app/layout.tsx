import type { Metadata } from "next";
import "./globals.css";
import { Nav, Footer } from "./components";

export const metadata: Metadata = {
  title: "Prospect Growth Lab | LinkedIn Outbound Automation",
  description:
    "We help mid-market companies scale their outbound pipeline with done-for-you LinkedIn automation. Book a call today.",
  openGraph: {
    title: "Prospect Growth Lab | LinkedIn Outbound Automation",
    description:
      "We help mid-market companies scale their outbound pipeline with done-for-you LinkedIn automation.",
    url: "https://prospect-growth-lab.vercel.app",
    siteName: "Prospect Growth Lab",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prospect Growth Lab",
              url: "https://prospect-growth-lab.vercel.app",
              founder: { "@type": "Person", name: "Louis Wand" },
              description:
                "Done-for-you LinkedIn outbound automation for mid-market companies.",
            }),
          }}
        />
      </body>
    </html>
  );
}
